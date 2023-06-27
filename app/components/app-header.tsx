import { Globe } from "lucide-react"
import { Button } from "~/components/ui/button"

function Logo() {
	return (
		<div>
			<span>Roomerang</span>
		</div>
	)
}

function Actions() {
	return (
		<div className="flex items-center">
			<Button variant="ghost">Rent your house</Button>
			<Button variant="ghost">
				<Globe size="20" />
			</Button>
			<button>User</button>
		</div>
	)
}

export default function AppHeader() {
	return (
		<header className="flex h-20 items-center justify-between">
			<Logo />
			<Actions />
		</header>
	)
}
