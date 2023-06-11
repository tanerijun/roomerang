import { MingcuteEarthLine, MingcuteMenuLine, MingcuteUser4Fill } from "~/components/icons"

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
			<button className="rounded-full px-4 py-3 hover:bg-gray-100">Rent your house</button>
			<button className="rounded-full p-3 hover:bg-gray-100">
				<MingcuteEarthLine className="text-xl" />
			</button>
			<button className="ml-3 flex items-center gap-1.5 rounded-full border border-gray-200 px-2 py-0.5 hover:shadow-md">
				<MingcuteMenuLine className="text-xl" />
				<MingcuteUser4Fill className="text-4xl" />
			</button>
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
