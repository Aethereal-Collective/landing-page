<template>
	<div>
		<PagesJumbotron />

		<PagesSectionIntroduction />

		<PagesSectionAi />

		<ClientOnly>
			<PagesSectionGamefi />
		</ClientOnly>

		<PagesSectionNode />

		<ClientOnly>
			<PagesSectionGithub />
		</ClientOnly>

		<PagesFooter />
	</div>
</template>

<script setup lang="ts"></script>
