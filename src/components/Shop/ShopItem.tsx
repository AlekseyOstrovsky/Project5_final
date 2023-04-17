import React, {FC} from 'react';
import { IProduct } from '../../types/types';
import { imgErrorHandler } from '../../utils/imgErrorHandler';
import { addProdToCart } from '../../utils/addProdToCart';
import { makeFormattedSum } from '../../utils/makeFormattedSum';

interface ShopItemProps {
	product: IProduct;
	changePage: (zipcode: string) => void;	
}

const ShopItem: FC<ShopItemProps> = ({product, changePage}) => {

	const addToCart = () => {
		addProdToCart(product)
	}

	return (
		<div data-testid='shopitem' className='shopitem'>
			<div className='shopitem__image'>
				<img src={product.img} onError={imgErrorHandler} alt="Изображение товара"/>
			</div>
			<div className='shopitem__volume'>
				<img alt="volume or weight" src={product.showVolume ? require('../../assets/img/volume.png') : require('../../assets/img/weight.png')}/>
				{(product.showVolume) ? product.volume + ' мл' : product.weight + ' г'}
			</div>
			<div data-testid='shopitem-name' className='shopitem__name' onClick={() => changePage(product.zipcode)}>
				{product.name}
			</div>
			<div className='shopitem__zipcode'>
				<span>Штрихкод:</span> {product.zipcode}
			</div>
			<div className='shopitem__producer'>
				<span>Производитель:</span> {product.producer}
			</div>
			<div className='shopitem__brand'>
				<span>Бренд:</span> {product.brand}
			</div>
			<div className='shopitem__last-line'>
				<div className='shopitem__price'>
					{makeFormattedSum(product.price)} &#8376;
				</div>
				<div onClick={addToCart} className='shopitem__cart-link'>
					В КОРЗИНУ <img alt="Добавить в корзину" src={require('../../assets/img/cart.png')}/>
				</div>
			</div>

		</div>
	);
};

export default ShopItem;