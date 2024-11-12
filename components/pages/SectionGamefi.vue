<template>
	<section id="gamefi" class="w-full flex flex-col items-center justify-center gap-10 px-10 py-40">
		<h2 class="text-center text-xl xl:text-3xl opacity-80 capitalize font-medium">Empowering GameFi Through Community</h2>

		<div class="gamefi__slider w-[70%] xl:w-[60%] relative">
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
					<CarouselItem v-for="(data, index) in firstCarouselImages" :key="index" class="md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6">
						<div class="p-1">
							<Card>
								<CardContent class="flex flex-row-reverse aspect-square items-center justify-center p-6">
									<img :src="data" alt="" />
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
					<CarouselItem v-for="(data, index) in secondCarouselImages" :key="index" class="md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6">
						<div class="p-1">
							<Card>
								<CardContent class="flex flex-row-reverse aspect-square items-center justify-center p-6">
									<img :src="data" alt="" />
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

const gameImage = ["/image/gamefi/pirate.png", "/image/gamefi/lumi.png", "/image/gamefi/blast.png", "/image/gamefi/nyan.png", "/image/gamefi/pixel.png", "/image/gamefi/super.png", "/image/gamefi/spellborne.png", "/image/gamefi/takedown.png", "/image/gamefi/sand.png", "/image/gamefi/zero.png", "/image/gamefi/imo.png"];

// First carousel images (1-5), duplicated if fewer items are needed for smooth scrolling.
const firstCarouselImages = computed(() => {
	const subset = gameImage.slice(0, 5);
	return subset.length < 7 ? [...subset, ...subset] : subset;
});

// Second carousel images (6-11), duplicated if fewer items are needed for smooth scrolling.
const secondCarouselImages = computed(() => {
	const subset = gameImage.slice(5, 11);

	console.log(subset);
	return subset.length < 7 ? [...subset, ...subset] : subset;
});

const onClickExplore = () => {
	navigateTo("https://discord.gg/aetherealco", {
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
