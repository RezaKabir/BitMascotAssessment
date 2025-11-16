exports.HomePage = class HomePage{

    constructor(page) {
        this.page = page;           
        this.productList= "//div[normalize-space()='Sauce Labs Backpack']";                   
        this.addToCartbtn= "//button[@id='add-to-cart-sauce-labs-backpack']";
        this.cart = "//a[@class='shopping_cart_link']" ;
    }

async addProducToCart(productName) { 
    
      //await this.page.locator(this.productList).click
      const productList = await this.page.$$('a');
   for (const product of productList) {
        if(productName === await product.textContent()){
            await product.click()
            break;
        }
        await this.page.on('dialog', async dialog=>{
            if(dialog.message().includes('added')){
                await dialog.accept();
            }
        })
        await this.page.locator(this.addToCartbtn).click();
        }       
        await this.page.locator(this.cart).click();
        
    }}



