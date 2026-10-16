<template>
	<div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium uppercase tracking-[0.12em] text-neutral-400">
		<span :class="featured ? 'bg-neutral-950 text-white' : 'bg-neutral-100 text-neutral-700'" class="rounded-full px-2.5 py-1 normal-case tracking-normal">{{ categoryLabel(report.category) }}</span>
		<time :datetime="report.date">{{ formatDate(report.date) }}</time>
		<span aria-hidden="true">·</span>
		<span>{{ readMinutes(report.body) }} min read</span>
		<span aria-hidden="true">·</span>
		<span>{{ report.topic }}</span>
	</div>
</template>

<script setup lang="ts">
import { categoryLabel, formatDate, readMinutes } from "~/data/research";

defineProps<{ report: { category: string; date: string; topic: string; body: unknown }; featured?: boolean }>();
</script>
