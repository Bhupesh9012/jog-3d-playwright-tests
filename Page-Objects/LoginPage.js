const {expect} = require('@playwright/test');
class LoginPage {
     constructor(page){
        this.page=page;
        this.signInLink=page.locator("//a[normalize-space()='sign-in']");
        this.usernameInput=page.locator("//input[@name='email']");
        this.passwordInput=page.locator("//input[@name='password']");
        this.signInButton=page.locator("//button[normalize-space()='Sign in']");
     }
     async navigate(){
        await this.page.goto("https://3d.jog-joinourgame.com/3djogdigital/index.php");
        await this.signInLink.click();
     }
        async login(username,password){
            await this.usernameInput.fill(username);
            await this.passwordInput.fill(password);
            await this.signInButton.click();
        }
}
module.exports={LoginPage};
