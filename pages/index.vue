<template>
	<div>
		<PagesJumbotron />

		<PagesSectionIntroduction />

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
