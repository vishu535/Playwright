class ContactUsPage{
    constructor(browser){
        this.browser = browser;
      //  this.navHeader = page.locator('nav[aria-label=Global] .navItem')
   //   this.contactUsLink = page.locator('[title="Contact Us"]')
    }

    async switchToNewWindow(){
        const context = await this.browser.newContext()
        const page = await context.newPage()
        const newPage = await Promise.all([
            context.waitForEvent('page'),
            await page.locator('[title="Contact Us"]').click()
        ])       
    }  

    async switchToNewWindowSetup(){
        const context = await this.browser.newContext()
        const page = await context.newPage()
        const newPage = await Promise.all([
            context.waitForEvent('page'),
            await page.locator('button.setupLink').click()
        ])   
        const text  = await newPage.locator('[part=formatted-rich-text] > span').textContent()
        console.log(text)
    }  
}
module.exports = {ContactUsPage}