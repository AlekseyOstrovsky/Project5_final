import React, {FC, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ICart } from '../types/types';
import { makeFormattedSum } from '../utils/makeFormattedSum';

const Header: FC = () => {

	const [cartVolume, setCartVolume] = useState<number>(0);
	const [cartSum, setCartSum] = useState<number>(0);
	const navigate = useNavigate();

	useEffect( () => {		
		loadCartVolume();		
	}, [])	

	window.addEventListener('storage', () => {		
		loadCartVolume()
	})

	function loadCartVolume() {
		const storageCart = localStorage.getItem('cart');				
		let cart: ICart[];
		if (typeof storageCart === 'string') {
			cart = JSON.parse(storageCart);									
			setCartVolume(cart.length);
			let sum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
			setCartSum(sum);
		}				
	}	

	return (
		<div className='header container' data-testid='header-container'>

			{/* уменьшенный header для мобильных разрешений */}
			<div className='header-mobile' data-testid='header-mobile'>
				<div className='header-mobile__first'>
					<div className='header-mobile__burger'>
						<div onClick={() => {
							document.getElementsByClassName("header-mobile__burger-list")[0].classList.toggle("header-mobile__burger-hidden");
							document.getElementsByClassName("header-mobile__burger-image")[0].classList.toggle("header-mobile__burger-hidden");
							document.getElementsByClassName("header-mobile__burger-image")[1].classList.toggle("header-mobile__burger-hidden");
						}}
							className='header-mobile__burger-logo'>
							<img className="header-mobile__burger-image" alt="menu" src={require('../assets/img/burger.png')}/>
							<img className="header-mobile__burger-image header-mobile__burger-hidden" alt="menu" src={require('../assets/img/burger-closed.png')}/>
						</div>
						<div className='header-mobile__burger-list header-mobile__burger-hidden'>
							<div className='header-mobile__burger-block'>
								<div className='header-mobile__burger-pic'>
									<img alt="Где нас найти" src={require('../assets/img/place.png')}/>
								</div>
								<div className='header-mobile__burger-text'>
									г. Кокчетав, ул. Ж. Ташенова 129Б<br/>
									<span>(Рынок Восточный)</span>
								</div>
							</div>
							<div className='header-mobile__burger-block'>
								<div className='header-mobile__burger-pic'>
									<img alt="Напишите нам" src={require('../assets/img/mail.png')}/>
								</div>
								<div className='header-mobile__burger-text'>
									opt.sultan@mail.ru <br/>
									<span>На связи в любое время</span>
								</div>
							</div>
							<div className='header-mobile__burger-block'>
								<div className='header-mobile__burger-pic'>
									<img alt="Звоните нам" src={require('../assets/img/phone_blue.png')}/>
								</div>
								<div className='header-mobile__burger-text'>
									Отдел продаж <br/>
									<span>+7 (777) 490-00-91</span> <br/>
									<span>время работы: 9:00-20:00</span>
								</div>
							</div>
							<div className='header-mobile__callback'>
								<div className='header-mobile__callback-logo'><img src={require('../assets/img/phone.png')} alt="Заказать звонок"/></div>
								<div className='header-mobile__callback-text'>Заказать звонок</div>	
							</div>
							<hr className='header-mobile__hr'/>
							<div className='header-mobile__links-header'>Меню сайта:</div>
								<div className='header-mobile__links-item'>О компании</div>
								<div className='header-mobile__links-item'>Доставка и оплата</div>
								<div className='header-mobile__links-item'>Возврат</div>
								<div className='header-mobile__links-item'>Контакты</div>
								<div onClick={() => navigate('./admin')} className='header-mobile__links-item'>Админка</div>

						</div>						
					</div>
					<div className='header-mobile__logo'>
						<div className='header-mobile__logo-main'>
							<img alt="Султан" src={require('../assets/img/logo.png')}/>
						</div>
						<div className='header-mobile__logo-text'>
							<img alt="Султан" src={require('../assets/img/logo1.png')}/>
							<img alt="Султан" src={require('../assets/img/logo2.png')}/>
							<img alt="Султан" src={require('../assets/img/logo3.png')}/>
							<img alt="Султан" src={require('../assets/img/logo4.png')}/>
							<img alt="Султан" src={require('../assets/img/logo5.png')}/>
							<img alt="Султан" src={require('../assets/img/logo6.png')}/>
						</div>
					</div>
					<div onClick={() => navigate('./cart')} className='header-mobile__cart'>				
						<img alt="Корзина" src={require('../assets/img/cart_big.png')}/>
						<div className="header-mobile__cart-quantity">{cartVolume}</div>		
					</div>
				</div>
				
				<div className='header-mobile__second'>
					<div className='header-mobile__second-column'>
						<div onClick={() => navigate('./shop')} className='header-mobile__second-link'>
							<img alt="Каталог" src={require('../assets/img/catalog-mobile.png')}/> Каталог
						</div>
					</div>
					<div className='header-mobile__second-column'>
						<div className='header-mobile__second-link'>
							<img alt="Поиск" src={require('../assets/img/search-mobile.png')}/> Поиск
						</div>
					</div>
				</div>
			</div>

			{/*полноразмерный header*/}

			<div className='header__first' data-testid='header-pc'>
				<div className='header__location'>
					<div className='header__location-logo'>
						<img alt="Где нас найти" src={require('../assets/img/place.png')}/>
					</div>
					<div className='header__location-text'>
						г. Кокчетав, ул. Ж. Ташенова 129Б<br/>
						<span>(Рынок Восточный)</span>
					</div>
				</div>
				<div className='header__mail'>
					<div className='header__mail-logo'>
						<img alt="Напишите нам" src={require('../assets/img/mail.png')}/>
					</div>
					<div className='header__mail-text'>
						opt.sultan@mail.ru <br/>
						<span>На связи в любое время</span>
					</div>
				</div>
				<div className='header__links'>
					<div className='header__links-item'>
						О компании
					</div>					
					<div className='header__links-item'>
						Доставка и оплата
					</div>					
					<div className='header__links-item'>
						Возврат
					</div>					
					<div className='header__links-item'>
						Контакты
					</div>
					<div data-testid='admin' onClick={() => navigate('./admin')} className='header__links-item'>
						Админка
					</div>
				</div>		
			</div>

			<div className='header__second'>
				<div className='header__second-logo'>
					<div className='header__second-logo-main'>
						<img alt="Султан" src={require('../assets/img/logo.png')}/>
					</div>
					<div className='header__second-logo-text'>
						<img alt="Султан" src={require('../assets/img/logo1.png')}/>
						<img alt="Султан" src={require('../assets/img/logo2.png')}/>
						<img alt="Султан" src={require('../assets/img/logo3.png')}/>
						<img alt="Султан" src={require('../assets/img/logo4.png')}/>
						<img alt="Султан" src={require('../assets/img/logo5.png')}/>
						<img alt="Султан" src={require('../assets/img/logo6.png')}/>
					</div>
				</div>
				<div onClick={() => navigate('./shop')} className='header__second-shop'>
					<div className="header__second-shop-title">Каталог</div>
					<div className="header__second-shop-logo">
						<div className="header__second-shop-logo-item"><img alt="Каталог" src={require('../assets/img/Rectangle433.png')}/></div>
						<div className="header__second-shop-logo-item"><img alt="Каталог" src={require('../assets/img/Rectangle434.png')}/></div>
						<div className="header__second-shop-logo-item"><img alt="Каталог" src={require('../assets/img/Rectangle436.png')}/></div>
						<div className="header__second-shop-logo-item"><img alt="Каталог" src={require('../assets/img/Rectangle435.png')}/></div>
					</div>
				</div>
				<div className='header__second-search'>
					<input type="text" placeholder='Поиск...'/>
					<div className='header__second-search-logo'><img alt='Поиск' src={require('../assets/img/search.png')}/></div>
				</div>				
				<div className='header__second-contacts'>
					<div className='header__second-contacts-text'>
						<div className='header__second-contacts-text-first'>+7 (777) 490-00-91</div>
						<div className='header__second-contacts-text-second'>время работы: 9:00-20:00</div>
						<div className='header__second-contacts-text-third'>Заказать звонок</div>
					</div>
					<div className='header__second-contacts-image'>	
						<img alt="Заказать звонок" src={require('../assets/img/call.png')}/>				
						<div className='header__second-contacts-image-circle'></div>
					</div>
				</div>
				<div className='header__second-price'>
					<div className='header__second-price-button'>
						Прайс-лист <img alt="Скачать прайс-лист" src={require('../assets/img/download.png')}/>
					</div>
				</div>
				<div onClick={() => navigate('./cart')} className='header__second-cart'>
					<div className="header__second-cart-body">
						<img alt="Корзина" src={require('../assets/img/cart_big.png')}/>
						<div className="header__second-cart-quantity">{cartVolume}</div>
					</div>
					<div className='header__second-cart-sum'>
						<div className='header__second-cart-title'>Корзина</div>
						<div className='header__second-cart-value'>{makeFormattedSum(cartSum)} &#8376;</div>
					</div>					
				</div>


			</div>

		</div>
	);
};

export default Header;