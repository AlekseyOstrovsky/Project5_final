const ShopPage = require('../pages/shop.page');

describe('Shop application', () => {
   it('should change header and footer depending on screen width', async () => {
   	await ShopPage.open();

		await browser.setWindowSize(1368, 900);
   	await expect(ShopPage.headerMobile).not.toBeDisplayed();
		await expect(ShopPage.headerPc).toBeDisplayed();
		await expect(ShopPage.footerPriceBtn).toBeDisplayed();

      await browser.setWindowSize(790, 900);
		await expect(ShopPage.headerMobile).not.toBeDisplayed();
		await expect(ShopPage.headerPc).toBeDisplayed();
		await expect(ShopPage.footerPriceBtn).toBeDisplayed();

		await browser.setWindowSize(760, 900);
		await expect(ShopPage.headerMobile).toBeDisplayed();
		await expect(ShopPage.headerPc).not.toBeDisplayed();
		await expect(ShopPage.footerPriceBtn).not.toBeDisplayed();
   })
})