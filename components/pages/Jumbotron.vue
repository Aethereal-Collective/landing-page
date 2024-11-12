<template>
	<section id="jumbotron" class="w-full h-screen relative flex justify-center items-center">
		<NuxtParticles id="tsparticles" :options="(particleOptions as any)"></NuxtParticles>

		<div class="jumbotron__text flex flex-col gap-5">
			<h2 class="text-2xl sm:text-3xl md:text-5xl text-center opacity-50">Join the Movement</h2>

			<h1 class="jumbotron__heading text-5xl sm:text-6xl md:text-7xl font-black inline-flex flex-col sm:flex-row items-center">
				<span>We </span>
				<span class="animated-word inline-block w-[180px] md:w-[220px] text-center overflow-hidden">{{ currentWord }}</span>
				<span> Together</span>
			</h1>

			<h2 class="text-2xl sm:text-3xl md:text-5xl text-center opacity-50">Shape the Future</h2>
		</div>

		<div class="absolute bottom-0 left-0 right-0 mb-10 flex justify-center items-center">
			<NuxtLink to="#intro" class="italic opacity-45 flex flex-col justify-center items-center gap-y-5 text-xs sm:text-sm">
				<span class="scroll"> See more our movement </span>
				<Icon name="ph:mouse-scroll-thin" class="animate-bounce text-xl" />
			</NuxtLink>
		</div>
	</section>
</template>

<script setup lang="ts">
import { particleOptions } from "~/lib/particle";
import { PowerGlitch } from "powerglitch";

const { $anime } = useNuxtApp();

// Define words for animation
const words = ["Learn", "Build", "Grow"];
const currentIndex = ref(0);
const currentWord = ref(words[currentIndex.value]);

// Function to handle the text animation
const animateWord = () => {
	const wordElement = document.querySelector(".animated-word");

	// Slide-out animation
	$anime({
		targets: wordElement,
		translateY: [0, 50],
		opacity: [1, 0],
		duration: 500,
		easing: "easeInOutQuad",
		complete: () => {
			// Update word index
			currentIndex.value = (currentIndex.value + 1) % words.length;
			currentWord.value = words[currentIndex.value];

			// Slide-in animation
			$anime({
				targets: wordElement,
				translateY: [-50, 0],
				opacity: [0, 1],
				duration: 500,
				easing: "easeInOutQuad",
			});
		},
	});
};

// Run animation on mounted and repeat every 2 seconds
onMounted(() => {
	animateWord();
	setInterval(animateWord, 5000);

	// Initialize PowerGlitch
	PowerGlitch.glitch(".scroll", {
		timing: {
			duration: 5000,
		},
	});
});
</script>

<style scoped>
#tsparticles {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	padding: 0;
	margin: 0;
	z-index: 0; /* if you use -1 you have to set to `"window"` the interactivity.detectsOn property */
}
</style>
