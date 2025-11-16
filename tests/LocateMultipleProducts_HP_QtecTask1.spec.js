const {test, expect} = require('@playwright/test')

test('LocateMultipleProducts', async ({page})=>{

await page.goto('https://staging.qtecsolution.com/')

 //Locate all the products displayed on home page

//  page.waitForSelector("//div[@class='section-title']//div//h1/a")

   const products=await page.$$("//div[@class='up-btn btn btn--secondary btn-show']")
   for (const product of products)
   {  const productName=await product.textContent();
    console.log(productName);   } 

    await page.close();


})