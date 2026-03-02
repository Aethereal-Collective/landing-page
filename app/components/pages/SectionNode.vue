<template>
	<section id="node" class="w-full flex flex-col items-center justify-center py-20 md:py-40 gap-20">
		<h2 class="text-center text-xl xl:text-3xl opacity-80 capitalize font-medium">Powering the Network with Trusted Node Operations</h2>

		<div class="w-full sm:w-[50%] relative px-5 sm:px-0">
			<div class="flex items-center justify-center">
				<PhotoGallery :items="nodeImage" />
			</div>

			<!-- Overlay text with gradient background -->
			<div class="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-background to-transparent pt-20 pb-10">
				<Button variant="default" size="lg" @click="onClickExplore">Explore More</Button>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const nodeImage = [
	{ src: "/image/node/chasm.png", alt: "Chasm Network" },
	{ src: "/image/node/dusk.png", alt: "Dusk Network" },
	{ src: "/image/node/icn.png", alt: "ICN Protocol" },
	{ src: "/image/node/nillion.png", alt: "Nillion" },
	{ src: "/image/node/rainbow.png", alt: "Rainbow" },
	{ src: "/image/node/spheron.png", alt: "Spheron" },
	{ src: "/image/node/dill.png", alt: "Dill" },
	{ src: "/image/node/kopi.png", alt: "Kopi" },
];

const onClickExplore = () => {
	navigateTo("https://validator.aethereal.top", {
		open: {
			target: "_blank",
		},
	});
};
</script>
