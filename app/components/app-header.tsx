import { GlobeIcon, MenuIcon, User2Icon } from "lucide-react"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

function Logo() {
	return (
		<div>
			<span>Roomerang</span>
		</div>
	)
}

function Actions() {
	// TODO: Correct button size and style
	return (
		<div className="flex items-center">
			<Button variant="ghost">Rent your house</Button>
			<Button variant="ghost">
				<GlobeIcon size="20" />
			</Button>
			<Button variant="outline" className="ml-2 py-6 gap-2">
				<MenuIcon size="20" />
				<Avatar>
					{/* TODO: Change with link to avatar later */}
					<AvatarImage src={undefined} />
					<AvatarFallback>
						<User2Icon size="20" />
					</AvatarFallback>
				</Avatar>
			</Button>
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