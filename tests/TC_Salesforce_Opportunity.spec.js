const{test, expect} = require('@playwright/test')
const{LoginPage} = require('../PageObjects/LoginPage')
const{OpportunityPage} = require('../PageObjects/OpportunityPage')
const{HomePage} = require('../PageObjects/HomePage')
const{AccountsPage} = require('../PageObjects/AccountsPage')

test('Create an Opportunity', async({page})=>{
   const user = 'salesforce2etest-5clt@force.com';
   const pwd = 'Testing@123';
    
    const loginPage = new LoginPage(page)
    const accountsPage = new AccountsPage(page)
    const opportunityPage = new OpportunityPage(page)
    const homePage = new HomePage(page)
    await loginPage.openApplication()
    await loginPage.loginToSalesforceApplication(user, pwd)
    await homePage.navigateToOpportunity()
    await opportunityPage.createOpportunityName()
    await accountsPage.fillAccountDetails()
    await opportunityPage.fillOpportunityDetails()
 //   await leadsPage
   await page.pause()
})