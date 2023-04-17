import { usageTypes } from "../components/Shop/UsageBar";
import { IProduct, IUsage } from '../types/types';

export const makeUsageArr = (product: IProduct): string[] => {
	let arr:string[] = [];
	let key: keyof IUsage;
	for (key in product.usage) {
		if (product.usage[key]) {
			usageTypes.forEach(item => (key === item.id) && arr.push(item.name))
		}
	}
	return arr;
}