const {test, expect} = require('@playwright/test')

test('LocatingMultipleLinks', async ({page})=>{

await page.goto('https://staging.qtecsolution.com/')

//locate dropdown list

const links =await page.$$('a');

for (const link of links){

const linktext = await link.textContent();
  console.log(linktext);
} 

 await page.close();
  

})
