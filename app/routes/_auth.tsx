import { Outlet } from "@remix-run/react"

export default function Auth() {
	return (
		<div className="bg-red-300">
			<Outlet />
		</div>
	)
}
