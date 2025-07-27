<template>
	<figure class="relative h-full flex flex-col w-64 cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
		<div class="flex flex-row items-center gap-5">
			<slot name="img">
				<!-- fallback jika tidak ada slot img -->
				<img :src="img" class="rounded-full" width="32" height="32" alt="" />
			</slot>

			<div class="flex flex-col">
				<span class="text-sm font-medium dark:text-white">
					{{ name }}
				</span>
				<p class="text-xs font-medium dark:text-white/40">{{ username }}</p>
			</div>
		</div>
		<blockquote class="mt-5 text-sm">{{ body }}</blockquote>
	</figure>
</template>

<script lang="ts" setup>
interface Props {
	img: string;
	name: string;
	username: string;
	body: string;
}

defineProps<Props>();
</script>
