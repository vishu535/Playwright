const {test, expect} = require('@playwright/test')

test('Automation shop registration', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client')
    await page.locator('.login-section-wrapper p a').click()
    await page.locator('#firstName').fill('vishveshwar')
    await page.locator('#lastName').fill('reddy')
    await page.locator('#userEmail').fill('pvr.atomation@gmail.com')
    await page.locator('#userMobile').fill('9885766670')
    await page.locator('#userPassword').fill('Testing@123')
    await page.locator('#confirmPassword').fill('Testing@123')
    await page.locator('[type=checkbox]').click()
    await page.locator('input#login').click()
// await page.locator('h1.headcolor')
    await expect(page.locator('h1.headcolor')).toHaveText('Account Created Successfully')
    await page.locator('[class*=login-wrapper] button').click()

    await page.locator('#userEmail').type('pvr.atomation@gmail.com')
    await page.locator('#userPassword').type('Testing@123')
    await page.locator('#login').click()

    console.log(await page.title())
    console.log(await page.locator('div.card-body h5 b').first().textContent())
    const products = await page.locator('div.card-body h5 b').allTextContents()
    console.log(products)
});

test.only('Login shop registration', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client')
    await page.locator('#userEmail').type('pvr.atomation@gmail.com')
    await page.locator('#userPassword').type('Testing@123')
    await page.locator('#login').click()
  //  await page.waitForLoadState('networkidle')
 //   console.log(await page.title())
 //   console.log(await page.locator('div.card-body h5 b').first().textContent())
    await page.locator('div.card-body h5 b').first().waitFor()
    const products = await page.locator('div.card-body h5 b').allTextContents()
    console.log(products)
})