const {test, expect} = require('@playwright/test')
test('Login', async ({page})=>{

await page.goto('https://www.saucedemo.com/');

await page.getByPlaceholder('Username').fill('standard_user')
await page.getByPlaceholder('Password').fill('secret_sauce') 
await page.locator("//input[@id='login-button']").click
await page.waitForTimeout(3000);

await page.locator("//div[@id='inventory_container']//div//div[@id='inventory_container']").click
await page.locator("//div[normalize-space()='Sauce Labs Backpack']").click
await page.locator("//button[@id='add-to-cart']").click
await page.waitForTimeout(3000);

await page.locator("//button[@id='react-burger-menu-btn']").click
const logoutlink = await page.locator("//a[@id='logout_sidebar_link']").click

})