const {test, expect} = require('@playwright/test')

test('LocateMultipleElements', async ({page})=>{

await page.goto('https://demoblaze.com/index.html')

//locate dropdown list

const links =await page.$$('a');

for (const link of links){

const linktext = await link.textContent();
  console.log(linktext);
} 

   //Locate all the products displayed on home page

  //page.waitForSelector("//div[@id='tbodyid']//h4/a")

   const products=await page.$$("//div[@class='col-lg-4 col-md-6 mb-4']//h4/a")  //ok
   for (const product of products)
   {  const productName=await product.textContent();
    console.log(productName);   }

    await page.close();

})
