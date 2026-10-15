<template>
	<section id="shield" class="w-full scroll-mt-24 bg-white px-4 py-24 md:py-32">
		<LandingHeading eyebrow="Flagship product · In development" title="Aethereal Shield" accent="Cek dulu sebelum klik." subtitle="A free browser extension that protects Indonesian crypto users from phishing sites and wallet drainers, with every warning explained in plain Bahasa Indonesia." />

		<div class="relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-950 p-6 text-white md:p-12" data-aos="fade-up">
			<InspiraBorderBeam :size="320" :duration="9000" color-from="#ffffff" color-to="#737373" />

			<div class="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
				<div class="flex flex-col gap-6">
					<span class="w-fit rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">Why it matters</span>
					<p class="text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
						Indonesia has over <span class="chrome-text-dark">22 million</span> crypto accounts, and scams keep finding new ways in, from fake exchange sites to drainer signatures.
					</p>
					<p class="text-neutral-400">
						Shield checks every site you open against known and lookalike phishing domains, pauses dangerous wallet requests, and tells you whether a platform is OJK-licensed, all on your own device.
					</p>
					<div class="flex flex-wrap gap-3">
						<a :href="LINKS.discord" target="_blank" rel="noopener noreferrer" class="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition-transform hover:scale-[1.03]">Get early access</a>
						<span class="rounded-full border border-white/15 px-6 py-3 text-sm text-neutral-400">Chrome · Brave</span>
					</div>
				</div>

				<div class="grid gap-4 sm:grid-cols-2">
					<InspiraCardSpotlight v-for="f in SHIELD_FEATURES" :key="f.title" class="border-white/10 bg-white/[0.04] text-white dark:bg-white/[0.04]" slot-class="p-5" gradient-color="#404040" :gradient-opacity="0.6">
						<Icon :name="f.icon" class="text-3xl text-neutral-300" aria-hidden="true" />
						<h3 class="mt-4 font-semibold">{{ f.title }}</h3>
						<p class="mt-2 text-sm leading-relaxed text-neutral-400">{{ f.body }}</p>
					</InspiraCardSpotlight>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { LINKS, SHIELD_FEATURES } from "~/data/site";
</script>
