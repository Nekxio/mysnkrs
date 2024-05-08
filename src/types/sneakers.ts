export interface Sneakers extends SneakersItem {
	color: string;
	brand: string;
}

export type SneakersItem = {
	id: number;
	name: string;
	price: number;
	size: number;
	artist: SneakersArtist;
	image: string;
	category: SneakersCategory;
	comments?: SneakersComment | SneakersComment[];
};

export type SneakersArtist = {
	id: number;
	name: string;
	picture: string;
	nbSneakers: number;
	nbFollowers: number;
	averageReviews: number;
	tags: string[];
};

export type SneakersComment = {
	userName: string;
	date: Date;
	picture: string;
	comment: string;
	stars: number;
};

export type SneakersCategory = {
	id: number;
	name: string;
	picture: string;
};

export type SneakersBrand = {
	id: number;
	name: string;
};
