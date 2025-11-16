//import { expect } from "@playwright/test";

const {test,expect} = require('@playwright/test')

test('HomePage', async({page })=>{

  await page.goto('https://demoblaze.com/index.html')
 
  const pageTitle=await page.title()
  console.log('Page Title is : ', pageTitle);

  await expect(page).toHaveTitle('STORE')

  const pageURL=await page.url()
  console.log('URL is :', pageURL)

 await expect(page).toHaveURL('https://demoblaze.com/index.html')

 const logo=await page.getByTestId('nava')
 await expect(logo).toBeDefined()
 
// const logoTitle=await page.logoTitle("//a[@id='nava']")   //confusion
 
// await expect(page).toHaveTitle('PRODUCT STORE')
 console.log('LogoTitle is :', logo)
  
 await page.close()
 
})


