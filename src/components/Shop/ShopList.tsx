import React, {FC} from 'react';
import { IProduct } from '../../types/types';
import ShopItem from './ShopItem';
import { useNavigate } from 'react-router-dom';

interface ShopListProps {
	products: IProduct[];
}

const ShopList: FC<ShopListProps>= ({products}) => {

	const navigate = useNavigate();

	if (!products.length) {
		return <div className='shop__noitems-header'>Товары отсутствуют</div>
	}

	return (
		<div className='shop__container'>
			{products.map(product => 
				<ShopItem key={product.zipcode} product={product} changePage={(zipcode) => navigate('/shop/'+zipcode)}/>
			)}	
		</div>
	);
};

export default ShopList;