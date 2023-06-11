// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/eslint-module", "@unocss/nuxt"],
	eslint: {
		lintOnStart: false,
	},
	css: ["@unocss/reset/tailwind.css"],
})
