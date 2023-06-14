<template>
	<div class="flex items-center">
		<button class="rounded-full px-4 py-3 hover:bg-gray-100">Rent your house</button>
		<button
			class="flex items-center rounded-full p-3 hover:bg-gray-100"
			aria-label="localization settings"
		>
			<i class="i-mingcute-world-line text-xl" />
		</button>
		<HeadlessMenu as="div" class="relative border border-red-300">
			<HeadlessMenuButton
				class="ml-3 flex items-center gap-1.5 border border-gray-200 rounded-full px-2 py-0.5 transition-shadow hover:shadow-md"
				aria-label="user actions"
			>
				<i class="i-mingcute-menu-line text-xl" />
				<i class="i-mingcute-user-4-fill text-4xl" />
			</HeadlessMenuButton>
			<HeadlessMenuItems class="absolute right-0 mt-2 w-max flex flex-col origin-top-right">
				<HeadlessMenuItem v-slot="{ active }">
					<a :class="{ 'bg-blue-500': active }" href="/account-settings"> Sign up </a>
				</HeadlessMenuItem>
				<HeadlessMenuItem v-slot="{ active }">
					<a :class="{ 'bg-blue-500': active }" href="/account-settings"> Log in </a>
				</HeadlessMenuItem>
				<HeadlessMenuItem v-slot="{ active }">
					<a :class="{ 'bg-blue-500': active }" href="/account-settings"> Rent your house </a>
				</HeadlessMenuItem>
				<HeadlessMenuItem v-slot="{ active }">
					<a :class="{ 'bg-blue-500': active }" href="/account-settings"> Help </a>
				</HeadlessMenuItem>
			</HeadlessMenuItems>
		</HeadlessMenu>
	</div>
</template>
