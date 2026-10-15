<template>
	<section id="projects" class="w-full scroll-mt-24 bg-neutral-50/60 px-4 py-24 md:py-32">
		<LandingHeading eyebrow="Projects" title="Things we've built," accent="in the open." subtitle="From payments and DeFi savings to verifiable AI datasets. Every project is open source, so you can read the code." />

		<div class="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
			<a v-for="(p, i) in PROJECTS" :key="p.name" :href="p.url" target="_blank" rel="noopener noreferrer" class="block" data-aos="fade-up" :data-aos-delay="(i % 4) * 80">
				<InspiraCardSpotlight class="border-neutral-200 bg-white" slot-class="flex h-full flex-col gap-3 p-6" gradient-color="#e5e5e5" :gradient-opacity="0.9">
					<div class="flex items-center justify-between">
						<span class="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">{{ p.tag }}</span>
						<Icon name="ph:arrow-up-right" class="text-lg text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-900" aria-hidden="true" />
					</div>
					<h3 class="mt-2 text-xl font-bold tracking-tight text-neutral-950">{{ p.name }}</h3>
					<p class="text-sm leading-relaxed text-neutral-500">{{ p.description }}</p>
				</InspiraCardSpotlight>
			</a>
		</div>

		<div class="mt-12 flex justify-center">
			<a :href="LINKS.github" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-50">
				<Icon name="ph:github-logo" class="text-lg" aria-hidden="true" /> Follow us on GitHub
			</a>
		</div>
	</section>
</template>

<script setup lang="ts">
import { LINKS, PROJECTS } from "~/data/site";
</script>
