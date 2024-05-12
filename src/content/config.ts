import { z, defineCollection } from "astro:content";


const postsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.date(),
		author: z.string(),
		excerpt: z.string(),
		tags: z.array(z.string())
	})
});

export const collections = {
	posts: postsCollection
};
