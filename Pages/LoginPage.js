exports.LoginPage = class LoginPage {

constructor(page) {
    this.page = page;
    this.loginLink = "//div[@id='login_button_container']"
    this.usernameInput = "//input[@id='user-name']";
    this.passwordInput = "//input[@id='password']";
    this.loginButton = "//input[@id='login-button']";
}
async gotoLoginPage(){
    await this.page.goto('https://www.saucedemo.com/');
    }
async login(username, password){
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click
}

}