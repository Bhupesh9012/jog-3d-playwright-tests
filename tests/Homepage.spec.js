const {test,expect}=require('@playwright/test')
test("Homepage",async function({page}){
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

    await page.locator("//a[normalize-space()='3D Configurator']").click()

   //  await page.waitForTimeout(3000)

    await page.locator("//img[@alt='Company Logo']").click()

   //  await page.waitForTimeout(3000)

     await page.locator("//a[normalize-space()='Builder']").click()

   //  await page.waitForTimeout(3000)

    await page.locator("//a[normalize-space()='Collection']").click()

   //  await page.waitForTimeout(3000)

    await page.locator("//a[normalize-space()='Highlights']").click()

   //  await page.waitForTimeout(3000)

    await page.locator("//a[normalize-space()='Why Custom?']").click()

    // await page.waitForTimeout(3000)

    await page.locator("//a[normalize-space()='Benefits']").click()

    // await page.waitForTimeout(3000)

    await page.locator("//a[normalize-space()='Process']").click()

    // await page.waitForTimeout(3000)

    await page.locator("//button[@id='scrollToTopBtn']").click()

    // await page.waitForTimeout(3000)

    await page.locator("//a[normalize-space()='Start Customising']").click()

    // await page.waitForTimeout(2000)

     await page.locator("//img[@alt='Company Logo']").click()

    // await page.waitForTimeout(3000)

    await page.locator("//a[normalize-space()='Logout']").click()

    await page.waitForTimeout(2000)
    
}) 
