import type { LinksFunction } from "@remix-run/cloudflare"
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react"
import styles from "~/styles/global.css"

import AppHeader from "~/components/app-header"
import AppFooter from "~/components/app-footer"

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<AppHeader />
			{children}
			<AppFooter />
		</>
	)
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="mx-auto max-w-7xl">
				<RootLayout>
					<Outlet />
				</RootLayout>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
