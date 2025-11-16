const {test, expect} = require('@playwright/test')

test('TestWebPage', async ({page})=>{

await page.goto('https://devcore.bechakeena.com/');

await page.getByPlaceholder('Enter email').fill('admin@example.com')
await page.getByPlaceholder('Enter password').fill('pa$$word')
await page.locator("//label[normalize-space()='Remember me']").click  
await page.locator("//button[normalize-space()='Sign in']").click
await page.locator("//p[normalize-space()='Dashboard']").click

const pageURL=await page.url()
console.log('URL is :', pageURL)
await expect(page).toHaveURL('https://devcore.bechakeena.com/login'); 

const links =await page.$$('a');
for (const link of links){
const linktext = await link.textContent();
console.log(linktext);
} 
const headerlink =await page.getByRole('menu').getByRole('link', 'nav-header');
for (const headerlink of links){
const linktextheader = await headerlink.textContent();
console.log(linktextheader);
} 
/*
const subitemlink =await page.$$('nav-items');
for (const subitemlink of links){
const linktextsubitem = await subitemlink.textContent();
console.log(linktextsubitem);
} */

await page.locator("//p[normalize-space()='Notifications']").click
await page.locator("//p[normalize-space()='Products']").click
await page.locator("//a[normalize-space()='Add New']").click
await page.locator("//a[normalize-space()='Return to Product List']").click
await page.locator("//span[normalize-space()='Print']").click

await page.locator("//p[normalize-space()='Campaigns']").click
await page.locator("//p[normalize-space()='Order Management']").click  
await page.locator("//p[normalize-space()='Order Payments']").click

await page.locator("//p[normalize-space()='Order Due Transactions']").click
await page.locator("//p[normalize-space()='Return Order']").click
await page.locator("//p[normalize-space()='Requisition Management']").click
await page.locator("//p[normalize-space()='Inventory Management']").click
await page.locator("//p[normalize-space()='Product Transactions']").click
await page.locator("//p[normalize-space()='Purchase Orders']").click
await page.locator("//p[normalize-space()='Purchase Order Payments']").click

await page.locator("//p[normalize-space()='Buyer Management']").click
await page.locator("//p[normalize-space()='Due Collection List']").click
await page.locator("//p[normalize-space()='Buyer Ledger']").click
await page.locator("//p[normalize-space()='Supplier Management']").click
await page.locator("//p[normalize-space()='Supplier Ledger']").click
await page.locator("//p[normalize-space()='Admin Management']").click
await page.locator("//p[normalize-space()='Support Messages']").click
await page.locator("//p[normalize-space()='Support Tickets']").click
await page.locator("//p[normalize-space()='Ticket Priorities']").click
await page.locator("//p[normalize-space()='Send Custom Notifications']").click
await page.locator("//p[normalize-space()='Customer Groups']").click

await page.locator("//p[normalize-space()='Sales Report']").click
await page.locator("//p[normalize-space()='Buyer Report']").click
await page.locator("//p[normalize-space()='Supplier Report']").click
await page.locator("//p[normalize-space()='Customer Follow-ups']").click
await page.locator("//p[normalize-space()='Create A Follow-up']").click
await page.locator("//p[normalize-space()='General Settings']").click
await page.locator("//p[normalize-space()='FAQ Management']").click
await page.locator("//p[normalize-space()='OTP Logs']").click    
/*
//await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
await page.locator("//div[@class='dropdown-menu ']").click 
await page.locator("//i[@class='fas fa-sign-out-alt']")
const logoutlink = await page.locator("//a[normalize-space()='Logout']");
await expect(logoutlink).toBeVisible();
await page.click("//a[normalize-space()='Logout']") */

await page.close();

})