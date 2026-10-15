<template>
	<section id="ecosystem" class="relative w-full overflow-hidden border-y border-neutral-100 bg-neutral-50/60 py-10">
		<p class="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">Ecosystems and tools we build with</p>
		<div class="relative">
			<InspiraMarquee pause-on-hover class="[--duration:35s] [--gap:3.5rem]">
				<div v-for="item in ECOSYSTEM" :key="item.name" class="flex items-center gap-3 text-neutral-400 transition-colors hover:text-neutral-900">
					<Icon :name="item.icon" class="text-2xl" aria-hidden="true" />
					<span class="text-lg font-semibold">{{ item.name }}</span>
				</div>
			</InspiraMarquee>
			<div class="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-neutral-50" />
			<div class="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-neutral-50" />
		</div>
	</section>
</template>

<script setup lang="ts">
import { ECOSYSTEM } from "~/data/site";
</script>
