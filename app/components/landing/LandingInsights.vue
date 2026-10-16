<template>
	<section v-if="posts.length" id="insights" class="w-full scroll-mt-24 bg-neutral-50/60 px-4 py-24 md:py-32">
		<LandingHeading eyebrow="Insights" title="Research, explained" accent="in plain language." subtitle="Our writing on crypto markets, tokenomics, and onchain business models." />

		<div class="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a v-for="(post, i) in posts" :key="post.url" :href="post.url" target="_blank" rel="noopener noreferrer" class="group flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]" data-aos="fade-up" :data-aos-delay="(i % 3) * 80">
				<div class="aspect-[16/9] overflow-hidden bg-neutral-100">
					<img v-if="post.image" :src="post.image" :alt="post.title" loading="lazy" class="size-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" />
				</div>
				<div class="flex flex-1 flex-col gap-3 p-6">
					<time :datetime="post.date" class="text-xs font-medium uppercase tracking-[0.15em] text-neutral-400">{{ formatDate(post.date) }}</time>
					<h3 class="text-lg font-bold leading-snug tracking-tight text-neutral-950">{{ post.title }}</h3>
					<p class="text-sm leading-relaxed text-neutral-500">{{ post.excerpt }}</p>
					<span class="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-neutral-950">Read on Medium <Icon name="ph:arrow-up-right" aria-hidden="true" /></span>
				</div>
			</a>
		</div>

		<div class="mt-12 flex justify-center">
			<a :href="LINKS.medium" target="_blank" rel="noopener noreferrer" class="rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]">All articles on Medium</a>
		</div>
	</section>
</template>

<script setup lang="ts">
import { LINKS } from "~/data/site";

const { data: posts } = await useFetch("/api/medium", { key: "medium-posts", default: () => [] });

const formatDate = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
</script>
