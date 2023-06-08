<script setup lang="ts">
	// Breakpoint: sm
	const isLargeScreen = useMediaQuery("(min-width: 640px)")
</script>

<template>
	<!-- TODO: consider styling this as daisy button -->
	<div
		v-if="isLargeScreen"
		class="flex h-10 cursor-pointer flex-row items-center justify-between rounded-full border shadow-sm transition hover:shadow-md md:w-auto"
	>
		<span class="px-6">Anywhere</span>
		<span class="border-l border-r px-6">Any week</span>
		<div class="flex items-center gap-3 px-6">
			<!-- TODO: make text color gray -->
			<span>Add guests</span>
			<div class="flex h-8 w-8 items-center justify-center rounded-full border border-green-200">
				<Icon name="mingcute:search-2-line" />
			</div>
		</div>
	</div>
	<!-- Mobile version -->
	<div v-else class="btn-outline btn w-full justify-between rounded-full">
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
