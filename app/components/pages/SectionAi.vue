<template>
	<section id="ai" class="w-full flex flex-col items-center justify-center px-5 py-20 md:py-40 gap-14">
		<h2 class="text-center text-xl xl:text-3xl opacity-80 capitalize font-medium">Learning AI &amp; Data Science, Together</h2>

		<p class="w-[90%] md:w-[60%] text-center text-base md:text-lg opacity-60 leading-relaxed">
			We're a tech community in Indonesia focused on AI learning and data science. We learn by building: every member can join real projects, from first experiments with large language models to full data analysis pipelines. We share each project openly, with the code, the data, and what we learned along the way, so the next person can start faster than we did.
		</p>

		<div class="w-full md:w-[80%] xl:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-6">
			<Card v-for="item in focus" :key="item.title" data-aos="fade-up" data-aos-duration="800">
				<CardHeader>
					<Icon :name="item.icon" class="text-3xl mb-2" aria-hidden="true" />
					<CardTitle>{{ item.title }}</CardTitle>
					<CardDescription>{{ item.body }}</CardDescription>
				</CardHeader>
			</Card>
		</div>

		<div class="flex flex-col sm:flex-row gap-4">
			<Button variant="default" size="lg" as="a" href="https://twitter.com/aethereal_co" target="_blank" rel="noopener noreferrer">See Our Projects on X</Button>
			<Button variant="outline" size="lg" as="a" href="https://medium.com/@aethereal_co" target="_blank" rel="noopener noreferrer">Read Our Blog</Button>
		</div>
	</section>
</template>

<script setup lang="ts">
const focus = [
	{
		icon: "ph:brain-thin",
		title: "AI Learning",
		body: "Hands-on learning paths, study sessions, and walkthroughs that take members from the basics of machine learning to building real applications with modern AI models, including prompting, tool use, and agentic workflows.",
	},
	{
		icon: "ph:chart-line-up-thin",
		title: "Data Science",
		body: "Real-world data projects that cover the full workflow: collecting and cleaning data, exploring it, building models, and presenting the results with clear visualizations. We publish every project on X so anyone can follow along and learn by doing.",
	},
	{
		icon: "ph:code-thin",
		title: "Developer Tools",
		body: "Open-source tools and bots built by our members, such as real-time market sentiment and gas tracking for Discord. Everything is on GitHub, free to use, fork, and improve, and it gives members a place to practice shipping real software.",
	},
];
</script>
