import { GlobeIcon, MenuIcon, User2Icon } from "lucide-react"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu"

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

			<Button variant="ghost" className="mr-2">
				<GlobeIcon size="20" />
			</Button>

			<DropdownMenu>
				<DropdownMenuTrigger>
					<Button variant="outline" className="py-6 gap-2">
						<MenuIcon size="20" />
						<Avatar>
							{/* TODO: Change with link to avatar later */}
							<AvatarImage src={undefined} />
							<AvatarFallback>
								<User2Icon size="20" />
							</AvatarFallback>
						</Avatar>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>
						<strong>Sign up</strong>
					</DropdownMenuItem>
					<DropdownMenuItem>Log in</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Rent your house</DropdownMenuItem>
					<DropdownMenuItem>Help</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default function AppHeader() {
	return (
		<header className="flex h-20 items-center justify-between max-w-7xl mx-auto">
			<Logo />
			<Actions />
		</header>
	)
}
