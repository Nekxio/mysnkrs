import dayjs from 'dayjs';
import type { Sneakers, SneakersArtist, SneakersBrand, SneakersCategory, SneakersComment } from '../types/sneakers';

export const slides: { imageAlt: string; imageSrc: string }[] = [
	{
		imageAlt: 'Slide 1',
		imageSrc: 'https://picsum.photos/seed/1/800/400'
	},
	{
		imageAlt: 'Slide 2',
		imageSrc: 'https://picsum.photos/seed/2/800/400'
	},
	{
		imageAlt: 'Slide 3',
		imageSrc: 'https://picsum.photos/seed/3/800/400'
	},
	{
		imageAlt: 'Slide 4',
		imageSrc: 'https://picsum.photos/seed/4/800/400'
	},
	{
		imageAlt: 'Slide 5',
		imageSrc: 'https://picsum.photos/seed/5/800/400'
	}
];
export const artists: SneakersArtist[] = [
	{
		id: 1,
		name: 'John Doe',
		picture: 'https://picsum.photos/seed/2/400/400',
		creations: 1
	},
	{
		id: 2,
		name: 'Jane Doe',
		picture: 'https://picsum.photos/seed/2/400/400',
		creations: 10
	},
	{
		id: 3,
		name: 'John Doe',
		picture: 'https://picsum.photos/seed/3/400/400',
		creations: 10
	},
	{
		id: 4,
		name: 'Jane Doe',
		picture: 'https://picsum.photos/seed/4/400/400',
		creations: 10
	}
];
export const brands: SneakersBrand[] = [
	{
		id: 1,
		name: 'nike'
	},
	{
		id: 2,
		name: 'adidas'
	},
	{
		id: 3,
		name: 'vans'
	},
	{
		id: 4,
		name: 'converse'
	},
	{
		id: 6,
		name: 'jordan'
	}
];

export const categories: SneakersCategory[] = [
	{
		id: 1,
		name: 'street',
		picture: 'https://picsum.photos/seed/1/400/400'
	},
	{
		id: 2,
		name: 'originals',
		picture: 'https://picsum.photos/seed/1/400/400'
	},
	{
		id: 3,
		name: 'sport',
		picture: 'https://picsum.photos/seed/1/400/400'
	}
];

export const comments: SneakersComment[] = [
	{
		userName: 'John Doe',
		date: dayjs().toDate(),
		picture: 'https://picsum.photos/seed/1/400/400',
		comment:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero sed urna ultrices facilisis. Sed euismod, nisl nec tincidunt aliquam, velit velit dignissim odio, vel tincidunt nulla nisi nec nisi. Sed nec semper elit, eget aliquam nisl. Nullam et elit vitae nulla tincidunt tincidunt. Donec euismod, tellus quis aliquet aliquam, nisi nisl lacinia nunc, nec egestas velit nunc quis velit. Nulla facilisi.',
		stars: 4
	},
	{
		userName: 'Jane Doe',
		date: dayjs().toDate(),
		picture: 'https://picsum.photos/seed/2/400/400',
		comment:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero sed urna ultrices facilisis. Sed euismod, nisl nec tincidunt aliquam, velit velit dignissim odio, vel tincidunt nulla nisi nec nisi. Sed nec semper elit, eget aliquam nisl. Nullam et elit vitae nulla tincidunt tincidunt. Donec euismod, tellus quis aliquet aliquam, nisi nisl lacinia nunc, nec egestas velit nunc quis velit. Nulla facilisi.',
		stars: 5
	},
	{
		userName: 'John Doe',
		date: dayjs().toDate(),
		picture: 'https://picsum.photos/seed/3/400/400',
		comment:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero sed urna ultrices facilisis. Sed euismod, nisl nec tincidunt aliquam, velit velit dignissim odio, vel tincidunt nulla nisi nec nisi. Sed nec semper elit, eget aliquam nisl. Nullam et elit vitae nulla tincidunt tincidunt. Donec euismod, tellus quis aliquet aliquam, nisi nisl lacinia nunc, nec egestas velit nunc quis velit. Nulla facilisi.',
		stars: 3
	}
];

export const items: Sneakers[] = [
	{
		id: 1,
		name: 'Nike Air Max 90',
		price: 100,
		image: 'https://picsum.photos/seed/1/400/200',
		size: 42,
		artist: artists[0],
		brand: 'Nike',
		color: 'Black',
		category: categories[0],
		comments: [comments[2], comments[1]]
	},
	{
		id: 2,
		name: 'Nike Air',
		price: 90,
		image: 'https://picsum.photos/seed/2/400/200',
		size: 42,
		artist: artists[1],
		brand: 'Nike',
		color: 'Black',
		category: categories[1],
		comments: [comments[2], comments[0]]
	},
	{
		id: 3,
		name: 'Nike Air Max',
		price: 120,
		image: 'https://picsum.photos/seed/3/400/200',
		size: 42,
		artist: artists[2],
		brand: 'Nike',
		color: 'Black',
		category: categories[2],
		comments: comments[1]
	},
	{
		id: 4,
		name: 'Nike Air Max 90',
		price: 100,
		image: 'https://picsum.photos/seed/4/400/200',
		size: 42,
		artist: artists[3],
		brand: 'Nike',
		color: 'Black',
		category: categories[2],
		comments: comments[2]
	},
	{
		id: 5,
		name: 'Nike Air Max 90',
		price: 100,
		image: 'https://picsum.photos/seed/5/400/200',
		size: 42,
		artist: artists[2],
		brand: 'Nike',
		color: 'Black',
		category: categories[2],
		comments: comments[2]
	},
	{
		id: 6,
		name: 'Nike Air Max 90',
		price: 100,
		image: 'https://picsum.photos/seed/6/400/200',
		size: 42,
		artist: artists[0],
		brand: 'Nike',
		color: 'Black',
		category: categories[2],
		comments: comments[1]
	},
	{
		id: 7,
		name: 'Nike Air Max 90',
		price: 100,
		image: 'https://picsum.photos/seed/7/400/200',
		size: 42,
		artist: artists[2],
		brand: 'Nike',
		color: 'Black',
		category: categories[2],
		comments: comments[0]
	}
];
