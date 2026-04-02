import { defineConfig, fontProviders } from "astro/config";
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

	redirects: {
		"/docs/": "/about/#governance"
	},

	integrations: [sitemap(), tunnel()],

	fonts: [{
		provider: fontProviders.fontsource(),
		name: "Open Sans",
		cssVariable: "--font-opensans",
		weights: ["400 900"]
	},
	{
		provider: fontProviders.fontsource(),
		name: "Geist Mono",
		cssVariable: "--font-geistmono",
		weights: ["400 900"]
	}],

	markdown: {
		remarkPlugins: [a11yEmoji]
	},

	vite: {
		plugins: [tailwindcss()]
	}
});
