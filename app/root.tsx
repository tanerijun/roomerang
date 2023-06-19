import type { LinksFunction } from "@remix-run/node"
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react"
import styles from "./globals.css"

import AppHeader from "~/components/AppHeader"
import AppFooter from "~/components/AppFooter"

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
			<body>
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
