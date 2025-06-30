const{test, expect} = require('@playwright/test')
const{LoginPage} = require('../PageObjects/LoginPage')
const{SalesPage} = require('../PageObjects/SalesPage')
const{HomePage} = require('../PageObjects/HomePage')
const data = JSON.parse(JSON.stringify(require('../Utils/userdata')))

//for(const data of dataset){
  test('salesforce navigate to all headers', async({page})=>{
    const user = data.username;
    const pwd = data.password;
    const list = page.locator('nav[aria-label=Global] .navItem')
    const loginPage = new LoginPage(page)
    const salesPage = new SalesPage(page)
    const homePage = new HomePage(page)
      await loginPage.openApplication()
    //  await page.pause()
      await loginPage.loginToSalesforceApplication(user, pwd)
      await homePage.navigateToSales()
    //  await page.locator('[part=help-text]').waitFor()
      const cnt = await list.count()
      console.log('----------cnt--------------'+cnt)
      await salesPage.clickAllLinkHeaders()  
   //  await page.pause()
   
  })
//}
