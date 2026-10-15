<template>
	<section class="w-full bg-white px-4 py-24 md:py-32">
		<LandingHeading eyebrow="How we work" title="Research. Build." accent="Share." />

		<ol class="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3">
			<li v-for="(s, i) in PROCESS" :key="s.step" class="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8" data-aos="fade-up" :data-aos-delay="i * 100">
				<span class="chrome-text text-7xl font-extrabold tracking-tighter">{{ s.step }}</span>
				<h3 class="mt-6 text-2xl font-bold tracking-tight text-neutral-950">{{ s.title }}</h3>
				<p class="mt-3 leading-relaxed text-neutral-500">{{ s.body }}</p>
			</li>
		</ol>
	</section>
</template>

<script setup lang="ts">
import { PROCESS } from "~/data/site";
</script>
