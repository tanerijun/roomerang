<template>
	<header class="h-20 flex items-center">
		<!-- Large screen -->
		<div class="hidden flex-1 items-center justify-between sm:flex">
			<NavLogo />
			<NavActionsToggle />
			<NavUserActions />
		</div>

		<!-- Mobile -->
		<div class="block flex-1 sm:hidden">
			<NavActionsToggleMobile />
		</div>
	</header>
</template>
