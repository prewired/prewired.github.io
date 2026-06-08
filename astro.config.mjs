import { defineConfig, fontProviders } from "astro/config";
import { unified } from '@astrojs/markdown-remark';
import sitemap from "@astrojs/sitemap";
import tunnel from "astro-tunnel";
import a11yEmoji from "@fec/remark-a11y-emoji";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
	site: "https://prewired.org",
	trailingSlash: "always",

	image: {
		layout: "constrained"
	},

	// Legacy URLs
	redirects: {
		"/attending/": "/events/",
		"/docs/": "/about/#governance"
	},

	integrations: [sitemap(), tunnel()],

	fonts: [{
		provider: fontProviders.fontsource(),
		name: "Rubik",
		cssVariable: "--font-rubik",
		weights: ["400 900"]
	}],

	markdown: {
		processor: unified({
			remarkPlugins: [a11yEmoji]
		})
	},

	vite: {
		plugins: [tailwindcss()]
	}
});
