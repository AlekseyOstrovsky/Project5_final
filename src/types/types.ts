export interface ISize {
	length: number;
	width: number;
	height: number;	
}

export interface IUsage {
	body: boolean;
	hands: boolean;
	legs: boolean;
	face: boolean;
	hair: boolean;
	tanning: boolean;
	shaving: boolean;
	gifts: boolean;
	hygienic: boolean;
	oral: boolean;
	paper: boolean;	
}

export interface IProduct {
	zipcode: string;
	name: string;
	img: string;
	size: ISize;
	description: string;
	weight: number;
	volume: number;
	showVolume: boolean;
	usage: IUsage;
	producer: string;
	brand: string;
	price: number;
}

export interface ICart {
	zipcode: string;
	name: string;
	img: string;
	description: string;
	weight: number;
	volume: number;
	showVolume: boolean;
	price: number;
	quantity: number;
}

export interface IRoute {
	href: string;
	name: string;
}