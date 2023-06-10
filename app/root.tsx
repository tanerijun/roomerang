import { cssBundleHref } from "@remix-run/css-bundle"
import type { LinksFunction } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"

import AppHeader from "~/components/AppHeader"
import AppFooter from "~/components/AppFooter"

import globalStyleSheet from "~/styles/global.css"

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
	{ rel: "stylesheet", href: globalStyleSheet },
]

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
