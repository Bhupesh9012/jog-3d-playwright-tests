const{test,expect}=require("@playwright/test")

test("SignUp page",async function({page}){

    await page.goto("https://3d.jog-joinourgame.com/3djogdigital/index.php")

    await page.locator("//a[normalize-space()='sign-up']").click()

    await page.waitForTimeout(2000)

    // await page.locator("//label[normalize-space()='Name']").click()

    await page.locator("//input[@id='name']").fill("Test")

    await page.locator("//input[@name='email']").click()

    await page.locator("//input[@name='email']").fill("Tester123@gmail.com")

    await page.waitForTimeout(2000)
    await page.locator("//input[@name='password']").click()

    await page.locator("//input[@name='password']").fill("Tester123")

    const countrySelect = page.locator("//div[@id='r-country-ts-control']");
    await countrySelect.click();
    await page.getByRole("option", { name: "India", exact: true }).click();

    await page.waitForTimeout(2000)
    await page.locator("//a[normalize-space()='Terms and Conditions']").click()

    await page.waitForTimeout(2000)

    await page.locator("//input[@id='flexCheckDefault']").check()

    await page.waitForTimeout(2000)

    await page.locator("//button[normalize-space()='Sign Up']").click()
    
    await page.waitForTimeout(5000)
})