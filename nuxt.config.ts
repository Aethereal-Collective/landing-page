import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },

	modules: ["shadcn-nuxt", "@hypernym/nuxt-anime", "@nuxt/fonts", "@nuxt/icon", "nuxt-aos"],
	css: ["~/assets/css/tailwind.css"],

	vite: {
		plugins: [tailwindcss(), tsconfigPaths()],
	},

	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: "",
		/**
		 * Directory that the component lives in.
		 * @default "./app/components/ui"
		 */
		componentDir: "./app/components/ui",
	},

	fonts: {
		defaults: {
			weights: [400, 500, 600, 700, 800, 900],
		},
	},
});
