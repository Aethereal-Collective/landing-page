<template>
	<section id="jumbotron" class="w-full h-screen relative flex justify-center items-center">
		<div id="tsparticles"></div>

		<div class="jumbotron__text flex flex-col gap-5">
			<p class="text-2xl sm:text-3xl md:text-5xl text-center opacity-50">Join the Movement</p>

			<h1 class="jumbotron__heading text-5xl sm:text-6xl md:text-7xl font-black inline-flex flex-col sm:flex-row items-center">
				<span>We </span>
				<span class="animated-word inline-block w-[180px] md:w-[220px] text-center overflow-hidden">{{ currentWord }}</span>
				<span> Together</span>
			</h1>

			<p class="text-2xl sm:text-3xl md:text-5xl text-center opacity-50">Shape the Future</p>
		</div>

		<div class="absolute bottom-0 left-0 right-0 mb-10 flex justify-center items-center">
			<NuxtLink to="#intro" class="italic opacity-45 flex flex-col justify-center items-center gap-y-5 text-xs sm:text-sm" aria-label="Scroll to introduction section">
				<span class="scroll"> See more our movement </span>
				<Icon name="ph:mouse-scroll-thin" class="animate-bounce text-xl" aria-hidden="true" />
			</NuxtLink>
		</div>
	</section>
</template>

<script setup lang="ts">
import { particleOptions } from "~/lib/particle";
import { tsParticles } from "@tsparticles/engine";

const { $anime } = useNuxtApp();

const words = ["Learn", "Build", "Grow"];
const currentIndex = ref(0);
const currentWord = ref(words[currentIndex.value]);
let intervalId: ReturnType<typeof setInterval> | null = null;

const animateWord = () => {
	const wordElement = document.querySelector(".animated-word");
	if (!wordElement) return;

	$anime({
		targets: wordElement,
		translateY: [0, 50],
		opacity: [1, 0],
		duration: 500,
		easing: "easeInOutQuad",
		complete: () => {
			currentIndex.value = (currentIndex.value + 1) % words.length;
			currentWord.value = words[currentIndex.value];

			$anime({
				targets: wordElement,
				translateY: [-50, 0],
				opacity: [0, 1],
				duration: 500,
				easing: "easeInOutQuad",
			});
		},
	});
};

onMounted(async () => {
	animateWord();
	intervalId = setInterval(animateWord, 5000);

	// Lazy load PowerGlitch
	const { PowerGlitch } = await import("powerglitch");
	PowerGlitch.glitch(".scroll", {
		timing: {
			duration: 5000,
		},
	});

	// Lazy load tsParticles slim bundle (smaller than loadFull)
	const { loadSlim } = await import("@tsparticles/slim");
	await loadSlim(tsParticles);
	await tsParticles.load({
		id: "tsparticles",
		options: particleOptions as any,
	});
});

onBeforeUnmount(() => {
	if (intervalId) {
		clearInterval(intervalId);
		intervalId = null;
	}
});
</script>

<style scoped>
#tsparticles {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	padding: 0;
	margin: 0;
	z-index: 0;
}
</style>
