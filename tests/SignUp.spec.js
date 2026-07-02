const{test,expect}=require("@playwright/test")

test("SignUp page",async function({page}){

    await page.goto("https://3d.jog-joinourgame.com/3djogdigital/index.php")

    await page.locator("//a[normalize-space()='sign-up']").click()

    await page.waitForTimeout(2000)

    // await page.locator("//label[normalize-space()='Name']").click()

    await page.locator("//input[@id='name']").fill("Test")

    await page.locator("//input[@name='email']").click()

    await page.locator("//input[@name='email']").fill("Tester123@gmail.com")

    // await page.waitForTimeout(2000)
    await page.locator("//input[@name='password']").click()

    await page.locator("//input[@name='password']").fill("Tester123")

    const countrySelect = page.locator("//div[@id='r-country-ts-control']");
    await countrySelect.click();
    await page.getByRole("option", { name: "India", exact: true }).click();

    // wait for the state dropdown to become enabled
    await page.locator("//div[@id='r-state-ts-control']").click();

    // interact with the visible textbox inside the custom dropdown
    const stateInput = page.getByRole("textbox", { name: "Select country first" });
    await stateInput.waitFor({ state: 'visible', timeout: 20000 });
    await stateInput.fill("Uttarakhand");
    await page.getByRole("option", { name: "Uttarakhand", exact: true }).click();

    await page.locator("//div[@id='r-city-ts-control']").click();

    const cityInput = page.getByRole("textbox", { name: "Select state first" });
    await cityInput.waitFor({ state: 'visible', timeout: 20000 });
    await cityInput.fill("Dehradun");
    await page.getByRole("option", { name: "Dehradun", exact: true }).click();

    await page.waitForTimeout(3000)

    // await page.waitForTimeout(2000)
    await page.locator("//a[normalize-space()='Terms and Conditions']").click()

    // await page.waitForTimeout(2000)

    await page.locator("//input[@id='flexCheckDefault']").check()

    // await page.waitForTimeout(2000)

    await page.locator("//button[normalize-space()='Sign Up']").click()
    
    await page.waitForTimeout(2000)
})