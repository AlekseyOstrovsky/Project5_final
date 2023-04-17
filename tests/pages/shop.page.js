const Page = require('./page');


class ShopPage extends Page {

   get headerMobile () {
      return $('.header-mobile');
   }

   get headerPc () {
      return $('.header__first');
   }

   get footerPriceBtn () {
      return $('.footer__price-button');
   }

	get footer () {
      return $('.footer');
   }

   open () {
      return super.open('/shop');
   }
}

module.exports = new ShopPage();
