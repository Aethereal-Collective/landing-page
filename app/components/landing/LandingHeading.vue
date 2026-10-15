<template>
	<div class="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center" data-aos="fade-up" data-aos-duration="700">
		<span class="rounded-full border border-neutral-200 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 backdrop-blur">{{ eyebrow }}</span>
		<h2 class="text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl md:text-6xl">
			{{ title }}
			<span v-if="accent" class="chrome-text block">{{ accent }}</span>
		</h2>
		<p v-if="subtitle" class="max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg">{{ subtitle }}</p>
	</div>
</template>

<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; accent?: string; subtitle?: string }>();
</script>
