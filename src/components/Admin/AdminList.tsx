import React, {FC} from 'react';
import { IProduct } from '../../types/types';
import AdminItem from './AdminItem';

interface AdminListProps {
	products: IProduct[];
	onDelete: (zipcode: string) => void;
	onEdit: (oldzipcode: string, product: IProduct) => void
}

const AdminList: FC<AdminListProps> = ({products, onDelete, onEdit}) => {

	if (!products.length) {
		return <h1>Товары отсутствуют</h1>
	}

	return (
		<div>
			{products.map(product => 
				<AdminItem key={product.zipcode} product={product} onDelete={onDelete} onEdit={onEdit}/>
			)}			
		</div>
	);
};

export default AdminList;