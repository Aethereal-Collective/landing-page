<template>
	<section id="gamefi" class="w-full flex flex-col items-center justify-center gap-10 px-10 py-20 md:py-40">
		<h2 class="text-center text-xl xl:text-3xl opacity-80 capitalize font-medium">Empowering GameFi Through Community</h2>

		<div class="gamefi__slider w-[80%] xl:w-[60%] relative">
			<!-- First Carousel (Images 1-5) -->
			<Carousel
				class="relative w-full"
				:opts="{
					loop: true,
					dragFree: true,
					watchDrag: false,
				}"
				:plugins="[AutoScroll({ speed: 1 })]"
			>
				<CarouselContent>
					<CarouselItem v-for="(data, index) in firstCarouselImages" :key="index" class="basis-10/12 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6">
						<div class="p-1">
							<Card class="border-none">
								<CardContent class="flex flex-row-reverse aspect-square items-center justify-center p-6">
									<NuxtImg :src="data.src" :alt="data.alt" loading="lazy" />
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				</CarouselContent>
			</Carousel>

			<!-- Second Carousel (Images 6-11) -->
			<Carousel
				class="relative w-full"
				dir="rtl"
				:opts="{
					loop: true,
					dragFree: true,
					watchDrag: false,
					direction: 'rtl',
					startIndex: 0,
					slidesToScroll: 1,
				}"
				:plugins="[AutoScroll({ speed: 1 })]"
			>
				<CarouselContent>
					<CarouselItem v-for="(data, index) in secondCarouselImages" :key="index" class="basis-10/12 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6">
						<div class="p-1">
							<Card class="border-none">
								<CardContent class="flex flex-row-reverse aspect-square items-center justify-center p-6">
									<NuxtImg :src="data.src" :alt="data.alt" loading="lazy" />
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				</CarouselContent>
			</Carousel>

			<!-- CTA -->
			<div class="cta flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
				<Button variant="default" size="lg" @click="onClickExplore">Explore More</Button>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import AutoScroll from "embla-carousel-auto-scroll";

const gameImage = [
	{ src: "/image/gamefi/pirate.png", alt: "Pirate Nation" },
	{ src: "/image/gamefi/lumi.png", alt: "Lumi" },
	{ src: "/image/gamefi/blast.png", alt: "Blast" },
	{ src: "/image/gamefi/nyan.png", alt: "Nyan Heroes" },
	{ src: "/image/gamefi/pixel.png", alt: "Pixels" },
	{ src: "/image/gamefi/super.png", alt: "Superverse" },
	{ src: "/image/gamefi/spellborne.png", alt: "Spellborne" },
	{ src: "/image/gamefi/takedown.png", alt: "Takedown" },
	{ src: "/image/gamefi/sand.png", alt: "The Sandbox" },
	{ src: "/image/gamefi/zero.png", alt: "Zero" },
	{ src: "/image/gamefi/imo.png", alt: "IMO" },
	{ src: "/image/gamefi/ymir.png", alt: "Ymir" },
	{ src: "/image/gamefi/cambria.png", alt: "Cambria" },
	{ src: "/image/gamefi/frenzy.png", alt: "Frenzy" },
	{ src: "/image/gamefi/sprite.png", alt: "Sprite" },
];

const midpoint = Math.ceil(gameImage.length / 2);

// First carousel images (first half), duplicated if fewer items are needed for smooth scrolling.
const firstCarouselImages = computed(() => {
	const subset = gameImage.slice(0, midpoint);

	return subset.length < 10 ? [...subset, ...subset] : subset;
});

// Second carousel images (second half), duplicated if fewer items are needed for smooth scrolling.
const secondCarouselImages = computed(() => {
	const subset = gameImage.slice(midpoint);

	return subset.length < 10 ? [...subset, ...subset] : subset;
});

const onClickExplore = () => {
	navigateTo("https://discord.gg/aethereal", {
		open: {
			target: "_blank",
		},
	});
};
</script>

<style scoped>
.cta {
	mask-image: radial-gradient(circle, black 30%, rgba(0, 0, 0, 0.5) 50%);
	backdrop-filter: blur(10px);
}
</style>
