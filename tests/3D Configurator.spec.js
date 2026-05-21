const{test,expect}=require("@playwright/test")
test.setTimeout(80000);

test("3D Configurator",async function({page}){
    
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

    // await page.waitForTimeout(3000)

    await page.locator("//h5[normalize-space()='hockey']").click()

    // await page.waitForTimeout(2000)

    await page.locator("//section[@class='AllMainProducts selectModel']//a[1]//figure[1]//img[1]").click()

    // await page.waitForTimeout(2000)

    await page.locator("(//img[@class='lazyImage'])[8]").click()

    // await page.waitForTimeout(30000)

    await page.locator("//a[normalize-space()='Customize']").click()

    await page.locator("//a[@id='main-colors-tab']").click()

    // await page.waitForTimeout(3000)

    await page.locator("//label[contains(@class,'svgColor1')]//img").click()

    // await page.waitForTimeout(3000)

    await page.locator("(//div[contains(@aria-label,'WHITE')])[1]").click()

    // await page.waitForTimeout(2000)

    const shuffleButton = page.locator(".ShuffelColors");
    for (let i = 0; i < 2; i++) {
        await shuffleButton.click();
    }
    // await page.waitForTimeout(2000);

    await page.locator("//a[normalize-space()='Next']").click()

    // await page.waitForTimeout(3000)

    await page.locator("//input[@id='selectAllLogo']").check()

    // await page.waitForTimeout(2000)

    const fileChooserPromise = page.waitForEvent('filechooser');

    await page.locator("//span[@type='button']").click()

    const fileChooser = await fileChooserPromise
    await fileChooser.setFiles("C:\\Users\\Admin\\Downloads\\Front Logo.jpg");

    // await page.waitForTimeout(3000)

    await page.locator("#applyLogoButton").click()

    // await page.waitForTimeout(3000)

    const nextbutton =page.locator(".themeBtn.icnBtn.nextBtnBefore");

    await nextbutton.click()

    // await page.waitForTimeout(3000)

    await page.locator("//input[@id='selectAllFlagLogo']").check()

    // await page.waitForTimeout(2000)

    await page.getByPlaceholder("Search States...").fill("New York")

    await page.locator("//img[@src='images/flags/usa/new_york.png']").click()

    const acceptButton = page.locator(".flagApplyBtn");

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    })

    await acceptButton.click()

    // await page.waitForTimeout(3000)

    await page.locator("//a[normalize-space()='Next']").click()

    await page.locator(".themeBtn.icnBtn.nextBtnBefore").click()
    await page.locator("//a[normalize-space()='Next']").click()

    await page.locator("//img[@alt='Number Back']").waitFor({ state: 'visible', timeout: 10000 })
    await page.locator("//img[@alt='Number Back']").click()

    // await page.waitForTimeout(3000)

    await page.getByPlaceholder("Enter Your Jersey Number").fill("18")

    await page.locator("//button[@id='applyNumberButton']").click() 

    await page.locator("//button[normalize-space()='Change Number Color']").click()

    await page.locator("//div[@id='screenNum3']//div[@id='textColorControlsShow']//div[contains(@aria-label,'WHITE')]").click()

    await page.locator("//div[@id='screenNum3']//button[contains(@type,'button')][normalize-space()='Outline Settings']").click()

    await page.locator("(//div[contains(@aria-label,'ORANGE')])[44]").click()

    // 
    await page.locator("//a[normalize-space()='Next']").click()

    await page.locator("//h6[normalize-space()='Name Back']").click()

    await page.getByPlaceholder("Enter Your Player Name Here").fill("Alister")

    await page.locator("//button[@id='applyTextButton']").click()

    await page.locator("//a[normalize-space()='Checkout']").click()

    const confirmOrderButton = page.locator("//button[normalize-space()='Yes, confirm order']")
    await expect(confirmOrderButton).toBeVisible({ timeout: 30000 })
    await expect(confirmOrderButton).toBeEnabled({ timeout: 30000 })
    await confirmOrderButton.scrollIntoViewIfNeeded()
    await confirmOrderButton.click()
})  
