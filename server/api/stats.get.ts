// Live community numbers for the stats strip. Cached for an hour; a failed lookup returns null, and the UI hides that number.
export default defineCachedEventHandler(
	async () => {
		const discord = await $fetch<{ approximate_member_count?: number }>("https://discord.com/api/v9/invites/aethereal?with_counts=true", { timeout: 8000 }).catch(() => null);
		return { discordMembers: discord?.approximate_member_count ?? null };
	},
	{ maxAge: 60 * 60, swr: true, name: "site-stats" },
);
