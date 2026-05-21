const{test,expect}=require('@playwright/test');

test("login page",async function({page}){

    await page.goto("https://3d.jog-joinourgame.com/3djogdigital/index.php")

    await page.locator("//a[normalize-space()='sign-in']").click()

    await page.waitForTimeout(3000)

    await page.locator("//input[@name='email']").fill("Tester123@gmail.com")

    await page.locator("//input[@name='password']").fill("Tester123")

    // await page.locator("//input[@id='flexCheckDefault']").check()

    await page.waitForTimeout(3000)

    await page.locator("//button[normalize-space()='Sign in']").click()

    const welcomeMessage = page.locator("text=Welcome"); 

    await expect(welcomeMessage).toBeVisible({ timeout: 10000 }); 

});
