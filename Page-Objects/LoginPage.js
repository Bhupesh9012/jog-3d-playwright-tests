const {expect} = require('@playwright/test');
class LoginPage {
     constructor(page){
        this.page=page;
        this.signInLink=page.locator("//a[normalize-space()='sign-in']");
        this.usernameInput=page.locator('#input[name="email"]');
        this.pawwordInput=page.locator('#input[name="password"]');
        this.signInButton=page.locator("//button[normalize-space()='Sign in']");
     }
}