<template>
	<section id="products" class="w-full scroll-mt-24 bg-white px-4 py-24 md:py-32">
		<LandingHeading eyebrow="Products" title="What we" accent="build." />

		<ul class="mx-auto mt-14 max-w-4xl divide-y divide-neutral-200 border-y border-neutral-200">
			<li v-for="p in PROJECTS" :key="p.name">
				<a :href="p.url" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-between gap-4 py-5">
					<NuxtImg v-if="p.image" :src="p.image" :alt="`${p.name} screenshot`" width="160" height="100" loading="lazy" class="hidden aspect-[16/10] w-40 shrink-0 rounded-xl border border-neutral-200 object-cover object-top sm:block" />
					<span class="flex flex-1 flex-col">
						<span class="text-lg font-bold tracking-tight text-neutral-950 group-hover:underline">{{ p.name }}</span>
						<span class="text-sm text-neutral-500">{{ p.description }}</span>
					</span>
					<span class="flex shrink-0 items-center gap-3 text-sm text-neutral-500">
						{{ p.tag }}
						<Icon name="ph:arrow-up-right" class="text-neutral-400 group-hover:text-neutral-950" aria-hidden="true" />
					</span>
				</a>
			</li>
		</ul>

		<div class="mt-10 flex justify-center">
			<NuxtLink to="/products" class="rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]">All products</NuxtLink>
		</div>
	</section>
</template>

<script setup lang="ts">
import { PROJECTS } from "~/data/site";
</script>
