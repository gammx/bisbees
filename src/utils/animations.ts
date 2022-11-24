export const animations = {
	slideUp: {
		from: { opacity: 0, transform: 'translateY(40px)' },
		to: { opacity: 1, transform: 'translateY(0px)' },
	},
	slideDown: {
		to: { opacity: 0, transform: 'translateY(40px)' },
	},
	scaleOut: {
		from: { opacity: 1, scale: 1 },
		to: { opacity: 0, scale: 0.9 },
	},
	scaleIn: {
		from: { opacity: 0, scale: 0.9 },
		to: { opacity: 1, scale: 1 },
	},
	fadeOut: {
		from: { opacity: 1 },
		to: { opacity: 0 },
	},
	fadeIn: {
		from: { opacity: 0 },
		to: { opacity: 1 },
	}
};