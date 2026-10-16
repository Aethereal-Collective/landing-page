// Real links and project data shown on the landing page. Keep every entry verifiable.

export const LINKS = {
	discord: "https://discord.gg/aethereal",
	x: "https://x.com/aethereal_co",
	linkedin: "https://www.linkedin.com/company/aethereal-collective",
	github: "https://github.com/Aethereal-Collective",
	medium: "https://medium.com/@aethereal_co",
	email: "mailto:team@aethereal.top",
	halt: "https://halt.aethereal.top/en",
	brandAssets: "https://www.dropbox.com/scl/fo/uvr9qn3ki94wm99zh012j/AEOCG77wwtESqiQHU5rr8LE?rlkey=itwrpsogfbvbovwci4xalvz8g&st=3hbkq67j&dl=0",
};

export const FOCUS_AREAS = [
	{
		icon: "ph:brain-light",
		name: "Artificial Intelligence",
		description: "Practical AI products and learning paths, from prompting and tool use to agentic workflows built on modern models like Claude.",
		class: "md:col-span-2",
	},
	{
		icon: "ph:chart-line-up-light",
		name: "Data Science",
		description: "End-to-end data work: collection, cleaning, analysis, and clear visualization of onchain and market data.",
		class: "md:col-span-1",
	},
	{
		icon: "ph:cube-light",
		name: "Blockchain",
		description: "Smart contracts, onchain apps, and infrastructure across Ethereum, Solana, Base, Aptos, and more.",
		class: "md:col-span-1",
	},
	{
		icon: "ph:wallet-light",
		name: "Fintech",
		description: "Money apps that feel simple: payments, savings, and yield, designed for people who never want to think about gas or chains.",
		class: "md:col-span-2",
	},
];

export const HALT_FEATURES = [
	{
		icon: "ph:globe-x-light",
		title: "Domain Shield",
		body: "Fake exchange and dApp sites are blocked with a full-page warning.",
		points: ["160K+ known phishing sites", "Lookalike name detection", "Homoglyphs & punycode", "On-device detection model"],
	},
	{
		icon: "ph:hand-palm-light",
		title: "Transaction Guard",
		body: "Requests drainers rely on are held until you decide.",
		points: ["Unlimited token approvals", "Approval for all NFTs", "Permit & Permit2", "eth_sign"],
	},
	{
		icon: "ph:lock-key-light",
		title: "Fully Private",
		body: "Every check runs on your device. Nothing is sent anywhere.",
		points: ["No server", "No account", "No tracking", "Works offline"],
	},
];

export const PROJECTS = [
	{
		name: "Syno",
		tag: "Payments",
		description: "Sending money as easy as texting: pay @usernames, split bills, gift envelopes, QR payment requests, payroll, swaps, and yield.",
		url: "https://github.com/Fanreza/Syno",
	},
	{
		name: "Auren",
		tag: "DeFi",
		description: "DeFi yield in familiar shapes: goal-based pockets, an earn catalog, and a multi-vault strategy marketplace on one smart account that pays gas in USDC.",
		url: "https://github.com/Fanreza/Auren",
	},
	{
		name: "Nestora",
		tag: "Savings",
		description: "A DeFi savings app on Base. Create pockets, set goals, and earn yield with no DeFi knowledge needed.",
		url: "https://github.com/Fanreza/Nestora",
	},
	{
		name: "HashBase",
		tag: "AI × Data",
		description: "A verifiable AI dataset hub. Datasets live on Shelby decentralized storage with integrity proofs anchored on Aptos.",
		url: "https://github.com/Fanreza/HashBase",
	},
	{
		name: "Meteora Toolkit",
		tag: "Solana",
		description: "Discover and track Meteora DLMM and DAMM liquidity pools on Solana, right from a Towns bot.",
		url: "https://github.com/Fanreza/towns-bot-meteora-toolkit",
	},
	{
		name: "BlockScissor",
		tag: "Onchain Game",
		description: "Onchain rock-paper-scissors on Somnia with realtime updates powered by the Somnia Reactivity SDK.",
		url: "https://github.com/Fanreza/BlockScissor",
	},
	{
		name: "Fear & Greed Bot",
		tag: "Market Data",
		description: "A Discord bot that tracks the crypto Fear & Greed Index in real time for the community.",
		url: "https://github.com/Fanreza/discord-bot-fear-and-greed-index",
	},
	{
		name: "DAO Funding Tracker",
		tag: "Tooling",
		description: "A Discord bot that tracks wallet funding for DAOs so treasuries stay transparent.",
		url: "https://github.com/Fanreza/discord-bot-wallet-funding",
	},
];

export const ECOSYSTEM = [
	{ icon: "simple-icons:ethereum", name: "Ethereum" },
	{ icon: "simple-icons:solana", name: "Solana" },
	{ icon: "simple-icons:binance", name: "BNB Chain" },
	{ icon: "simple-icons:polygon", name: "Polygon" },
	{ icon: "simple-icons:chainlink", name: "Chainlink" },
	{ icon: "simple-icons:claude", name: "Claude" },
	{ icon: "simple-icons:python", name: "Python" },
	{ icon: "simple-icons:jupyter", name: "Jupyter" },
	{ icon: "simple-icons:typescript", name: "TypeScript" },
	{ icon: "simple-icons:vuedotjs", name: "Vue" },
	{ icon: "simple-icons:nuxt", name: "Nuxt" },
	{ icon: "simple-icons:cloudflare", name: "Cloudflare" },
];

export const PROCESS = [
	{ step: "01", title: "Research", body: "We start from data: onchain activity, market structure, regulation, and what people actually struggle with." },
	{ step: "02", title: "Build", body: "We ship small, useful products fast, then harden the ones people use. AI is a tool, not a buzzword." },
	{ step: "03", title: "Share", body: "We publish what we learn, in Bahasa Indonesia and English, so the next builder starts further ahead." },
];

export const FAQ = [
	{
		q: "What is Aethereal?",
		a: "Aethereal (æthereal) is a technology organization based in Indonesia, founded in 2023. We build products and publish research across AI, data science, blockchain, and fintech.",
	},
	{
		q: "What is Halt?",
		a: "Halt is our free browser extension for Chrome and Brave, coming soon to the Chrome Web Store. It blocks crypto phishing sites and holds back dangerous wallet requests, with clear warnings in Bahasa Indonesia and English. Every check runs on your device.",
	},
	{
		q: "Do you give investment advice?",
		a: "No. Our articles and tools are for education and research only. Always do your own research before making any financial decision.",
	},
	{
		q: "How can I join the community?",
		a: "Join our Discord to meet the community, and follow us on X, LinkedIn, and Medium for new projects and insights.",
	},
	{
		q: "How do I work with Aethereal?",
		a: "Email team@aethereal.top with what you have in mind: partnerships, research, or building something together.",
	},
];

// Partner projects. Screenshots live in public/image/partners/ (1440×900 webp).
export const PARTNERS = [
	{
		name: "EVM Shaker",
		tagline: "Liquidity. In your hands.",
		description: "A multichain liquidity workspace: a clearer view of your positions, value over time, and unclaimed fees, with more control over your next move.",
		chains: ["Ethereum", "Base", "BNB Chain", "Robinhood", "Arc"],
		image: "/image/partners/evmshaker.webp",
		url: "https://app.evmshaker.io/app",
	},
];
