import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";


// Load the Markdown files in /posts, read their metadata using Zod, and export them as a collection
const posts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
	schema: z.object({
		title: z.string(),
		date: z.date(),
		author: z.string(),
		desc: z.string(),
		coverImage: z.object({
			src: z.string(),
			alt: z.string()
		}),
		tags: z.array(z.string())
	})
});

export const collections = { posts };
