import React, {FC} from 'react';

export const getPageCount = (totalCount: number, limit: number): number => {
	return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages: number): number[] => {
	let result = [];
	for (let i = 0; i < totalPages; i++) {
		 result.push(i + 1)
	}
	return result;
}

interface PaginationProps {
	totalPages: number;
	page: number;
	changePage: (p: number) => void;
}

const Pagination: FC<PaginationProps> = ({totalPages, page, changePage}) => {

	if (totalPages < 2) return (
		<div>&nbsp;</div>
	)

	let pagesArray = getPagesArray(totalPages);
	return (
		 <div data-testid='pagination' className="pagination__wrapper">
			<div className="pagination__arrow" onClick={() => {if (page !== 1) changePage(page-1)}}>&lt;</div>
			{pagesArray.map(p =>
				<div
					onClick={() => changePage(p)}
					key={p}
					className={(page === p) ? 'pagination__page pagination__current-page' : 'pagination__page'}
				>
					{p}
				</div>
			)}
			<div className="pagination__arrow" onClick={() => {if (page !== totalPages) changePage(page+1)}}>&gt;</div>
		 </div>
	);
};

export default Pagination;