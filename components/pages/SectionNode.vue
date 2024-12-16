<template>
	<section id="node" class="w-full flex flex-col items-center justify-center py-40 gap-20">
		<h2 class="text-center text-xl xl:text-3xl opacity-80 capitalize font-medium">Strengthening the Network with Reliable Node Operations</h2>

		<div class="w-[90%] sm:w-[50%] relative px-5 sm:px-0">
			<div class="grid grid-cols-4 gap-x-10 gap-y-20 justify-items-center">
				<!-- Looping through each image to display it in a grid -->
				<div v-for="(image, index) in nodeImage" :key="index" class="flex items-center justify-center">
					<img :src="image" alt="" class="w-20 sm:w-32 rounded-full object-cover" />
				</div>
			</div>

			<!-- Overlay text with gradient background -->
			<div class="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-background to-transparent pt-20 pb-10">
				<Button variant="default" size="lg" @click="onClickExplore">Explore More</Button>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const nodeImage = ["/image/node/chasm.png", "/image/node/dusk.png", "/image/node/elixir.png", "/image/node/gaga.png", "/image/node/icn.png", "/image/node/nillion.png", "/image/node/rainbow.png", "/image/node/rivalz.png", "/image/node/spheron.png", "/image/node/dill.png", "/image/node/ritual.png", "/image/node/kopi.png"];

const onClickExplore = () => {
	navigateTo("https://validator.aethereal.my.id/", {
		open: {
			target: "_blank",
		},
	});
};
</script>
