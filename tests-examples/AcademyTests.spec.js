const{test, expect} = require('@playwright/test')

test('Academy project', async({page})=>{
    await page.goto('https://uat6www.academy.com/')
    await page.locator("button[aria-label='Sign In']").click()
    await page.locator("button[data-auid='sign-in']").click()
    await page.locator('input#email').fill('vishveshwar.vishu@gmail.com')
    await page.locator('#signInForm button[type=submit]').click()
    await page.locator('button[data-auid=use-password-btn]').click()
    await page.locator('input#password').type('Testing@123')
    await page.locator('#signInForm button[type=submit]').click()
    await page.locator('button.menu-close-btn').click()   
})

test.only('salesforce login', async({page})=>{
    await page.goto('https://login.salesforce.com/')
    await page.locator('#username').type('pvr.atomation-ugfw@force.com')
    await page.locator('input#password').type('Testing@123')
    await page.locator('input#Login').click()
    await page.locator('.slds-text-color_inverse').first().waitFor()
    await page.screenshot({path:'screens/screenshot.png'})
    await page.locator('div.ghostChart').first().screenshot({path:'screens/screenshot2.png'})
   // await expect(page.locator(''))
})