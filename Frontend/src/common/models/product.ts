export class Product {
	id?: number;
	name?: string;
	description?: string;
	price?: number;
	imageUrl?: string;
	stock?: number;
	auther?: string;
	rating?: number;
	publisher?: string;
	category?: string;
}

export class ProductQueryRequest {
	name?: string;
	category?: string;
	rating?: number;
}