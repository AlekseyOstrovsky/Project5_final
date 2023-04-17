import React, {FC, useState} from 'react';
import { IUsage } from '../../types/types';
import { usageTypes } from './UsageBar';

interface SideBarProps{
	usage: string;
	isUsageSelected: boolean;
	changeUsage: (usage: keyof IUsage) => void;
	minPrice: number;
	maxPrice: number;
	changeMinPrice: (minPrice: number) => void;
	changeMaxPrice: (maxPrice: number) => void;
	producers: {name: string, value: number}[];
	producersFilter: string[];
	changeProducersFilter: (val: string) => void
}

const SideBar: FC<SideBarProps> = ({usage, isUsageSelected, changeUsage, minPrice, maxPrice, changeMinPrice, changeMaxPrice, producers, producersFilter, changeProducersFilter}) => {
	const [isProducersAllVisible, setIsProducersAllVisible] = useState<boolean>(false);
	const [producersQuery, setProducersQuery] = useState<string>('');

	const useFilteredProducers = (producers: {name: string, value: number}[], query: string): {name: string, value: number}[] => {
		if (query.length) {
			return producers.filter(item => item.name.toLowerCase().indexOf(query.toLowerCase()) > -1);			
		} else {
			return producers
		}
	}

	const filteredProducers = useFilteredProducers(producers, producersQuery);

	const firstProducers = filteredProducers.slice(0,4);
	const secondProducers = filteredProducers.slice(4);

	const changeAllProducersVisible = () => {
		setIsProducersAllVisible(!isProducersAllVisible);		
	}


	return (
		<div data-testid='sidebar' className='sidebar'>
			<div className='sidebar__title'>
				<span>ПОДБОР ПО ПАРАМЕТРАМ</span>
				<div className='sidebar__mobile-dropdown'
					onClick={()=>{
						document.getElementsByClassName("sidebar__mobile-dropdown-wrapper")[0].classList.toggle("sidebar__mobile-dropdown-wrapper-hidden");
						document.getElementsByClassName("sidebar__mobile-dropdown")[0].classList.toggle("sidebar__mobile-dropdown-hidden");
					}}>
					<img alt='Назад' src={require('../../assets/img/arrow-mobile.png')}/>
				</div>
			</div> 
			<div className='sidebar__mobile-dropdown-wrapper'>
				
				<div className='price-filter'>
					<div className='price-filter__header'>Цена <span>&#8376;</span></div>
					<div className='price-filter__main'>
						<input data-testid='minprice' type="number" value={minPrice} onChange={e=>changeMinPrice(+e.target.value)}/>
						<span>-</span>
						<input data-testid='maxprice' type="number" value={maxPrice} onChange={e=>changeMaxPrice(+e.target.value)}/>
					</div>
				</div>

				<div className="producers__wraper">
					<div className='sidebar__title'>Производитель</div>
					<div className='producers__input'>
						<input type="text" placeholder='Поиск...'  value={producersQuery} onChange={(e) => setProducersQuery(e.currentTarget.value)}/>
						<div className='producers__input-search-logo'><img alt='Поиск' src={require('../../assets/img/search.png')}/></div>
					</div>					
					
					{firstProducers.map( item =>
							<div className='producers__item' key={item.name}>
								<input value={item.name}
								type="checkbox"
								checked={producersFilter.indexOf(item.name) > -1 ? true : false}
								onChange={(e) => changeProducersFilter(e.currentTarget.value)}/>
								{item.name} ({item.value})
							</div>)}

					{filteredProducers.length > 4 && secondProducers.map( item =>
							<div className={ (isProducersAllVisible) ? 'producers__item' : 'producers__item producers__item-hidden'} key={item.name}>
								<input value={item.name}							
								type="checkbox"
								checked={producersFilter.indexOf(item.name) > -1 ? true : false}
								onChange={(e) => changeProducersFilter(e.currentTarget.value)}/>
								{item.name} ({item.value})
							</div>)}

					{filteredProducers.length > 4 && (
						<div className={(isProducersAllVisible) ? 'dropdown dropdown__closed' : 'dropdown dropdown__opened'} onClick={changeAllProducersVisible}>{(isProducersAllVisible) ? 'Скрыть' : 'Показать все'}</div>
					)}
					
				</div>

				<hr className='sidebar__hr'/>

				<div className="sidebar__usage">
					{usageTypes.map(u =>
						<div
							onClick={() => changeUsage(u.id)}
							key={u.id}
							className={(isUsageSelected) ? (usage === u.id) ? 'sidebar__usage__element sidebar__usage__element-selected' : 'sidebar__usage__element' : 'sidebar__usage__element'}
						>
							{u.name}
						</div>
					)}
				</div>

			</div>
			
		</div>
	);
};

export default SideBar;