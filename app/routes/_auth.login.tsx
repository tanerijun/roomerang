import type { ActionArgs } from "@remix-run/cloudflare"

export async function action({ request }: ActionArgs) {
	console.log("Hit ACTION")
	const body = await request.formData()
	console.log(body)
	console.log(body.get("halo"))
	console.log(body.get("password"))

	return null
}

export default function Login() {
	return <div>Login page</div>
}
