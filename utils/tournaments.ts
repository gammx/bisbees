export type Tournament = typeof tournaments[0];

const tournaments = [
	{
		id: 'bb',
		name: 'Black & Blue',
		quote: {
			text: "It's the wildest tournament I've ever seen!",
			by: "El Xocas"
		},
		startDate: '2023-10-24',
		endDate: '2023-10-28',
		baseEntry: 5000,
		acrossTheBoard: 71500,
		birdDeadline: '2023-08-31',
		shadowColors: ['#0047FF', '#00B6F0'],
		href: '#',
		thumbnail: '/tournaments/bb/details_thumbnail.png',
	},
];

export default tournaments;