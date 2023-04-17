import {SyntheticEvent} from 'react';

export const imgErrorHandler = (e: SyntheticEvent<HTMLImageElement, Event>) => {			
	e.currentTarget.src = 'https://www.ixs.ru/image/cache/catalog/icon/no_image500-800x800-980x800.jpg'; 
}