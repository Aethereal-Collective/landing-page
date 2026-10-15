<template>
	<canvas ref="canvas" class="pointer-events-none absolute inset-0 size-full" aria-hidden="true" />
</template>

<script setup lang="ts">
// Liquid-chrome metaballs: one raymarched fragment shader, plain WebGL, no 3D library.
const props = withDefaults(defineProps<{ spread?: number }>(), { spread: 0.98 });

const canvas = ref<HTMLCanvasElement | null>(null);

const VERT = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }`;

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uSpread;
uniform float uScale;

float smin(float a, float b, float k) {
	float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
	return mix(b, a, h) - k * h * (1.0 - h);
}

float map(vec3 q) {
	vec3 p = q / uScale;
	float t = uTime * 0.35;
	float s = uSpread;
	float d = length(p - vec3(-s, 1.05 + 0.25 * sin(t), 0.0)) - 1.35;
	d = smin(d, length(p - vec3(-s - 0.55, -0.7 + 0.3 * sin(t * 1.3 + 1.0), 0.3)) - 1.0, 0.9);
	d = smin(d, length(p - vec3(s, -0.85 + 0.3 * cos(t * 0.9), 0.0)) - 1.45, 0.9);
	d = smin(d, length(p - vec3(s + 0.5, 0.85 + 0.25 * sin(t * 1.1 + 2.0), -0.2)) - 0.9, 0.9);
	d = smin(d, length(p - vec3(uMouse * vec2(s, 1.7), 0.8)) - 0.32, 0.7);
	return (d + 0.05 * sin(p.x * 2.1 + t * 2.0) * sin(p.y * 2.3 - t * 1.7) * sin(p.z * 1.9 + t)) * uScale;
}

vec3 normalAt(vec3 p) {
	vec2 e = vec2(0.0015, -0.0015);
	return normalize(e.xyy * map(p + e.xyy) + e.yyx * map(p + e.yyx) + e.yxy * map(p + e.yxy) + e.xxx * map(p + e.xxx));
}

// Studio environment: dark floor, bright sky, softbox strips, a cool rim near the horizon.
vec3 env(vec3 r) {
	vec3 c = mix(vec3(0.07, 0.075, 0.085), vec3(0.6, 0.62, 0.66), smoothstep(-0.6, 0.8, r.y));
	c += smoothstep(0.72, 0.95, r.y) * 1.3;
	c += smoothstep(0.035, 0.0, abs(r.x - 0.55)) * 0.9 * smoothstep(-0.2, 0.6, r.y);
	c += smoothstep(0.05, 0.0, abs(r.x + 0.7)) * 0.45;
	c += vec3(0.55, 0.65, 0.95) * smoothstep(0.22, 0.0, abs(r.y + 0.12)) * 0.35;
	return c;
}

void main() {
	vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
	vec3 ro = vec3(0.0, 0.0, 7.0);
	vec3 rd = normalize(vec3(uv, -1.8));
	float t = 0.0, minD = 1e3, tMin = 0.0;
	for (int i = 0; i < 72; i++) {
		float d = map(ro + rd * t);
		if (d < minD) { minD = d; tMin = t; }
		if (d < 0.001 || t > 14.0) break;
		t += d;
	}
	float alpha = 1.0 - smoothstep(0.0, 0.02, minD);
	if (alpha <= 0.0) { gl_FragColor = vec4(0.0); return; }
	vec3 p = ro + rd * tMin;
	vec3 n = normalAt(p);
	vec3 r = reflect(rd, n);
	float fres = pow(1.0 - max(dot(-rd, n), 0.0), 3.0);
	vec3 col = env(r);
	col = mix(col * 0.9, col + 0.15, fres) * (0.85 + 0.15 * n.y);
	gl_FragColor = vec4(col * alpha, alpha);
}`;

onMounted(() => {
	const el = canvas.value;
	const gl = el?.getContext("webgl", { premultipliedAlpha: true, antialias: false });
	if (!el || !gl) return; // no WebGL: the hero still reads fine without blobs

	const compile = (type: number, src: string) => {
		const s = gl.createShader(type)!;
		gl.shaderSource(s, src);
		gl.compileShader(s);
		return s;
	};
	const prog = gl.createProgram()!;
	gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
	gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
	gl.linkProgram(prog);
	if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
	gl.useProgram(prog);

	gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
	const loc = gl.getAttribLocation(prog, "p");
	gl.enableVertexAttribArray(loc);
	gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

	const u = (name: string) => gl.getUniformLocation(prog, name);
	const uRes = u("uRes"), uTime = u("uTime"), uMouse = u("uMouse"), uSpread = u("uSpread"), uScale = u("uScale");

	// ponytail: pixel budget caps raymarching cost on big screens; raise it if blobs look soft on 4K.
	const MAX_PIXELS = 1_100_000;
	const resize = () => {
		const w = el.clientWidth, h = el.clientHeight;
		const scale = Math.min(window.devicePixelRatio || 1, Math.sqrt(MAX_PIXELS / Math.max(w * h, 1)));
		el.width = Math.round(w * scale);
		el.height = Math.round(h * scale);
		gl.viewport(0, 0, el.width, el.height);
		gl.uniform2f(uRes, el.width, el.height);
		// Half-height of the view at z=0 is ~1.94 world units; push side blobs to the screen edges.
		// Portrait screens are narrow: shrink the blobs so they frame the text instead of covering it.
		const aspect = w / Math.max(h, 1);
		const blobScale = Math.min(1, aspect * 0.85);
		gl.uniform1f(uScale, blobScale);
		gl.uniform1f(uSpread, (aspect * 1.94 * props.spread * (aspect < 1 ? 1.15 : 1)) / blobScale);
	};

	// Droplet rests tucked into the right cluster until the pointer moves.
	const mouse = { x: 1, y: -0.5, tx: 1, ty: -0.5 };
	const onMove = (e: PointerEvent) => {
		const r = el.getBoundingClientRect();
		mouse.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
		mouse.ty = -(((e.clientY - r.top) / r.height) * 2 - 1);
	};

	const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	let visible = true, raf = 0;
	const start = performance.now();
	const frame = (now: number) => {
		mouse.x += (mouse.tx - mouse.x) * 0.05;
		mouse.y += (mouse.ty - mouse.y) * 0.05;
		gl.uniform1f(uTime, (now - start) / 1000);
		gl.uniform2f(uMouse, mouse.x, mouse.y);
		gl.drawArrays(gl.TRIANGLES, 0, 3);
		if (!reduced && visible) raf = requestAnimationFrame(frame);
	};

	const io = new IntersectionObserver(([entry]) => {
		visible = !!entry?.isIntersecting;
		cancelAnimationFrame(raf);
		if (visible) raf = requestAnimationFrame(frame);
	});
	const ro = new ResizeObserver(() => {
		resize();
		if (reduced) frame(performance.now());
	});

	resize();
	io.observe(el);
	ro.observe(el);
	window.addEventListener("pointermove", onMove, { passive: true });

	onBeforeUnmount(() => {
		cancelAnimationFrame(raf);
		io.disconnect();
		ro.disconnect();
		window.removeEventListener("pointermove", onMove);
		gl.getExtension("WEBGL_lose_context")?.loseContext();
	});
});
</script>
