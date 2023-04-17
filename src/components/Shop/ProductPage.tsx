import React, {FC, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { ICart, IProduct } from '../../types/types';
import Route from '../Route/Route';
import { imgErrorHandler } from '../../utils/imgErrorHandler';
import { makeUsageArr } from '../../utils/makeUsageArr';
import { addProdToCart } from '../../utils/addProdToCart';
import { makeFormattedSum } from '../../utils/makeFormattedSum';

const ProductPage: FC = () => {
	const params = useParams()
	const [product, setProduct] = useState<IProduct>();
	const [isCarted, setIsCarted] = useState<boolean>(false);
	const [quantity, setQuantity] = useState<number>(0);
	const [isDescriptionVisible, setIsDescriptionVisible] = useState<boolean>(false);
	const [isParamsVisible, setIsParamsVisible] = useState<boolean>(false);	

	useEffect( () => {		
		loadProduct();		
	}, [])

	useEffect( () => {		
		loadCart();		
	}, [product])

	function loadProduct() {
		const storageProducts =	localStorage.getItem('products');	
		if (typeof storageProducts === 'string') {
			let products: IProduct[] = JSON.parse(storageProducts)
			let prod = products.find(item => params.id === item.zipcode)
			if (prod) setProduct(prod)
		}
	}

	function loadCart() {
		const storageCart = localStorage.getItem('cart');				
		let cart: ICart[];
		if (typeof storageCart === 'string') {
			cart = JSON.parse(storageCart);									
			if (product) {				
				let cartElement = cart.find(item => item.zipcode === product.zipcode);				
				if (cartElement) {
					setIsCarted(true);
					setQuantity(cartElement.quantity)
				} 
			}				
		}
	}

	const addToCart = () => {
		if (isCarted) {
			increaseQuantity();
		} else {
			if (product) addProdToCart(product);
			setIsCarted(true);
			setQuantity(1);
		}			
	}

	const deleteFromCart = () => {	
		setIsCarted(false);
		setQuantity(0);
		const storageCart = localStorage.getItem('cart');
			if (typeof storageCart === 'string') {		
				let cart: ICart[] = JSON.parse(storageCart);
				let newCart = cart.filter(item => item.zipcode !== product?.zipcode);
				localStorage.setItem('cart', JSON.stringify(newCart));
				window.dispatchEvent(new Event("storage"));
			}
	}

	const increaseQuantity = () => {
		if (quantity === 0) {
			addToCart()
		} else {
			const storageCart = localStorage.getItem('cart');
			if (typeof storageCart === 'string') {		
				let cart: ICart[] = JSON.parse(storageCart);
				cart.forEach(element => {
					if (element.zipcode === product?.zipcode) {
						element.quantity = quantity + 1
					}
				});
				localStorage.setItem('cart', JSON.stringify(cart));
			}
			window.dispatchEvent(new Event("storage"));					
			setQuantity(quantity+1);
		}

	}

	const decreaseQuantity = () => {
		if (quantity === 0) return;
		if (quantity === 1) {
			deleteFromCart();
		} else {
			const storageCart = localStorage.getItem('cart');
			if (typeof storageCart === 'string') {		
				let cart: ICart[] = JSON.parse(storageCart);
				cart.forEach(element => {
					if (element.zipcode === product?.zipcode) {
						element.quantity = quantity - 1
					}
				});
				localStorage.setItem('cart', JSON.stringify(cart));
			}
			window.dispatchEvent(new Event("storage"));					
			setQuantity(quantity-1);
		}
	}

	if (!product) return <div>Товар не найден</div>

	return (
		<div className='product__wrapper'>	

			<Route routes={[{href: '/', name: 'Главная'}, {href: '/shop', name: 'Каталог'}]} current={product.name}/>

			<div className='product__container'>
				<div className='product__img'>
					<img alt="Изображение товара" src={product.img} onError={imgErrorHandler}/>
				</div>
				<div className='product__main'>
					<div className='product__availability'>В наличии</div>
					<div className='product__name'>{product.name}</div>
					<div className='product__volume'><img alt="volume or weight" src={product.showVolume ? require('../../assets/img/volume.png') : require('../../assets/img/weight.png')}/>{product.showVolume ? product.volume + ' мл' : product.weight + ' г'}</div>
					<div className='product__price-line'>
						<div className='product__price'>{makeFormattedSum(product.price)} &#8376;</div>
						<div className='product__quantity'>
							<button onClick={decreaseQuantity}>-</button>
							{quantity}
							<button onClick={increaseQuantity}>+</button>
						</div>
						<div onClick={addToCart} className='product__cart-button'>В корзину <img alt="add to cart" src={require('../../assets/img/cart.png')}/></div>
						<div className='product__share-mobile'><img alt="share" src={require('../../assets/img/share.png')}/></div>
					</div>
					<div className='product__links-line'>
						<div className='product__share'><img alt="share" src={require('../../assets/img/share.png')}/></div>
						<div className='product__delivery'><div>При покупке от <b>10 000 ₸</b> бесплатная доставка по Кокчетаву и области</div></div>
						<div className='product__price-list'>Прайс-лист <img alt="download price" src={require('../../assets/img/download2.png')}/></div>
					</div>
					<div className='product__param'>
						<span>Производитель:</span> {product.producer}
					</div>
					<div className='product__param'>
						<span>Бренд:</span> {product.brand}
					</div>
					<div className='product__param'>
						<span>Штрихкод:</span> {product.zipcode}
					</div>
					<div className={(isDescriptionVisible) ? 'product__dropdown product__dropdown-closed' : 'product__dropdown product__dropdown-opened'} onClick={()=>setIsDescriptionVisible(!isDescriptionVisible)}>Описание</div>
					<div className={(isDescriptionVisible) ? 'product__description' : 'product__description product__description-closed'}>{product.description}</div> 
					<hr className='product__hr'/>
					<div className={(isParamsVisible) ? 'product__dropdown product__dropdown-closed' : 'product__dropdown product__dropdown-opened'} onClick={()=>setIsParamsVisible(!isParamsVisible)}>Характеристики</div>
					<div className={(isParamsVisible) ? 'product__params' : 'product__params product__params-closed'}>
						<div className='product__param'>
							<span>Назначение: </span>{makeUsageArr(product).join(', ')}
						</div>
						<div className='product__param'>
							<span>Вес: </span>{product.weight} г
						</div>
						<div className='product__param'>
							<span>Объем: </span>{product.volume} мл
						</div>
						<div className='product__param'>
							<span>Размер (д*ш*в): </span>{product.size.length} х {product.size.width} х {product.size.height}
						</div>
					</div> 
				</div>
			</div>
		</div>
	);
};

export default ProductPage;