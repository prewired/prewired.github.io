import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
	//site: "https://prewired.org",
	site: "https://prewired-website.vercel.app", // For beta deployment
	trailingSlash: "always",

	image: {
		layout: "constrained"
	},

	redirects: {
		"/docs/": "/about/#governance"
	},

	integrations: [mdx(), sitemap()],

	vite: {
		plugins: [tailwindcss()]
	}
});
