import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";

export default defineContentConfig({
	collections: {
		research: defineCollection(
			asSitemapCollection({
				type: "page",
				source: "research/*.md",
				schema: z.object({
					date: z.string(),
					category: z.enum(["the-week", "breakdown", "view"]),
					topic: z.string(),
					summary: z.string(),
					cover: z.string().optional(),
					featured: z.boolean().optional(),
					disclosure: z.string().optional(),
					source: z.string().optional(),
				}),
			},
			// Posts canonical to Medium stay out of our sitemap.
			{ name: "research", filter: (entry: { source?: string }) => !entry.source },
			),
		),
	},
});
