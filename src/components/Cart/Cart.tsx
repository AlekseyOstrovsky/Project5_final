import React, {FC, useState, useEffect} from 'react';
import { ICart } from '../../types/types';
import CartItem from './CartItem';
import Route from '../Route/Route';
import { makeFormattedSum } from '../../utils/makeFormattedSum';

const Cart: FC = () => {
	const [cart, setCart] = useState<ICart[]>([]);	

	useEffect( () => {		
		loadCart();		
	}, [])

	function loadCart() {
		const storageCart = localStorage.getItem('cart');				
		let cart: ICart[];
		if (typeof storageCart === 'string') {
			cart = JSON.parse(storageCart);
			setCart(cart);							
		} else {
			setCart([]);
		}
	}
	
	const decreaseQuantity = (zipcode: string) => {
		let newCart: ICart[] =[...cart];
		newCart.forEach(element => {
			if (element.zipcode === zipcode) {
				element.quantity = element.quantity - 1
			}
		});
		setCart(newCart);
		localStorage.setItem('cart', JSON.stringify(newCart));
		window.dispatchEvent(new Event("storage"));		
	}

	const increaseQuantity = (zipcode: string) => {
		let newCart: ICart[] =[...cart];
		newCart.forEach(element => {
			if (element.zipcode === zipcode) {
				element.quantity = element.quantity + 1
			}
		});
		setCart(newCart);
		localStorage.setItem('cart', JSON.stringify(newCart));
		window.dispatchEvent(new Event("storage"));
	}

	const deleteFromCart = (zipcode: string) => {
		let newCart = cart.filter(item => item.zipcode !== zipcode);
		setCart(newCart);
		localStorage.setItem('cart', JSON.stringify(newCart));
		window.dispatchEvent(new Event("storage"));
	}

	const submit = () => {
		alert("Спасибо за заказ");
		let newCart: ICart[] = [];
		setCart(newCart);
		localStorage.setItem('cart', JSON.stringify(newCart));
		window.dispatchEvent(new Event("storage"));
	}

	return (
		<div className='cart__wrapper'>

			<Route routes={[{href: '/', name: 'Главная'}]} current='Корзина'/>

			<div className='cart__title'>КОРЗИНА</div>
			{(cart.length === 0) ? <div>Корзина пуста</div> : 
			<div className='cart__list'>
				{cart.map(item => <CartItem key={item.zipcode} cart={item} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} deleteFromCart={deleteFromCart}/>)}
			</div>}
			<div className='cart__last-line'>
				<div className='cart__submit' onClick={submit}>Оформить заказ</div>
				<div className='cart__sum'>{makeFormattedSum(cart.reduce((sum, item) => sum + item.price * item.quantity, 0))} &#8376;</div>
			</div>
			
		</div>
	);
};

export default Cart;