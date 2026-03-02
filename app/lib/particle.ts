export const particleOptions = {
	autoPlay: true,
	fullScreen: {
		enable: false,
	},
	detectRetina: true,
	fpsLimit: 60,
	particles: {
		color: {
			value: "#ffffff",
		},
		move: {
			direction: "none" as const,
			enable: true,
			outModes: {
				default: "bounce" as const,
			},
			speed: 1,
		},
		number: {
			value: 50,
		},
		opacity: {
			value: {
				min: 0.05,
				max: 0.4,
			},
			animation: {
				enable: true,
				speed: 2,
				sync: false,
				startValue: "random" as const,
			},
		},
		shape: {
			type: "circle",
		},
		size: {
			value: 1,
		},
		links: {
			color: {
				value: "#ffffff",
			},
			distance: 30,
			enable: true,
			opacity: 0.4,
			width: 1,
		},
	},
	motion: {
		reduce: {
			factor: 4,
			value: true,
		},
	},
	responsive: [
		{
			maxWidth: 500,
			options: {
				particles: {
					number: {
						value: 30,
					},
				},
			},
		},
	],
};
