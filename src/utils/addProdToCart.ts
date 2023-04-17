import { IProduct, ICart } from '../types/types';

export const addProdToCart = (product: IProduct) => {
	const storageCart = localStorage.getItem('cart');

	const newProd = {
		zipcode: product.zipcode,
		name: product.name,
		img: product.img,
		description: product.description,
		weight: product.weight,
		volume: product.volume,
		showVolume: product.showVolume,
		price: product.price,
		quantity: 1
	};

	if (typeof storageCart === 'string') {
		let cart: ICart[] = JSON.parse(storageCart);
		let cartElement = cart.find(item => item.zipcode === product.zipcode);
		if (cartElement) return
		localStorage.setItem('cart', JSON.stringify([...cart, newProd]));
	} else {
		let cart=[];
		cart.push(newProd);
		localStorage.setItem('cart', JSON.stringify(cart));
	}
			
	window.dispatchEvent(new Event("storage"));		
}