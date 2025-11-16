import {test, expect} from '@playwright/test';
import{ LoginPage} from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';
import { LogOutPage } from '../Pages/LogOutPage';

test('test',async ({page})=>{

//login
const login = new LoginPage(page);
await login.gotoLoginPage();
await login.login('standard_user' , 'secret_sauce')
await page.waitForTimeout(3000);

//Home
const home = new HomePage(page);
await home.addProductToCart('Sauce Labs Backpack');
await page.waitForTimeout(2000);
await home.gotoCart();

//CartPage
const cart = new CartPage(page)
await page.waitForTimeout(2000);
const status = await cart.checkProductInCart('Sauce Labs Backpack')
await page.waitForTimeout(3000);

//LogOut
const logout = new LogOutPage(page)
await logout.gotoLogOutPage(page);
await logout.logout();  

})
