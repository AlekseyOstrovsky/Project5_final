import React, {FC} from 'react';
import { ICart } from '../../types/types';
import { imgErrorHandler } from '../../utils/imgErrorHandler';
import { makeFormattedSum } from '../../utils/makeFormattedSum';

interface CarItemProps {
	cart: ICart;
	decreaseQuantity: (zipcode: string) => void;
	increaseQuantity: (zipcode: string) => void;
	deleteFromCart: (zipcode: string) => void;
}

const CartItem: FC<CarItemProps> = ({cart, decreaseQuantity, increaseQuantity, deleteFromCart}) => {

	return (
		<div className="cart-item">
			<div className='cart-item__image'>
				<img alt="Изображение товара" src={cart.img} onError={imgErrorHandler}/>
			</div>
			<div className='cart-item__textblock'>
				<div className='cart-item__volume'><img alt="volume or weight" src={cart.showVolume ? require('../../assets/img/volume.png') : require('../../assets/img/weight.png')}/>{cart.showVolume ? cart.volume + ' мл' : cart.weight + ' г'}</div>
				<div className='cart-item__name'>{cart.name}</div>
				<div className='cart-item__description'>{cart.description}</div>
			</div>
			<div className='cart-item__price-block'>
				<div className='cart-item__quantity'>
					<button onClick={() => {if (cart.quantity !== 1) decreaseQuantity(cart.zipcode)}}>-</button>
					{cart.quantity}
					<button onClick={() => increaseQuantity(cart.zipcode)}>+</button>
				</div>
				<div className='cart-item__price'>
					{makeFormattedSum(cart.price)}&nbsp;&#8376;
				</div>
				<div className='cart-item__delete'>
					<div className='cart-item__delete-button' onClick={()=>deleteFromCart(cart.zipcode)}><img alt="Удалить товар из корзины" src={require('../../assets/img/delete.png')}/></div>
				</div>
			</div>			
		</div>
	);
};

export default CartItem;