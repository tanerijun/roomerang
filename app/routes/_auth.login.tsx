import { json, type ActionArgs, type LoaderArgs } from "@remix-run/cloudflare"

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
	return <div>Login page</div>
}
