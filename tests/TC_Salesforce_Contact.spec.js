const{test, expect} = require('@playwright/test')
const{LoginPage} = require('../PageObjects/LoginPage')
const{ContactPage} = require('../PageObjects/ContactPage')
const{HomePage} = require('../PageObjects/HomePage')

test('salesforce login', async({page})=>{
    const user = 'salesforce2etest-5clt@force.com';
    const pwd = 'Testing@123';
    
    const loginPage = new LoginPage(page)
    const contactPage = new ContactPage(page)
    const homePage = new HomePage(page)
    await loginPage.openApplication()
    await loginPage.loginToSalesforceApplication(user, pwd)
    await homePage.navigateToContacts()
    await contactPage.fillContactDetails()
   await page.pause()
})