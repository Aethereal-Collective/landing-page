<template>
	<div class="bg-white text-neutral-950">
		<LandingNav />
		<main class="mx-auto w-full max-w-6xl px-4 pb-24 pt-32 md:pt-40">
			<header class="flex flex-col gap-4">
				<h1 class="text-5xl font-extrabold tracking-[-0.03em] md:text-7xl">Products</h1>
				<p class="max-w-2xl text-lg text-neutral-500">What we build and ship.</p>
			</header>

			<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				<a v-for="p in PROJECTS" :key="p.name" :href="p.url" target="_blank" rel="noopener noreferrer" class="block">
					<InspiraCardSpotlight class="border-neutral-200 bg-white" slot-class="flex h-full flex-col gap-3 p-6" gradient-color="#e5e5e5" :gradient-opacity="0.9">
						<div class="flex items-center justify-between">
							<span class="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">{{ p.tag }}</span>
							<Icon name="ph:arrow-up-right" class="text-lg text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-900" aria-hidden="true" />
						</div>
						<h2 class="mt-2 text-xl font-bold tracking-tight">{{ p.name }}</h2>
						<p class="text-sm leading-relaxed text-neutral-500">{{ p.description }}</p>
					</InspiraCardSpotlight>
				</a>
			</div>

			<div class="mt-12 flex justify-center">
				<a :href="LINKS.github" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold transition-colors hover:bg-neutral-50">
					<Icon name="ph:github-logo" class="text-lg" aria-hidden="true" /> Follow us on GitHub
				</a>
			</div>
		</main>
		<LandingFooter />
	</div>
</template>

<script setup lang="ts">
import { LINKS, PROJECTS } from "~/data/site";

const title = "Products — Aethereal";
const description = "Products built by Aethereal.";
useSeoMeta({ title, ogTitle: title, twitterTitle: title, description, ogDescription: description, twitterDescription: description });
</script>
