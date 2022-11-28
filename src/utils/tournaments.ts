export type Tournament = typeof tournaments[0];

const tournaments = [
	{
		id: 'bb',
		name: 'Black & Blue',
		quote: {
			text: "Bring me a damn fish!",
			by: "Wayne Bisbee"
		},
		startDate: '2023-10-24',
		endDate: '2023-10-28',
		baseEntry: 5000,
		acrossTheBoard: 71500,
		birdDeadline: '2023-08-31',
		shadowColors: ['#0047FF', '#00B6F0'],
		href: 'https://www.bisbees.com/Tournament/BisbeesBlackAndBlue',
		thumbnail: '/tournaments/bb/details_thumbnail',
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
		thumbnail: '/tournaments/lc/details_thumbnail',
		href: 'https://www.bisbees.com/Tournament/BisbeesLosCabosOffshore',
	},
	{
		id: 'ec',
		name: 'East Cape',
		quote: {
			text: "The kick-off to the next-gen tournaments.",
			by: 'Tricia Bisbee'
		},
		birdDeadline: '2023-06-30',
		startDate: '2023-08-01',
		endDate: '2023-08-05',
		baseEntry: 1500,
		acrossTheBoard: 32000,
		shadowColors: ['#FF2E00', '#F09000'],
		thumbnail: '/tournaments/ec/details_thumbnail',
		href: 'https://www.bisbees.com/Tournament/BisbeesEastCape',
	}
];

export default tournaments;