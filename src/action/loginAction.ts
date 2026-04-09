import { Page } from "@playwright/test";  
import { LoginPage } from "../page/loginpage";

export class LoginAction {

 readonly loginPage: LoginPage;

 constructor(page: Page){
    this.loginPage = new LoginPage(page);     
 }

 async login(username: string, password: string){
    await this.loginPage.username.fill(username);
    await this.loginPage.password.fill(password);
    await this.loginPage.LoginButton.click();
 }  
async getErrorMessage(){
    return await this.loginPage.errorMessage;
}

}