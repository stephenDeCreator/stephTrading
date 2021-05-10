import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
	{
		id: 1,
		text: 'home',
		url: '/'
	},
	{
		id: 3,
		text: 'products',
		url: '/products'
	},
	{
		id: 2,
		text: 'about',
		url: '/about'
	}
];

export const services = [
	{
		id: 1,
		icon: <GiCompass />,
		title: 'mission',
		text:
			"To be the World's most customer-focused e-commerce business, where clients or customers can find and discover anything they might want to buy online, and endeavors to offer its customers the lowest possible prices.”"
	},
	{
		id: 2,
		icon: <GiDiamondHard />,
		title: 'vision',
		text:
			"To be the World's most customer-focused company, where customers can find and discover anything furniture they might want to buy online."
	},
	{
		id: 3,
		icon: <GiStabbedNote />,
		title: 'history',
		text:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
	}
];

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
