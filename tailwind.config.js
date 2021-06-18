module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"dark-blue": "#060f2e",
				"off-white": "#f8f3e8",
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["active"],
		},
	},
	plugins: [],
}
