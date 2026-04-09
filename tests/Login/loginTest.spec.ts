import {test , expect } from "@playwright/test"
import {LoginAction } from "../../src/action/loginAction";
import loginData from "../../src/testdata/login.json";


test.beforeEach(async ({page}) => {
await page.goto (loginData.baseurl);  
}   );

test('tc01 - vailid user should login successfully', async ({page}) => {
const loginAction = new LoginAction(page);
await loginAction.login(loginData.vaildusername.username, loginData.vaildusername.password);
await expect(page).toHaveTitle(loginData.pagetitle);
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});


test('tc02 - Locked user should not login', async ({page}) => {
    const loginAction = new LoginAction(page);
    await loginAction.login(loginData.LockedUser.username, loginData.LockedUser.password);
    const errorMessage = await loginAction.getErrorMessage();
    await expect(errorMessage).toHaveText(loginData.LockedUser.errorMessage);

});


 test('tc03 - Invalid user should not login', async ({page}) => {
    const loginAction = new LoginAction(page);
    await loginAction.login(loginData.invalidusername.username, loginData.invalidusername.password);
    const errorMessage = await loginAction.getErrorMessage();
    await expect(errorMessage).toHaveText(loginData.invalidusername.errorMessage);
    
});
