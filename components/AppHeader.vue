<script setup lang="ts">
	// Try vue use
	// use media query
</script>

<template>
	<header>
		<div class="navbar justify-between bg-red-200">
			<!-- Logo -->
			<div class="hidden sm:block">
				<span>Roomerang</span>
			</div>
			<!-- Filter & Search -->
			<NavSearch class="hidden sm:flex" />
			<NavSearchMobile class="sm:hidden" />
			<!-- Actions -->
			<div class="hidden sm:flex">
				<button class="btn-ghost btn-sm btn rounded-full">Rent your house</button>
				<button class="btn-ghost btn-sm btn-circle btn mr-3">
					<Icon name="mingcute:earth-line" />
				</button>
				<button class="btn-outline btn-sm btn h-10 rounded-full">
					<Icon name="mingcute:menu-line" />
					<Icon name="mingcute:user-4-fill" size="2em" />
				</button>
			</div>
		</div>
	</header>
</template>
