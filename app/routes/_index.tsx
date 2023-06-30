import type { V2_MetaFunction } from "@remix-run/cloudflare"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Roomerang" }, { name: "description", content: "An AirBNB-like app" }]
}

export default function Index() {
	return (
		<div>
			<h1 className="bg-red-300 text-xl">Hello</h1>
		</div>
	)
}
