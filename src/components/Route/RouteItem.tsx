import React, {FC} from 'react';
import { useNavigate } from 'react-router-dom';
import { IRoute } from '../../types/types';

interface RouteItemProps {
	route: IRoute;
}

const RouteItem: FC<RouteItemProps> = ({route}) => {
	const navigate = useNavigate();

	return (
		<div onClick={() => navigate(route.href)}>
			{route.name}
		</div>
	);
};

export default RouteItem;