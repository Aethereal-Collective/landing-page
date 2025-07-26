<template>
	<section id="github" class="relative w-full flex flex-col items-center justify-center gap-10 px-10 py-20 md:py-40">
		<h2 class="text-center text-xl xl:text-3xl opacity-80 capitalize font-medium">Explore our Creation</h2>

		<div class="w-full md:w-[80%] flex flex-wrap justify-center items-stretch gap-10 overflow-hidden rounded-lg bg-background md:shadow-xl">
			<a class="block" v-for="review in reviews" :key="review.name" :href="review.url" target="_blank" rel="noopener noreferrer">
				<ReviewCard :name="review.name" :username="review.username" :body="review.body">
					<template #img>
						<Github class="w-5 h-5 text-black dark:text-white rounded-full" />
					</template>
				</ReviewCard>
			</a>
		</div>

		<!-- Left Gradient -->
		<div class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>

		<!-- Right Gradient -->
		<div class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
	</section>
</template>

<script setup lang="ts">
import { Github } from "lucide-vue-next";

// Reviews data
const reviews = [
	{
		name: "Pharos Testnet",
		username: "@lilnoxvertz",
		body: "Automation for Pharos Testnet",
		url: "https://github.com/lilnoxvertz/pharos",
	},
	{
		name: "Discord Auto Chat",
		username: "@astrofounder",
		body: "Automate your chat messages on Discord with ease.",
		url: "https://github.com/Aethereal-Collective/discord-auto-chat",
	},
	{
		name: "BNB Testnet Sender",
		username: "@astrofounder",
		body: "Bulk send BNB to multiple addresses on the testnet.",
		url: "https://github.com/Aethereal-Collective/bnb-testnet-sender",
	},
	{
		name: "Cloudflare Bypass Extension",
		username: "@astrofounder",
		body: "Bypass Cloudflare protection with this extension.",
		url: "https://github.com/Aethereal-Collective/cloudflare-bypass-extension",
	},
	{
		name: "FnG Index Discord Bot",
		username: "@Fanreza",
		body: "Track FnG Index in real-time with our Discord bot.",
		url: "https://github.com/Fanreza/discord-bot-fear-and-greed-index",
	},
	{
		name: "Sepolia Gas Tracker Discord Bot",
		username: "@Fanreza",
		body: "Track Sepolia gas prices in real-time with our Discord bot.",
		url: "https://github.com/Fanreza/sepolia-gas-tracker",
	},
	{
		name: "MegaETH Testnet",
		username: "@lilnoxvertz",
		body: "Automate your transactions on the MegaETH testnet.",
		url: "https://github.com/lilnoxvertz/megaeth",
	},
];
</script>
