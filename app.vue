<script setup>
useSeoMeta({
	title: "æthereal",
	ogTitle: "æthereal",
	description: "æthereal an unique crypto collective since '21, based in Indonesia.",
	ogDescription: "æthereal an unique crypto collective since '21, based in Indonesia.",
	ogImage: "/logo.jpg",
	twitterCard: "summary_large_image",
	ogimageAlt: "æthereal",
	ogImageWidth: "226",
	ogImageHeight: "226",
	twitterImage: "/logo.jpg",
});
</script>

<template>
	<Html lang="id" class="dark">
		<div>
			<NuxtLayout>
				<NuxtLoadingIndicator color="#B68A62" />
				<NuxtPage />
			</NuxtLayout>
		</div>
	</Html>
</template>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
	transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
