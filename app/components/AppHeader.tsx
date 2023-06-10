function Logo() {
	return (
		<div>
			<span>Roomerang</span>
		</div>
	)
}

function Actions() {
	return (
		<div>
			<button>Rent your house</button>
			<button>World</button>
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
