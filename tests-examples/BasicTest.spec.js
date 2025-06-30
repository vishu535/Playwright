const {test, expect} = require('@playwright/test')
//const {expect} = require('../playwright.config')

test('First Playwright Test', async ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
});

test('Using page fixture open browser', async ({page})=> {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    console.log(await page.title())
   // await expect(page).toHaveTitle('Google')
   await page.locator('#username').type('vishupulla')
   await page.locator('#password').type('vishu')
   await page.locator('#signInBtn').click()
   console.log(await page.locator('[style*=block]').textContent())
   await expect(page.locator('[style*=block]')).toContainText('Incorrect')

   await page.locator('#username').fill('')
   await page.locator('#username').type('rahulshettyacademy')
   await page.locator('#password').fill('learning')
   await page.locator('#signInBtn').click()
   console.log(await page.locator('.card-body a').first().textContent())
   console.log(await page.locator('.card-body a').nth(0).textContent())


})

test('Playwright check boxes assertions', async ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();

    const username = page.locator('#username')
    const dropdown = page.locator('select.form-control')

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await dropdown.selectOption('consult')
    await page.locator('.radiotextsty').last().click()
    await page.locator('#okayBtn').click()
    console.log(await page.locator('.radiotextsty').last().isChecked())
    await expect(page.locator('.radiotextsty').last()).toBeChecked()
    await page.locator('#terms').click()
    await expect(page.locator('#terms')).toBeChecked()
    await page.locator('#terms').uncheck()
    expect(await page.locator('#terms').isChecked()).toBeFalsy()
});

test('Test new window using playwright', async ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const docLink = page.locator("[href*='documents-request']")
    const[newPage] = await Promise.all([
        context.waitForEvent('page'),
        docLink.click(),
    ])
    const text = await newPage.locator('.red').textContent()
    const arrText = text.split('@')
    const user = arrText[1].split(' ')[0]
    console.log(user)
    await page.locator('#username').type(user)
    await page.pause()
})

test.only('Playwright testdebug', async ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();

    const username = page.locator('#username')
    const dropdown = page.locator('select.form-control')
    const docLink = page.locator("[href*='documents-request']")
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

    const[newPage] = await Promise.all([
        context.waitForEvent('page'),
        docLink.click(),
    ])
    const text = await newPage.locator('.red').textContent()
    const arrText = text.split('@')
    const user = arrText[1].split(' ')[0]
    console.log(user)
    await page.locator('#username').type(user)
    await page.pause()
})