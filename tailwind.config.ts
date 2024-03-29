import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			backgroundColor: {
				dark: {
					primary: "#292B32",
					secondary: "#3B3E47",
					tertiary: "#292B32",
				},
			},
			rotate: {
				360: "360deg",
			},
			// fontFamily: {
			// 	poppins: ["Poppins", "sans-serif"],
			// 	inter: ["Inter", "sans-serif"],
			// },
		},
	},
	plugins: [],
};
export default config;
