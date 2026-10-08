<script setup>
const siteUrl = "https://aethereal.top";
const route = useRoute();
const pageUrl = computed(() => siteUrl + (route.path === "/" ? "" : route.path));
const ogImageUrl = "https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/aethereal.top/%C3%A6thereal/https%3A%2F%2Faethereal.top%2Flogo.jpg/og.png";
const title = "Aethereal (æthereal) — AI, Data Science & Blockchain Company in Indonesia";
const description = "Aethereal is an Indonesian tech company building AI, data science, blockchain, and fintech solutions, plus open-source developer tools.";

useSeoMeta({
	title,
	ogTitle: title,
	description,
	ogDescription: description,
	ogImage: ogImageUrl,
	ogImageAlt: "æthereal logo",
	ogImageWidth: "1200",
	ogImageHeight: "630",
	ogType: "website",
	ogLocale: "en_US",
	ogSiteName: "æthereal",
	ogUrl: pageUrl,
	themeColor: "#09090b",
	twitterCard: "summary_large_image",
	twitterImage: ogImageUrl,
	twitterTitle: title,
	twitterDescription: description,
	author: "æthereal Collective",
});

useHead({
	link: [
		{ rel: "canonical", href: pageUrl },
		{ rel: "apple-touch-icon", href: "/logo.jpg" },
	],
	script: [
		{
			type: "application/ld+json",
			innerHTML: JSON.stringify([{
				"@context": "https://schema.org",
				"@type": "WebSite",
				name: "Aethereal",
				alternateName: "æthereal",
				url: siteUrl,
			}, {
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Aethereal",
				alternateName: ["æthereal", "Aethereal Collective"],
				url: siteUrl,
				logo: `${siteUrl}/logo.jpg`,
				description,
				foundingDate: "2023",
				founder: { "@type": "Person", name: "Muhamad Jamil Fanreza", sameAs: "https://www.linkedin.com/in/fanreza" },
				email: "team@aethereal.top",
				address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
				knowsAbout: ["Artificial Intelligence", "Data Science", "Blockchain", "Fintech"],
				sameAs: [
					"https://discord.gg/aethereal",
					"https://x.com/aethereal_co",
					"https://github.com/Aethereal-Collective",
					"https://medium.com/@aethereal_co",
				],
			}]),
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
