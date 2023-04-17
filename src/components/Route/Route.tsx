import React, {FC} from 'react';
import { useNavigate } from 'react-router-dom';
import { IRoute } from '../../types/types';
import RouteItem from './RouteItem';

interface RouteProps {
	routes: IRoute[];
	current: string;
}

const Route: FC<RouteProps> = ({routes, current}) => {
	const navigate = useNavigate();

	return (
		<div>
			<div className='route-mobile' onClick={() => navigate(-1)}>
				<div className='route-mobile__button'><img alt='Назад' src={require('../../assets/img/arrow-mobile.png')}/></div>
				<div className='route-mobile__text'>НАЗАД</div>
			</div>		
			<div className='route'>
				{routes.map((route, index) => <RouteItem key={index} route={route}/>)}				
				<span>{current}</span>
			</div>
		</div>
	);
};

export default Route;