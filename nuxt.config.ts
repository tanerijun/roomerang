// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: true,
	},
	eslint: {
		lintOnStart: false,
	},
	modules: [
		"@nuxtjs/eslint-module",
		"@nuxtjs/tailwindcss",
		"nuxt-icon",
		"@vueuse/nuxt",
		"nuxt-headlessui",
	],
})
