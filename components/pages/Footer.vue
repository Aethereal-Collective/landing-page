<template>
	<footer class="bg-background text-foreground px-6 py-10 mt-20 border-t border-border">
		<div class="container py-10 mx-auto grid grid-cols-1 md:grid-cols-[2fr_.5fr_.5fr_.5fr_.5fr] gap-10">
			<!-- Column 1: Logo & Description -->
			<div>
				<div class="flex items-center space-x-2 mb-4">
					<img src="/logo.jpg" alt="Logo" class="w-6 h-6" />
					<span class="font-semibold text-lg">æthereal</span>
				</div>
				<p class="text-sm max-w-sm">an unique crypto collective since '21, based in Indonesia.</p>
			</div>

			<!-- Column 2: Socials -->
			<div>
				<h4 class="text-sm font-bold mb-3">Socials</h4>
				<ul class="space-y-2 text-sm">
					<li><a href="https://discord.gg/aethereal" class="hover:underline" target="_blank">Discord</a></li>
					<li><a href="https://twitter.com/aethereal_co" class="hover:underline" target="_blank">Twitter/X</a></li>
					<li><a href="https://github.com/Aethereal-Collective" class="hover:underline" target="_blank">GitHub</a></li>
				</ul>
			</div>

			<!-- Column 3: Products -->
			<div>
				<h4 class="text-sm font-bold mb-3">Products</h4>
				<ul class="space-y-2 text-sm">
					<li><a target="_blank" href="/faucet" class="text-muted pointer-events-none">Faucet</a></li>
					<li><a target="_blank" href="https://validator.aethereal.top/" class="hover:underline">Validator</a></li>
					<li><a target="_blank" href="/trading-calculator" class="text-muted pointer-events-none">Trading Calculator</a></li>
				</ul>
			</div>

			<!-- Column 4: Resources -->
			<div>
				<h4 class="text-sm font-bold mb-3">Resources</h4>
				<ul class="space-y-2 text-sm">
					<li><a target="_blank" href="https://www.dropbox.com/scl/fo/uvr9qn3ki94wm99zh012j/AEOCG77wwtESqiQHU5rr8LE?rlkey=itwrpsogfbvbovwci4xalvz8g&st=3hbkq67j&dl=0" class="hover:underline">Brand Assets</a></li>
				</ul>
			</div>

			<div>
				<h4 class="text-sm font-bold mb-3">Affiliate</h4>
				<ul class="space-y-2 text-sm">
					<li><a target="_blank" href="https://www.bybit.com/en/sign-up?affiliate_id=130379" class="hover:underline">Bybit</a></li>
				</ul>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="container mx-auto mt-20 border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
			<p>© 2025 æthereal · All rights reserved · Made with ❤️</p>
			<a href="https://nuxt.com" target="_blank" class="mt-4 md:mt-0 hover:underline">Built with Nuxt</a>
		</div>
	</footer>
</template>

<script setup>
// No script needed
</script>
