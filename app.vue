<script setup>
useSeoMeta({
	title: "æthereal",
	ogTitle: "æthereal",
	description: "æthereal an unique crypto collective since '21, based in Indonesia.",
	ogDescription: "æthereal an unique crypto collective since '21, based in Indonesia.",
	ogImage: "https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/aethereal.my.id/%C3%A6thereal/https%3A%2F%2Faethereal.my.id%2Flogo.jpg/og.png",
	twitterCard: "summary_large_image",
	ogimageAlt: "æthereal",
	ogImageWidth: "226",
	ogImageHeight: "226",
	twitterImage: "https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/aethereal.my.id/%C3%A6thereal/https%3A%2F%2Faethereal.my.id%2Flogo.jpg/og.png",
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
