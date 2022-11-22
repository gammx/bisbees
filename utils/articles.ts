export interface Article {
	_id: number;
	thumbnail: string;
	category: string;
	readTime: number;
	author: {
		name: string;
	}
	createdAt: string;
	title: string;
}

export default [
	{
		_id: 1,
		thumbnail: '/articles/article1_thumbnail.png',
		category: 'Los Cabos Offshore',
		readTime: 2,
		author: {
			name: 'Gary Graham-That Baja Guy',
		},
		createdAt: '2022-10-25',
		title: "MONEY! MONEY! MONEY!"
	},
	{
		_id: 2,
		thumbnail: '/articles/article2_thumbnail.png',
		category: 'Tournaments',
		readTime: 10,
		author: {
			name: 'Gary Graham-That Baja Guy',
		},
		createdAt: '2022-10-27',
		title: "219 Teams Competing for Historic $11,651,300"
	},
	{
		_id: 3,
		thumbnail: '/articles/article3_thumbnail.png',
		category: 'Black & Blue',
		readTime: 8,
		author: {
			name: 'Gary Graham-That Baja Guy',
		},
		createdAt: '2022-10-29',
		title: "It All Comes Down to DAY 3",
	},
	{
		_id: 4,
		thumbnail: '/articles/article4_thumbnail.png',
		category: 'Tournaments',
		readTime: 5,
		author: {
			name: 'Gary Graham-That Baja Guy',
		},
		createdAt: '2022-10-31',
		title: "Bisbee’s Black & Blue shatters INTERNATIONAL Payout-records",
	}
] as Article[];