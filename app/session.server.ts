import { createCookieSessionStorage } from "@remix-run/cloudflare"

const sessionStorage = createCookieSessionStorage({
	cookie: {
		name: "__session",
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
	},
})
