import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },

	ssr: true,

	site: {
		url: "https://aethereal.my.id",
		name: "æthereal",
	},

	modules: [
		"shadcn-nuxt",
		"@hypernym/nuxt-anime",
		"@nuxt/fonts",
		"@nuxt/icon",
		"nuxt-aos",
		"@nuxt/image",
		"@nuxtjs/sitemap",
		"@nuxtjs/robots",
	],
	css: ["~/assets/css/tailwind.css"],

	vite: {
		plugins: [tailwindcss()],
	},

	shadcn: {
		prefix: "",
		componentDir: "./app/components/ui",
	},

	fonts: {
		defaults: {
			weights: [400, 600, 700, 800, 900],
		},
	},

	image: {
		quality: 80,
		format: ["webp", "png"],
	},

	robots: {
		groups: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
	},

	nitro: {
		compressPublicAssets: true,
	},
});
