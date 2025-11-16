exports.CartPage = class CartPage {
constructor(page) {
    this.page = page;
    this.noOfProducts = "//div[@class='cart_quantity_label']"
}

async checkProductInCart(productName){
const productsInCart=await this.page.$$(this.noOfProducts)
for (const product of productsInCart ) {
    console.log(await product.textContent())
    if(producName === await product.textCpntent()){
        return true;
        break;
    }
}
}
}