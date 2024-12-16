<template>
	<section id="collabs" class="w-full flex flex-col items-center justify-center gap-10 px-10 py-40">
		<h2 class="text-center text-xl xl:text-3xl opacity-80 capitalize font-medium">Unlocking Opportunities With Collaboration</h2>

		<div class="collabs__li flex flex-wrap gap-10 justify-center">
			<Card class="max-w-[400px]">
				<CardContent>
					<blockquote class="twitter-tweet">
						<p lang="en" dir="ltr">
							We&#39;re super stoked in collaboration with <a href="https://twitter.com/LumiterraGame?ref_src=twsrc%5Etfw">@LumiterraGame</a> !<br /><br />We&#39;re giving away 5 CBT Slots for 24hours!<br /><br />The rules are simple!<br />✦ Follow <a href="https://twitter.com/aethereal_co?ref_src=twsrc%5Etfw">@aethereal_co</a> &amp; <a href="https://twitter.com/LumiterraGame?ref_src=twsrc%5Etfw">@LumiterraGame</a> <br />✦ ❤️+🔁+ Tag 3 frens<br />✦ Join Lumiterra Discord
							<a href="https://t.co/jWtLdIdb9J">https://t.co/jWtLdIdb9J</a><br />✦ Hold 1 Lumi Fragment<br /><br />-and.. Goodluck! <a href="https://t.co/S6UH3JKk3d">pic.twitter.com/S6UH3JKk3d</a>
						</p>
						&mdash; æthereal (@aethereal_co) <a href="https://twitter.com/aethereal_co/status/1817892839985983748?ref_src=twsrc%5Etfw">July 29, 2024</a>
					</blockquote>
				</CardContent>
			</Card>

			<Card class="max-w-[400px]">
				<CardContent>
					<blockquote class="twitter-tweet">
						<p lang="en" dir="ltr">
							🙌 Huge thanks to <a href="https://twitter.com/rpcdot?ref_src=twsrc%5Etfw">@rpcdot</a> and the <a href="https://twitter.com/aethereal_co?ref_src=twsrc%5Etfw">@aethereal_co</a> community for putting together an excellent <a href="https://twitter.com/hashtag/RainbowProtocol?src=hash&amp;ref_src=twsrc%5Etfw">#RainbowProtocol</a> Indexer deployment guide! <br /><br />🔥 Ready to dive in? Check out the tutorial here:
							<a href="https://t.co/5t1lHRl5ug">https://t.co/5t1lHRl5ug</a> 📖<br />Prefer video tutorials? Watch it here: <a href="https://t.co/WPbLJ96HtP">https://t.co/WPbLJ96HtP</a> 🎥 <a href="https://t.co/KW87tXmCnb">https://t.co/KW87tXmCnb</a> <a href="https://t.co/WSyT79ItbZ">pic.twitter.com/WSyT79ItbZ</a>
						</p>
						&mdash; Rainbow Protocol (@rbo_protocol) <a href="https://twitter.com/rbo_protocol/status/1833187337976844455?ref_src=twsrc%5Etfw">September 9, 2024</a>
					</blockquote>
				</CardContent>
			</Card>
		</div>
	</section>
</template>

<script setup lang="ts">
onMounted(() => {
	const script = document.createElement("script");
	script.src = "https://platform.twitter.com/widgets.js";
	script.charset = "utf-8";
	script.async = true;
	document.head.appendChild(script);
});
</script>
