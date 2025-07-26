// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: ["shadcn-nuxt", "@nuxtjs/color-mode", "@hypernym/nuxt-anime", "@nuxt/fonts", "@nuxt/icon", "nuxt-aos"],

	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: "",
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: "./components/ui",
	},
	fonts: {
		defaults: {
			weights: [400, 500, 600, 700, 800, 900],
		},
	},
	css: ["~/assets/css/tailwind.css"],
	vite: {
		plugins: [tailwindcss()],
	},
});
