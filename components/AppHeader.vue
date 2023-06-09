<script setup lang="ts">
	// Breakpoint: sm
	const isLargeScreen = useMediaQuery("(min-width: 640px)")
</script>

<template>
	<header>
		<div class="navbar justify-between bg-red-200">
			<template v-if="isLargeScreen">
				<!-- Logo -->
				<div class="block">
					<span>Roomerang</span>
				</div>
				<!-- Filter & Search -->
				<div
					class="flex h-10 cursor-pointer flex-row items-center justify-between rounded-full border shadow-sm transition hover:shadow-md md:w-auto"
				>
					<span class="px-6">Anywhere</span>
					<span class="border-l border-r px-6">Any week</span>
					<div class="flex items-center gap-3 px-6">
						<!-- TODO: make text color gray -->
						<span>Add guests</span>
						<div
							class="flex h-8 w-8 items-center justify-center rounded-full border border-green-200"
						>
							<Icon name="mingcute:search-2-line" />
						</div>
					</div>
				</div>
				<!-- Actions -->
				<div class="flex">
					<button class="btn-ghost btn-sm btn rounded-full">Rent your house</button>
					<button class="btn-ghost btn-sm btn-circle btn mr-3">
						<Icon name="mingcute:earth-line" />
					</button>
					<button class="btn-outline btn-sm btn h-10 rounded-full">
						<Icon name="mingcute:menu-line" />
						<Icon name="mingcute:user-4-fill" size="2em" />
					</button>
				</div>
			</template>
			<template v-else>
				<!-- Mobile Search -->
				<div class="btn-outline btn w-full justify-between rounded-full">
					<Icon name="mingcute:search-2-line" />
					<div class="flex flex-col items-start">
						<span>Anywhere</span>
						<span>Any week · Add guests</span>
					</div>
					<button class="btn-outline btn-sm btn-circle btn">
						<Icon name="mingcute:settings-6-line" />
					</button>
				</div>
			</template>
		</div>
	</header>
</template>
