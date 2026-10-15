const FEED_URL = "https://medium.com/feed/@aethereal_co";
const MAX_POSTS = 6;

export interface MediumPost {
	title: string;
	url: string;
	date: string;
	image: string | null;
	excerpt: string;
}

const cdata = (s = "") => s.replace(/^<!\[CDATA\[|\]\]>$/g, "").trim();
const tag = (xml: string, name: string) => cdata(xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`))?.[1]);

const decode = (s: string) =>
	s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");

export function parseFeed(xml: string): MediumPost[] {
	return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, MAX_POSTS).map(([, item]) => {
		const content = tag(item, "content:encoded");
		const text = decode(content.replace(/<figure[\s\S]*?<\/figure>/g, "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
		return {
			title: decode(tag(item, "title")),
			url: tag(item, "link").split("?")[0],
			date: new Date(tag(item, "pubDate")).toISOString(),
			image: content.match(/<img[^>]+src="([^"]+)"/)?.[1] ?? null,
			excerpt: text.length > 160 ? text.slice(0, 157).trimEnd() + "…" : text,
		};
	});
}

// Cached for an hour; a Medium outage serves the last good copy or an empty list, never a broken page.
export default defineCachedEventHandler(
	async () => {
		try {
			return parseFeed(await $fetch<string>(FEED_URL, { responseType: "text", timeout: 8000 }));
		} catch {
			return [];
		}
	},
	{ maxAge: 60 * 60, swr: true, name: "medium-feed" },
);
