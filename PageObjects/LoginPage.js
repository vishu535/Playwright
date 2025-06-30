class LoginPage{
    constructor(page){
        this.page = page;
        this.submitButton = page.locator('input#Login')
        this.username = page.locator('input#username')
        this.password = page.locator('input#password')
        this.waitElement = page.locator('.slds-text-color_inverse')
     //   this.password = page.locator('input#password')
        this.chart = page.locator('div.emptyTask')
    }

    async openApplication(){
        await this.page.goto('https://momentum-dream-6959.my.salesforce.com/')
    }

    async loginToSalesforceApplication(user, pwd){ 
        await this.username.fill(user)
        await this.password.type(pwd)
        await this.submitButton.click()
        await this.waitElement.first().waitFor()
   //     await page.screenshot({path:'../screens/screenshot.png'})
        await this.chart.screenshot({path:'../screens/screenshot2.png'})
    }
}
module.exports = {LoginPage}