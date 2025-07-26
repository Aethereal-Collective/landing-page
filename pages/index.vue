<template>
	<div>
		<ClientOnly>
			<PagesJumbotron />
		</ClientOnly>

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
