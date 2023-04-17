import React, {FC} from 'react';
import { IUsage } from '../../types/types';

interface UsageBarProps {
	usage: string;
	isUsageSelected: boolean;
	changeUsage: (usage: keyof IUsage) => void
}

interface UsageTypes {
	id: keyof IUsage;
	name: string;
}

export const usageTypes: UsageTypes[] = [
	{id: 'body', name: 'Уход за телом'},
	{id: 'hands', name: 'Уход за руками'},
	{id: 'legs', name: 'Уход за ногами'},
	{id: 'face', name: 'Уход за лицом'},
	{id: 'hair', name: 'Уход за волосами'},
	{id: 'tanning', name: 'Средства для загара'},
	{id: 'shaving', name: 'Средства для бритья'},
	{id: 'gifts', name: 'Подарочные наборы'},
	{id: 'hygienic', name: 'Гигиеническая продукция'},
	{id: 'oral', name: 'Гигиена полости рта'},
	{id: 'paper', name: 'Бумажная продукция'}	
]

const UsageBar: FC<UsageBarProps> = ({usage, isUsageSelected, changeUsage}) => {
	return (
		<div data-testid='usagebar' className="usage">
			{usageTypes.map(u =>
				<div
					onClick={() => changeUsage(u.id)}
					key={u.id}
					className={(isUsageSelected) ? (usage === u.id) ? 'usage__element usage__element-selected' : 'usage__element' : 'usage__element'}
				>
					{u.name}
				</div>
			)}
		</div>
	);
};

export default UsageBar;