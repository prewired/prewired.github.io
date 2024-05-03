import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";


const config: Config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.neutral,
			red: colors.red,
			yellow: colors.yellow,
			green: colors.green,

			blue: {
				50: "#EDFCFF",
				100: "#D6F6FF",
				200: "#B5F2FF",
				300: "#83ECFF",
				400: "#48DFFF",
				500: "#1EC4FF",
				600: "#06A9FF",
				700: "#0096FF", // Prewired logo hue
				800: "#0872C5",
				900: "#0D609B",
				950: "#0E3A5D",
			},
			purple: {
				50: "#FAF6FE",
				100: "#F2EAFD",
				200: "#E7D8FC",
				300: "#D4B9F9",
				400: "#BA8CF4",
				500: "#9F60EC",
				600: "#7D2DDA", // Prewired logo hue
				700: "#742EC2",
				800: "#632A9F",
				900: "#512380",
				950: "#350D5E"
			},
			pink: {
				50: "#FFF0F3",
				100: "#FFE2EA",
				200: "#FFCADA",
				300: "#FF9FBB",
				400: "#FF6998",
				500: "#FF246E", // Prewired logo hue
				600: "#ED1166",
				700: "#C80857",
				800: "#A8094F",
				900: "#8F0C4A",
				950: "#500124",
			}			
		}
	},
	plugins: [],
};

export default config;
