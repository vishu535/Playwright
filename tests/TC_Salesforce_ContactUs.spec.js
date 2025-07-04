const{test, expect} = require('@playwright/test')
const{LoginPage} = require('../PageObjects/LoginPage')
const{HomePage} = require('../PageObjects/HomePage')
const{ContactUsPage} = require('../PageObjects/ContactUsPage')

test('salesforce login', async({browser})=>{
    const user = 'salesforce2etest-5clt@force.com';
    const pwd = 'Testing@123';
    const context = await browser.newContext()
    const page = await context.newPage()

    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    const contactUsPage = new ContactUsPage(browser)
    await loginPage.openApplication()
    await loginPage.loginToSalesforceApplication(user, pwd)
    await homePage.navigateToContactUs()
    await contactUsPage.switchToNewWindow()
    
})