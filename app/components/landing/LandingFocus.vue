<template>
	<section id="focus" class="w-full scroll-mt-24 bg-neutral-50/60 px-4 py-24 md:py-32">
		<LandingHeading eyebrow="What we do" title="Four disciplines," accent="one direction." subtitle="We combine AI, data science, blockchain, and fintech to build products that make onchain money easier to understand and safer to use." />

		<InspiraBentoGrid class="mt-16 max-w-6xl">
			<InspiraBentoGridCard v-for="area in areas" :key="area.name" v-bind="area" cta="See our projects" href="/#projects" data-aos="fade-up">
				<template #background>
					<Icon :name="area.iconName" class="absolute -right-6 -top-6 text-[11rem] text-neutral-100 transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
				</template>
			</InspiraBentoGridCard>
		</InspiraBentoGrid>
	</section>
</template>

<script setup lang="ts">
import { Icon } from "#components";
import { FOCUS_AREAS } from "~/data/site";

// BentoGridCard renders `icon` as a component, so wrap each Iconify name in one.
const areas = FOCUS_AREAS.map((a) => ({
	name: a.name,
	description: a.description,
	class: a.class,
	iconName: a.icon,
	icon: markRaw(defineComponent({ render: () => h(Icon, { name: a.icon, class: "text-5xl" }) })),
}));
</script>
