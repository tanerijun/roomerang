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
import { useState } from "react"
import { LoginModal, SignupModal } from "./auth-form"

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

			<ActionDropdown />
		</div>
	)
}

function ActionDropdown() {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
	const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

	return (
		<>
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
					<DropdownMenuItem onClick={() => setIsLoginModalOpen(!isLoginModalOpen)}>
						Log in
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setIsSignupModalOpen(!isSignupModalOpen)}>
						Sign up
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Rent your house</DropdownMenuItem>
					<DropdownMenuItem>Help</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<LoginModal open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen} />
			<SignupModal open={isSignupModalOpen} onOpenChange={setIsSignupModalOpen} />
		</>
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
