<script setup>
const siteUrl = "https://aethereal.my.id";
const ogImageUrl = "https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/aethereal.my.id/%C3%A6thereal/https%3A%2F%2Faethereal.my.id%2Flogo.jpg/og.png";
const description = "æthereal — a unique crypto collective since '21, based in Indonesia. Learn, build, and grow together.";

useSeoMeta({
	title: "æthereal",
	ogTitle: "æthereal — Crypto Collective",
	description,
	ogDescription: description,
	ogImage: ogImageUrl,
	ogImageAlt: "æthereal logo",
	ogImageWidth: "1200",
	ogImageHeight: "630",
	ogType: "website",
	ogLocale: "en_US",
	ogSiteName: "æthereal",
	ogUrl: siteUrl,
	twitterCard: "summary_large_image",
	twitterImage: ogImageUrl,
	twitterTitle: "æthereal — Crypto Collective",
	twitterDescription: description,
	author: "æthereal Collective",
});

useHead({
	link: [
		{ rel: "canonical", href: siteUrl },
	],
	script: [
		{
			src: "https://platform.twitter.com/widgets.js",
			async: true,
			defer: true,
			type: "text/javascript",
		},
		{
			type: "application/ld+json",
			innerHTML: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "æthereal",
				url: siteUrl,
				logo: `${siteUrl}/logo.jpg`,
				description,
				foundingDate: "2021",
				sameAs: [
					"https://discord.gg/aethereal",
					"https://twitter.com/aethereal_co",
					"https://github.com/Aethereal-Collective",
					"https://medium.com/@aethereal_co",
				],
			}),
		},
	],
});
</script>

<template>
	<Html lang="en" class="dark">
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
