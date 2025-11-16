const {test, expect}=require('@playwright/test');

test('Home Page',async ({page})=>{

await page.goto('https://staging.qtecsolution.com/');

const pageTitle= await page.title();
console.log('Page title is :', pageTitle);

await expect(page).toHaveTitle('Home');

const pageURL=page.url();
console.log('Page URL is :', pageURL);

await expect(page).toHaveURL('https://staging.qtecsolution.com/');

const logo=await page.getByAltText('QTEC Logo')
await expect(logo).toBeVisible();
 
await page.locator("//a[normalize-space()='Get A Free Consultation']").click

await page.getByPlaceholder('Full name').fill('RezaulKabir')
await page.getByPlaceholder('Email address').fill('kabir010370@gmail.com')
await page.getByPlaceholder('Subject').fill('Test')
await page.getByPlaceholder('Brand/Company/Product Name').fill('BPSS')
await page.getByPlaceholder('Tell us about your project...').fill('It is test purpose only')

await page.locator("//span[normalize-space()='Send Message']").click

await expect(page).toHaveURL('https://staging.qtecsolution.com/');

// Links/Products in Home Page

const links =await page.$$('a');

for (const link of links){

const linktext = await link.textContent();
  console.log(linktext);
} 
await page.close();

})