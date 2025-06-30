const{test, expect} = require('@playwright/test')
const{LoginPage} = require('../PageObjects/LoginPage')
const{LeadsPage} = require('../PageObjects/LeadsPage')
const{HomePage} = require('../PageObjects/HomePage')

test('salesforce login', async({page})=>{
    const user = 'salesforce2etest-5clt@force.com';
    const pwd = 'Testing@123';
    
    const loginPage = new LoginPage(page)
    const leadsPage = new LeadsPage(page)
    const homePage = new HomePage(page)
    await loginPage.openApplication()
    await loginPage.loginToSalesforceApplication(user, pwd)
    await homePage.navigateToLeads()
    await leadsPage.newLeadCreation()
   await page.pause()
})