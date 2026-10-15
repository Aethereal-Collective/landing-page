<template>
	<section class="w-full bg-white px-4 py-24 md:py-32">
		<div class="mx-auto max-w-5xl">
			<p class="mx-auto max-w-3xl text-center text-2xl font-semibold leading-snug tracking-tight text-neutral-950 md:text-4xl" data-aos="fade-up">
				We believe the next wave of finance is <span class="chrome-text">onchain</span>, and that people deserve tools that make it
				<span class="chrome-text">clear, safe, and understandable</span>.
			</p>

			<dl class="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 md:grid-cols-4">
				<div v-for="stat in visibleStats" :key="stat.label" class="flex flex-col items-center gap-2 bg-white px-4 py-10 text-center">
					<dt class="order-2 text-sm text-neutral-500">{{ stat.label }}</dt>
					<dd class="order-1 text-4xl font-extrabold tracking-tight md:text-5xl">
						<InspiraNumberTicker v-if="stat.ticker" :value="stat.value" :decimal-places="0" :duration="1600" class="!tracking-tight" />
						<span v-else>{{ stat.value }}</span><span>{{ stat.suffix }}</span>
					</dd>
				</div>
			</dl>
			<p class="mt-4 text-center text-xs text-neutral-400">Community count is live from Discord.</p>
		</div>
	</section>
</template>

<script setup lang="ts">
import { FOCUS_AREAS, PROJECTS } from "~/data/site";

const { data: stats } = await useFetch("/api/stats", { key: "site-stats" });

const visibleStats = computed(() =>
	[
		{ label: "Discord members", value: stats.value?.discordMembers ?? null, suffix: "+", ticker: true },
		{ label: "Projects built", value: PROJECTS.length + 1, suffix: "", ticker: true },
		{ label: "Focus areas", value: FOCUS_AREAS.length, suffix: "", ticker: true },
		{ label: "Founded in Indonesia", value: 2023, suffix: "", ticker: false },
	].filter((s) => s.value != null),
);
</script>
