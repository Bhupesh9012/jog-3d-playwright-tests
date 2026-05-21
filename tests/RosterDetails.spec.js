const{test,expect}=require('@playwright/test');
const{LoginPage}=require('../Page-Objects/LoginPage');
test("Roster Details page",async function({page}){
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('Tester123@gmail.com','Tester123');

    await expect(page.locator("text=Welcome")).toBeVisible({ timeout: 10000 });
})
