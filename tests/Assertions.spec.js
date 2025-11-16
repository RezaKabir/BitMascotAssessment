
const{test, expect} = require('@playwright/test')

test('AssertionsTest', async ({page})=>{

    //open app url
    await page.goto('https://demo.nopcommerce.com/register')
    //expect(page).toHaveURL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //expect(page).toHaveTitle      Page has the title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //expect(locator).toBeVisible()         Element is visible
    const logoElement=await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    //expect (locator).toBeEnabled()        control is enabled
   const searchStoreBox= await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()

//Radio button
   const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()   //select the radio button
    await expect(maleRadioButton).toBeChecked()

//check box
   const checkboxNewsletter = await page.locator('#Newsletter')
    await expect(checkboxNewsletter).toBeChecked()

//check attribute
const regButton = await page.locator('#register-button')
await expect(regButton).toHaveAttribute('type', 'submit')

// to have text and contain text(partial)
await expect (await page.locator('.page-title h1')).toHaveText('Register')
 
//contain text
await expect (await page.locator('.page-title h1')).toContainText('Reg')

//To have value
     const emailInput = await page.locator('#Email')
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')

//Tohave count

const options = await page.locator("select[name$='customerCurrency'] option")
await expect(options).toHaveCount(2)

})
