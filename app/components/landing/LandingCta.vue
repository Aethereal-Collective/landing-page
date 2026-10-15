<template>
	<section class="relative w-full overflow-hidden bg-white px-4 py-32 md:py-44">
		<ChromeBlobs :spread="1.1" class="opacity-50 md:opacity-90" />

		<div class="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center" data-aos="fade-up">
			<h2 class="text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] text-neutral-950 md:text-7xl">
				Build the future
				<span class="chrome-text block pb-2">with us.</span>
			</h2>
			<p class="mt-6 max-w-xl text-lg text-neutral-500">Join the community, follow our research, or reach out to build something together.</p>

			<div class="mt-10 flex flex-wrap justify-center gap-3">
				<a v-for="s in socials" :key="s.label" :href="s.href" target="_blank" rel="noopener noreferrer" :class="s.primary ? 'bg-neutral-950 text-white' : 'border border-neutral-200 bg-white/80 text-neutral-950 backdrop-blur hover:bg-neutral-50'" class="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03]">
					<Icon :name="s.icon" class="text-lg" aria-hidden="true" /> {{ s.label }}
				</a>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { LINKS } from "~/data/site";

const socials = [
	{ label: "Join Discord", href: LINKS.discord, icon: "ph:discord-logo", primary: true },
	{ label: "X", href: LINKS.x, icon: "ph:x-logo" },
	{ label: "LinkedIn", href: LINKS.linkedin, icon: "ph:linkedin-logo" },
	{ label: "Medium", href: LINKS.medium, icon: "ph:medium-logo" },
	{ label: "Email us", href: LINKS.email, icon: "ph:envelope-simple" },
];
</script>
