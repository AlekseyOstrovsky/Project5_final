import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import './css/style.css';

describe('React App component', () => {

	beforeEach( () => {
		window.localStorage.clear()
	})

	afterEach( () => {
		window.localStorage.clear()
	})

	test('contains header and footer', () => {
		render(<App/>);
		expect(screen.getByTestId('header-container')).toBeInTheDocument();	
		expect(screen.getByTestId('footer')).toBeInTheDocument();		
	})

	
	test('contains sidebar', () => {
		render(<App/>);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		expect(screen.getByTestId('sidebar')).toMatchSnapshot();
	})

	
	test('contains usagebar', () => {
		render(<App/>);
		expect(screen.getByTestId('usagebar')).toBeInTheDocument();
		expect(screen.getByTestId('usagebar')).toMatchSnapshot();
	})


	test('contains no goods on first start', () => {
		render(<App/>);
		expect(screen.getByText('Товары отсутствуют')).toBeInTheDocument();				
	})

	test('adds default goods via admin page', () => {
		render(<App/>);
		expect(screen.getByText('Товары отсутствуют')).toBeInTheDocument();
		fireEvent.click(screen.getByTestId('admin'));
		fireEvent.click(screen.getByText('Загрузить товары по умолчанию'));
		fireEvent.click(screen.getByText('Главная'));
		expect(screen.getByText('Крем для рук Увлажнение и мягкость Kora 100 мл')).toBeInTheDocument();
		expect(screen.getByText('0000007259266')).toBeInTheDocument();
		expect(screen.getByText('0000010126600')).toBeInTheDocument();
		expect(screen.getByText('0000010486809')).toBeInTheDocument();
		expect(screen.getByTestId('pagination')).toBeInTheDocument();
		expect(screen.queryByText('Товары отсутствуют')).not.toBeInTheDocument();
	})

	test('adds goods to cart via shop page', () => {
		render(<App/>);	
		fireEvent.click(screen.getByTestId('admin'));
		fireEvent.click(screen.getByText('Загрузить товары по умолчанию'));
		fireEvent.click(screen.getByText('Главная'));
		expect(window.localStorage.getItem('cart')).toBe(null);
		fireEvent.click(screen.queryAllByText('В КОРЗИНУ')[0]);
		expect(window.localStorage.getItem('cart')).not.toBe(null);		
	})

	test('filters goods by usage', () => {
		render(<App/>);	
		fireEvent.click(screen.getByTestId('admin'));
		fireEvent.click(screen.getByText('Загрузить товары по умолчанию'));
		fireEvent.click(screen.getByText('Главная'));
		expect(screen.queryByText('Товары отсутствуют')).not.toBeInTheDocument();
		fireEvent.click(screen.queryAllByText('Уход за ногами')[0]);
		expect(screen.queryByText('Товары отсутствуют')).toBeInTheDocument();
	})

	test('filters goods by price', () => {
		render(<App/>);	
		fireEvent.click(screen.getByTestId('admin'));
		fireEvent.click(screen.getByText('Загрузить товары по умолчанию'));
		fireEvent.click(screen.getByText('Главная'));		
		expect(screen.queryByText('Товары отсутствуют')).not.toBeInTheDocument();
		expect(screen.getByTestId('pagination')).toBeInTheDocument();
		fireEvent.input(screen.getByTestId('maxprice'),{target: {value: '400'}});	
		expect(screen.queryAllByTestId('shopitem').length).toBe(10);
		fireEvent.input(screen.getByTestId('minprice'),{target: {value: '300'}});
		expect(screen.queryAllByTestId('shopitem').length).toBe(6);
	})

	test('opens good page and adds good to cart', () => {
		render(<App/>);	
		fireEvent.click(screen.getByTestId('admin'));
		fireEvent.click(screen.getByText('Загрузить товары по умолчанию'));
		fireEvent.click(screen.getByText('Главная'));
		fireEvent.click(screen.queryAllByTestId('shopitem-name')[0]);
		expect(window.localStorage.getItem('cart')).toBe(null);
		fireEvent.click(screen.getByText('В корзину'));
		expect(window.localStorage.getItem('cart')).not.toBe(null);		
	})

})
