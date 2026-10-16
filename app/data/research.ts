// Report categories. Rename labels here; the ids are what report frontmatter uses.
export const CATEGORIES = [
	{ id: "the-week", label: "The Week", description: "What moved across crypto and markets this week." },
	{ id: "breakdown", label: "Breakdown", description: "One topic, taken apart with data." },
	{ id: "view", label: "View", description: "Our take on a trend or theme." },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export const categoryLabel = (id: string) => CATEGORIES.find((c) => c.id === id)?.label ?? id;

export const DEFAULT_DISCLOSURE =
	"This report is for educational purposes only and is not financial advice. Do your own research before making any financial decision.";

// ~200 words per minute, counted from the parsed Markdown tree (minimark: [tag, props, ...children]).
export function readMinutes(body: unknown): number {
	let words = 0;
	const walk = (node: unknown) => {
		if (typeof node === "string") words += node.split(/\s+/).filter(Boolean).length;
		else if (Array.isArray(node)) {
			const isElement = typeof node[0] === "string" && node[1] !== null && typeof node[1] === "object" && !Array.isArray(node[1]);
			(isElement ? node.slice(2) : node).forEach(walk);
		}
	};
	walk((body as { value?: unknown })?.value ?? []);
	return Math.max(1, Math.round(words / 200));
}

export const formatDate = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
