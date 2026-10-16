<template>
	<section id="halt" class="w-full scroll-mt-24 bg-white px-4 py-24 md:py-32">
		<LandingHeading eyebrow="Our product · Coming soon to the Chrome Web Store" title="Halt." accent="Scams, stopped." subtitle="A browser extension that blocks crypto phishing sites and holds back dangerous wallet transactions, with clear warnings in Bahasa Indonesia and English. Runs on your device." />

		<a :href="LINKS.halt" target="_blank" rel="noopener noreferrer" class="group relative mx-auto mt-16 block max-w-6xl overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-950 p-4 text-white md:p-8" data-aos="fade-up">
			<InspiraBorderBeam :size="320" :duration="9000" color-from="#ffffff" color-to="#737373" />

			<div class="grid items-center gap-8 lg:grid-cols-[1fr_1.35fr]">
				<div class="flex flex-col gap-6 p-2 md:p-4">
					<p class="text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
						One extension to keep your crypto safe, <span class="chrome-text-dark">before you sign.</span>
					</p>
					<p class="text-neutral-400">
						Halt checks every site you open and every risky wallet request, then explains what is going on in plain words, before your assets change hands.
					</p>
					<dl class="grid grid-cols-2 gap-4">
						<div class="rounded-2xl border border-white/10 p-4">
							<dt class="text-xs text-neutral-400">Known phishing domains</dt>
							<dd class="mt-1 text-2xl font-extrabold">160K+</dd>
						</div>
						<div class="rounded-2xl border border-white/10 p-4">
							<dt class="text-xs text-neutral-400">Data sent off your device</dt>
							<dd class="mt-1 text-2xl font-extrabold">Zero</dd>
						</div>
					</dl>
					<div class="flex flex-wrap items-center gap-3">
						<span class="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition-transform group-hover:scale-[1.03]">
							Visit Halt <Icon name="ph:arrow-up-right" aria-hidden="true" />
						</span>
						<span class="rounded-full border border-white/15 px-5 py-3 text-sm text-neutral-400">Chrome · Brave</span>
					</div>
				</div>

				<div class="overflow-hidden rounded-2xl border border-white/10 bg-black">
					<div class="flex items-center gap-1.5 border-b border-white/10 px-4 py-3" aria-hidden="true">
						<span class="size-2.5 rounded-full bg-white/20" /><span class="size-2.5 rounded-full bg-white/20" /><span class="size-2.5 rounded-full bg-white/20" />
						<span class="ml-3 truncate rounded-full bg-white/5 px-3 py-1 text-[11px] text-neutral-500">halt.aethereal.top</span>
					</div>
					<NuxtImg src="/image/halt.webp" alt="Halt landing page showing a phishing warning for indodaz.com" width="1440" height="900" loading="lazy" class="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" />
				</div>
			</div>
		</a>

		<div class="mx-auto mt-6 grid max-w-6xl gap-5 md:grid-cols-3">
			<InspiraCardSpotlight v-for="(f, i) in HALT_FEATURES" :key="f.title" class="border-neutral-200 bg-white" slot-class="flex flex-col gap-3 p-7" gradient-color="#e5e5e5" :gradient-opacity="0.9" data-aos="fade-up" :data-aos-delay="i * 100">
				<Icon :name="f.icon" class="text-4xl text-neutral-800" aria-hidden="true" />
				<h3 class="mt-2 text-xl font-bold tracking-tight text-neutral-950">{{ f.title }}</h3>
				<p class="text-sm leading-relaxed text-neutral-500">{{ f.body }}</p>
				<ul class="mt-2 space-y-2 text-sm text-neutral-700">
					<li v-for="pt in f.points" :key="pt" class="flex items-center gap-2"><Icon name="ph:check-bold" class="text-neutral-400" aria-hidden="true" />{{ pt }}</li>
				</ul>
			</InspiraCardSpotlight>
		</div>
	</section>
</template>

<script setup lang="ts">
import { HALT_FEATURES, LINKS } from "~/data/site";
</script>
