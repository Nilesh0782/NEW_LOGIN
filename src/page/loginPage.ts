import {Page , Locator} from "@playwright/test";

export class LoginPage {

readonly page: Page;
readonly username: Locator;
readonly password: Locator;
readonly LoginButton: Locator;
readonly errorMessage: Locator;

constructor(page: Page){
    this.page = page;
    this.username= page.getByRole('textbox', { name: 'Username'});
    this.password = page.getByRole('textbox', { name: 'Password'});
    this.LoginButton = page.getByRole('button', { name: 'Login'});
    this.errorMessage = page.locator('//*[@class="error-message-container error"]/h3')
}
}