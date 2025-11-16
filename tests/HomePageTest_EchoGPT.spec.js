const {test, expect}=require('@playwright/test');

test('Home Page',async ({page})=>{

await page.goto('https://echogpt.live/');

const pageTitle= await page.title();
console.log('Page title is :', pageTitle);

await expect(page).toHaveTitle('EchoGPT - AI-Driven Productivity Solutions');

const pageURL=page.url();
console.log('Page URL is :', pageURL);

await expect(page).toHaveURL('https://echogpt.live/');

await page.close();
})