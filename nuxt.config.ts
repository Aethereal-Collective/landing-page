import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },

	ssr: true,

	site: {
		url: "https://aethereal.top",
		name: "Aethereal",
		description: "Indonesian tech company building AI, data science, blockchain, and fintech solutions, plus open-source developer tools.",
		defaultLocale: "en",
	},

	modules: [
		"shadcn-nuxt",
		"@nuxt/fonts",
		"@nuxt/icon",
		"nuxt-aos",
		"@nuxt/image",
		"@nuxtjs/sitemap",
		"@nuxtjs/robots",
		"@nuxt/content",
		"nuxt-studio",
	],

	// Visual editor at /_studio. Builds run in Docker on our server (no CI vars), so the repo is set here.
	studio: {
		repository: { provider: "github", owner: "Aethereal-Collective", repo: "landing-page", branch: "main" },
		git: { commit: { messagePrefix: "content:" } },
		// Secrets come from STUDIO_GITHUB_* env vars at runtime (see .env.example); the Docker build has none.
		auth: { github: { clientId: "", clientSecret: "" } },
	},

	content: {
		experimental: { sqliteConnector: "native" }, // node:sqlite, no native build on Alpine
		build: { markdown: { toc: { depth: 3 } } },
	},
	aos: { once: true, duration: 700, offset: 60 },

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
