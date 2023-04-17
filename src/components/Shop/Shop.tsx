import React, {FC, useState, useEffect} from 'react';
import { IProduct, IUsage } from '../../types/types';
import ShopList from './ShopList';
import Pagination, { getPageCount } from './Pagination';
import UsageBar from './UsageBar';
import SideBar from './SideBar';
import Route from '../Route/Route';
import { useSortedProducts } from '../../hooks/useSortedProducts';

const Shop: FC = () => {
	
	const [products, setProducts] = useState<IProduct[]>([]);
	const [usage, setUsage] = useState<keyof IUsage>('body');
	const [isUsageSelected, setIsUsageSelected] = useState<boolean>(false);
	const [sort, setSort] = useState<string>('name-up');
	const [page, setPage] = useState<number>(1);
	const [minPrice, setMinPrice] = useState<number>(0);
	const [maxPrice, setMaxPrice] = useState<number>(10000);
	const [producersFilter, setProducersFilter] = useState<string[]>([]);	

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
	
	const sortedProducts = useSortedProducts(products, sort, usage, isUsageSelected, minPrice, maxPrice, producersFilter);

	const getProducers = (products: IProduct[], sortedProducts: IProduct[]): {name: string, value: number}[] => {
		let producers = new Map();
		products.forEach(item => producers.set(item.producer, 0));
		sortedProducts.forEach(item => producers.set(item.producer, producers.get(item.producer)+1));
		let producersArray = (Array.from(producers, ([name, value]) => ({ name, value })))
		return producersArray;
	}

	const producers = getProducers(products, sortedProducts);

	const changePage = (page: number) => {
		setPage(page);
   }

	const changeUsage = (newUsage: keyof IUsage) => {
		if (isUsageSelected && newUsage === usage) {
			setIsUsageSelected(false)
		} else {
			setUsage(newUsage);
			setIsUsageSelected(true);
		}
	}

	const changeMinPrice = (price: number) => {
		setMinPrice(price);
   }

	const changeMaxPrice = (price: number) => {
		setMaxPrice(price);
   }

	const changeProducersFilter = (val: string) => {
		producersFilter.findIndex(item => item === val)
		if (producersFilter.findIndex(item => item === val) > -1) {
			setProducersFilter(producersFilter.filter(item => item !== val))
		} else {
			setProducersFilter([...producersFilter, val])
		}
	}

	return (
		<div className='shop'>
	
			<Route routes={[{href: '/', name: 'Главная'}]} current='Косметика и гигиена'/>
			
			<div className='shop__title'>
				<div className='shop__header'>
					КОСМЕТИКА И ГИГИЕНА
				</div>
				<div className='shop__select'>
					<span className='shop__select-title'>Сортировка:&nbsp;</span> 
					<select className='shop__select-element' onChange={e => setSort(e.target.value)}>
						<option value='name-up'>Название &#9650;</option>
						<option value='name-down'>Название &#9660;</option>
						<option value='value-up'>Цена &#9650;</option>
						<option value='value-down'>Цена &#9660;</option>
					</select>
				</div>
			</div>


			<UsageBar usage={usage} isUsageSelected={isUsageSelected} changeUsage={changeUsage}/>



			<div className='shop__wrapper'>
				<div className='shop__sidebar'>
					<SideBar
						usage={usage}
						isUsageSelected={isUsageSelected}
						changeUsage={changeUsage}
						minPrice={minPrice}
						maxPrice={maxPrice}
						changeMinPrice={changeMinPrice}
						changeMaxPrice={changeMaxPrice}
						producers={producers}
						producersFilter={producersFilter}						
						changeProducersFilter={changeProducersFilter}
					/>
				</div>
				<div className='shop__main'>
					<ShopList products={sortedProducts.length > 12 ? sortedProducts.slice((page-1)*12,page*12) : sortedProducts}/>
					<Pagination page={page} changePage={changePage} totalPages={getPageCount(sortedProducts.length, 12)}/>
				</div>
			</div>
			

		</div>		
	);

	
};

export default Shop;