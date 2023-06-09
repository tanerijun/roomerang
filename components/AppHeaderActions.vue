<template>
	<div class="flex">
		<button class="btn-ghost btn-sm btn rounded-full">Rent your house</button>
		<button class="btn-ghost btn-sm btn-circle btn mr-3">
			<Icon name="mingcute:earth-line" />
		</button>
		<!-- User Action -->
		<HeadlessMenu as="div" class="relative">
			<HeadlessMenuButton class="btn-outline btn-sm btn h-10 rounded-full">
				<Icon name="mingcute:menu-line" />
				<Icon name="mingcute:user-4-fill" size="2em" />
			</HeadlessMenuButton>
			<HeadlessMenuItems
				class="menu rounded-box absolute right-0 mt-2 w-56 origin-top-right bg-base-200"
			>
				<HeadlessMenuItem as="li" class="w-full">
					<a href="/account-settings"> Sign up </a>
				</HeadlessMenuItem>
				<HeadlessMenuItem as="li" class="w-full">
					<a href="/account-settings"> Log in </a>
				</HeadlessMenuItem>
				<div class="my-2 h-[1px] w-full bg-base-300" />
				<HeadlessMenuItem as="li">
					<a href="#">Rent your house</a>
				</HeadlessMenuItem>
				<HeadlessMenuItem as="li">
					<a href="#">Help</a>
				</HeadlessMenuItem>
			</HeadlessMenuItems>
		</HeadlessMenu>
	</div>
</template>
