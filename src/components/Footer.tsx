import React, {FC} from 'react';

const Footer: FC = () => {
	return (
		<div className='footer' data-testid='footer'>
			<div className="footer__container container">
				<div className='footer__first-block'>
					<div className='footer__logo'>
						<img alt="Султан" src={require('../assets/img/logo_white.png')}/>
						<div className='footer__price-button-mobile'>
							Прайс-лист <img alt="Скачать прайс-лист" src={require('../assets/img/download.png')}/>
						</div>
					</div>

					<div className='footer__about'>
						Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области
					</div>

					<div className='footer__subscribe'>
						<div className='footer__subscribe-text'>
							Подпишись на скидки и акции
						</div>
						<div className='footer__subscribe-input'>
							<input type="text" placeholder='Введите Ваш E-mail'/>
							<div className='footer__subscribe-logo'><img alt='Подписка' src={require('../assets/img/arrow.png')}/></div>
						</div>	

					</div>

				</div>

				<div className='footer__second-block'>
					<div className='footer__list-title'>Меню сайта:</div>
					<div className='footer__list-element'>О компании</div>
					<div className='footer__list-element'>Доставка и оплата</div>
					<div className='footer__list-element'>Возврат</div>
					<div className='footer__list-element'>Контакты</div>
				</div>

				<div className='footer__third-block'>
					<div className='footer__list-title'>Категории:</div>
					<div className='footer__list-element'>Бытовая химия</div>
					<div className='footer__list-element'>Косметика и гигиена</div>
					<div className='footer__list-element'>Товары для дома</div>
					<div className='footer__list-element'>Товары для детей и мам</div>
					<div className='footer__list-element'>Посуда</div>								
				</div>

				<div className='footer__fourth-block'>
					<div className='footer__list-title mobile-hide'>Скачать прайс-лист:</div>
					<div className='footer__price-button mobile-hide' data-testid='footer-price'>
							Прайс-лист <img alt="Скачать прайс-лист" src={require('../assets/img/download.png')}/>
					</div>
					<div className='footer__list-element'>Связь в мессенджерах:</div>	
					<div className='footer__picts'>
						<img alt="Whatsapp" src={require('../assets/img/whatsapp.png')}/>
						<img alt="Telegram" src={require('../assets/img/telegram.png')}/>
					</div>	

				</div>

				<div className='footer__fifth-block'>
					<div className='footer__list-title'>Контакты:</div>
					<div className='footer__contacts'>
						<div className='footer__contacts-first'>+7 (777) 490-00-91</div>
						<div className='footer__contacts-second'>время работы: 9:00-20:00</div>
						<div className='footer__contacts-third'>Заказать звонок</div>
					</div>
					<div className='footer__mail'>
						opt.sultan@mail.ru <br/>
						<span>На связи в любое время</span>
					</div>
					<div className='footer__picts'>
						<img alt="Visa" src={require('../assets/img/visa.png')}/>
						<img alt="MasterCard" src={require('../assets/img/mastercard.png')}/>
					</div>					
				</div>	
			</div>
			
			
		</div>
	);
};

export default Footer;