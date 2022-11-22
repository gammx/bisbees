export interface Video {
	_id: number;
	hash: string;
	title: string;
	thumbnail: string;
	thumbnailWebp?: string;
}

export default [
	{
		_id: 3,
		hash: 'koM3aJvu3vU',
		title: "2022 Bisbee's Black & Blue Tournament",
		thumbnail: 'https://i.ytimg.com/vi/koM3aJvu3vU/maxresdefault.jpg',
		thumbnailWebp: 'https://i.ytimg.com/vi_webp/koM3aJvu3vU/maxresdefault.webp',
	},
	{
		_id: 2,
		hash: 'DraWeGmDeFo',
		title: "2021 Bisbee's Black & Blue - Official",
		thumbnail: 'https://i.ytimg.com/vi/DraWeGmDeFo/maxresdefault.jpg',
		thumbnailWebp: 'https://i.ytimg.com/vi_webp/DraWeGmDeFo/maxresdefault.webp',
	},
	{
		_id: 1,
		hash: 'AFuqEvJyuIc',
		title: "2019 Bisbee's Black & Blue",
		thumbnail: 'https://i.ytimg.com/vi/AFuqEvJyuIc/maxresdefault.jpg',
		thumbnailWebp: 'https://i.ytimg.com/vi_webp/AFuqEvJyuIc/maxresdefault.webp',
	},
	{
		_id: 4,
		hash: 'AsTcPmecu7Q',
		title: "2018 Bisbee's Black & Blue Marlin Tournament",
		thumbnail: 'https://i.ytimg.com/vi/AsTcPmecu7Q/maxresdefault.jpg',
		thumbnailWebp: 'https://i.ytimg.com/vi_webp/AsTcPmecu7Q/maxresdefault.webp',
	},
	{
		_id: 5,
		hash: 'WuHKEpdA154',
		title: "2017 Bisbee's Black & Blue Marlin Tournament",
		thumbnail: 'https://i.ytimg.com/vi/WuHKEpdA154/maxresdefault.jpg',
		thumbnailWebp: 'https://i.ytimg.com/vi_webp/WuHKEpdA154/maxresdefault.webp',
	}
] as Video[];