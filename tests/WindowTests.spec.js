const{test, expect} = require('@playwright/test')

test('Academy project', async({browser})=>{
    const context = await browser.newContext()
        const page = await context.newPage()
    await page.goto('https://demo.automationtesting.in/Windows.html')
    
        await page.locator('text:Open New Tabbed Windows ').click()
        const newPage = await Promise.all([
            context.waitForEvent('page'),
            await page.locator('div#Tabbed button').click()
        ])   
        const text  = await newPage.locator('.alert-heading').textContent()
        console.log(text)
})
