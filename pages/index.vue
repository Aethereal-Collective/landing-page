<template>
	<div>
		<PagesJumbotron />
		<PagesSectionIntroduction />

		<ClientOnly>
			<PagesSectionGamefi />
		</ClientOnly>

		<PagesSectionNode />

		<ClientOnly>
			<PagesSectionCollab />
		</ClientOnly>
	</div>
</template>

<script setup lang="ts"></script>
