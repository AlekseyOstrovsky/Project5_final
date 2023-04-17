import {useMemo} from "react";
import { IProduct, IUsage } from '../types/types';

export const useSortedProducts = (products: IProduct[], sort: string, usage_selected: keyof IUsage, isUsageSelected: boolean, minPrice: number, maxPrice: number, producersFilter: string[]) => {
	const sortedProducts = useMemo(() => {
		if (sort === 'name-down')  {
			return [...products].sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
		}
		if (sort === 'value-up')  {
			return [...products].sort((a, b) => a.price - b.price)
		}
		if (sort === 'value-down')  {
			return [...products].sort((a, b) => b.price - a.price)
		}
		return [...products].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
	}, [sort, products])

	const filteredProducts = useMemo(() => {
		if (isUsageSelected && !producersFilter.length) {
			return sortedProducts.filter(item => item.usage[usage_selected]).filter(item => item.price<=maxPrice && item.price>=minPrice)
		}
		if (!isUsageSelected && producersFilter.length) {
			return sortedProducts.filter(item => producersFilter.indexOf(item.producer) > -1).filter(item => item.price<=maxPrice && item.price>=minPrice)
		}
		if (isUsageSelected && producersFilter.length) {
			return sortedProducts.filter(item => item.usage[usage_selected]).filter(item => producersFilter.indexOf(item.producer) > -1).filter(item => item.price<=maxPrice && item.price>=minPrice)
		}
		return sortedProducts.filter(item => item.price<=maxPrice && item.price>=minPrice)
	},[usage_selected, isUsageSelected, sortedProducts, minPrice, maxPrice, producersFilter])		
			
	return filteredProducts;		
}