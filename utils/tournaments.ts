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
	{
		id: 'lc',
		name: 'Los Cabos',
		quote: {
			text: "The \"Little Bisbee's\" is little no more.",
			by: "Capt. Dave Lear"
		},
		birdDeadline: '2023-08-31',
		startDate: '2023-10-19',
		endDate: '2023-10-22',
		baseEntry: 1500,
		acrossTheBoard: 22500,
		shadowColors: ['#00FFA3', '#00F0F0'],
		thumbnail: '/tournaments/lc/details_thumbnail.png',
		href: '#',
	},
	{
		id: 'ec',
		name: 'East Cape',
		quote: {
			text: "Vintage & classy, loving the old Mexico",
			by: 'Don Cheto'
		},
		birdDeadline: '2023-06-30',
		startDate: '2023-08-01',
		endDate: '2023-08-05',
		baseEntry: 1500,
		acrossTheBoard: 32000,
		shadowColors: ['#FF2E00', '#F09000'],
		thumbnail: '/tournaments/ec/details_thumbnail.png',
		href: '#',
	}
];

export default tournaments;