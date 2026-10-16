<template>
	<section id="partners" class="w-full scroll-mt-24 bg-white px-4 py-24 md:py-32">
		<LandingHeading eyebrow="Partners" title="Built by" accent="our partners." subtitle="Products from teams we partner with." />

		<div class="mx-auto mt-16 flex max-w-6xl flex-col gap-8">
			<a v-for="p in PARTNERS" :key="p.name" :href="p.url" target="_blank" rel="noopener noreferrer" class="group grid items-center gap-8 overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-50/60 p-4 transition-shadow hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] md:p-6 lg:grid-cols-[1.4fr_1fr]" data-aos="fade-up">
				<div class="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
					<div class="flex items-center gap-1.5 border-b border-neutral-200 px-4 py-3" aria-hidden="true">
						<span class="size-2.5 rounded-full bg-neutral-300" /><span class="size-2.5 rounded-full bg-neutral-300" /><span class="size-2.5 rounded-full bg-neutral-300" />
						<span class="ml-3 truncate rounded-full bg-neutral-100 px-3 py-1 text-[11px] text-neutral-400">{{ host(p.url) }}</span>
					</div>
					<NuxtImg :src="p.image" :alt="`${p.name} app screenshot`" width="1440" height="900" loading="lazy" class="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" />
				</div>

				<div class="flex flex-col gap-4 p-2 md:p-4">
					<span class="w-fit rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-500">Partner project</span>
					<h3 class="text-3xl font-extrabold tracking-tight text-neutral-950 md:text-4xl">{{ p.name }}</h3>
					<p class="chrome-text text-xl font-bold">{{ p.tagline }}</p>
					<p class="leading-relaxed text-neutral-500">{{ p.description }}</p>
					<ul class="flex flex-wrap gap-2">
						<li v-for="c in p.chains" :key="c" class="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600">{{ c }}</li>
					</ul>
					<span class="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition-transform group-hover:scale-[1.03]">
						Open {{ p.name }} <Icon name="ph:arrow-up-right" aria-hidden="true" />
					</span>
				</div>
			</a>
		</div>
	</section>
</template>

<script setup lang="ts">
import { PARTNERS } from "~/data/site";

const host = (url: string) => new URL(url).host;
</script>
