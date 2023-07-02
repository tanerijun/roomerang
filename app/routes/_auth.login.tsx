import { json, type ActionArgs, type LoaderArgs } from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react"

export async function loader({ request, context }: LoaderArgs) {
	console.log(context.env.ENVIRONMENT)
	console.log(process.env.NODE_ENV)
	return json({
		cfEnv: context.env.ENVIRONMENT,
		nodeEnv: process.env.NODE_ENV,
	})
}

export async function action({ request }: ActionArgs) {
	console.log("Hit ACTION")
	const body = await request.formData()
	console.log(body)
	console.log(body.get("halo"))
	console.log(body.get("password"))

	return null
}

export default function Login() {
	const data = useLoaderData<typeof loader>()

	return (
		<div>
			<p>Login page</p>
			<p>CLoudflare env: {data.cfEnv}</p>
			<p>Node env: {data.nodeEnv}</p>
			<p>Reading process: {process.env.NODE_ENV}</p>
		</div>
	)
}
