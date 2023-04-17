import React, {FC, useEffect, useState} from 'react';
import defaultProducts from '../../defaultProducts';
import { IProduct } from '../../types/types';
import AdminList from './AdminList';
import AdminAddForm from './AdminAddForm';
import Route from '../Route/Route';

const AdminPage: FC = () => {

	const [products, setProducts] = useState<IProduct[]>([])	

	window.addEventListener('storage', () => {		
		loadProducts()
	})

	useEffect( () => {
		loadProducts()
	},[])	

	function loadProducts() {
		const storageProducts =	localStorage.getItem('products');	
		if (typeof storageProducts === 'string') {
			setProducts(JSON.parse(storageProducts))
		} else {
			setProducts([])
		}
	}

	const loadDefaultProducts = (e: React.MouseEvent<HTMLButtonElement>) => {	
		e.stopPropagation();
		localStorage.setItem('products', JSON.stringify(defaultProducts));		
		window.dispatchEvent(new Event("storage"));
	}

	const clearProducts = (e: React.MouseEvent<HTMLButtonElement>) => {	
		e.stopPropagation();
		localStorage.removeItem('products');		
		window.dispatchEvent(new Event("storage"));
	}

	const deleteProduct = (zipcode: string) => {
		const newProducts = products.filter(product=>product.zipcode !== zipcode);
		setProducts(newProducts);
		localStorage.setItem('products', JSON.stringify(newProducts));
	}
	
	const saveEditedProduct = (oldzipcode: string, editedProduct: IProduct) => {
		if (editedProduct.zipcode.length !== 13) {
			alert ('Штрих-код должен быть длиной 13 символов')
		} else if (products.filter(product=>product.zipcode !== oldzipcode).find(product => product.zipcode === editedProduct.zipcode)) {
			alert('Штрих-код должен быть уникальным')
		} else {
			const isReplaced = products.find((elem, index, array) => {
				if (elem.zipcode === oldzipcode) {
					array[index] = editedProduct;
					return true;
				} else return false
			});
			if (isReplaced) {
				setProducts(products);
				localStorage.setItem('products', JSON.stringify(products));
			}			
		}
	}

	const addNewProduct = (newProduct: IProduct) => {
		if (newProduct.zipcode.length !== 13) {
			alert ('Штрих-код должен быть длиной 13 символов')
		} else if (products.find(product => product.zipcode === newProduct.zipcode)) {
			alert('Штрих-код должен быть уникальным')
		} else {
			const newProducts = [...products, newProduct];
			setProducts(newProducts);
			localStorage.setItem('products', JSON.stringify(newProducts));
		}
	}

	return (
		<div className='admin-page__wrapper'>

			<Route routes={[{href: '/', name: 'Главная'}]} current='Админка'/>

			<div className='admin-page__body'>
				<div className='admin-page__body-buttons'>
					<button onClick={loadDefaultProducts}>Загрузить товары по умолчанию</button>
					<button onClick={clearProducts}>Удалить все товары</button>
				</div>				
				<AdminList products={products} onDelete={deleteProduct} onEdit={saveEditedProduct}/>
				<AdminAddForm onAdd={addNewProduct}/>
			</div>
		</div>
	);
};

export default AdminPage;