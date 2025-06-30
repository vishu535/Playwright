import{CommonFunctions} from '../Utils/CommonFunctions.js';
class AccountsPage{
    cfunctions = new CommonFunctions()
    constructor(page){
        this.page = page;
        this.accountName = page.locator("[data-interactive-lib-uid='2']")
        this.webSiteField = page.locator("[data-interactive-lib-uid='3']")
        this.typeDropdown = page.locator("[data-interactive-lib-uid='4']")
        this.typeValue = page.locator('[title=Analyst]')
        this.descriptionField = page.locator("textarea[data-interactive-lib-uid='5']")
        this.phoneField = page.locator("[data-interactive-lib-uid='7']")
    //billing    
        this.addressField = page.locator("span.searchLabel")  //first-billing  last-shipping
        this.addressSearch = page.locator('[placeholder="Enter address"]')
        this.searchField = page.locator("[data-interactive-lib-uid='4']")
        this.searchFieldResult = page.locator("li.lookup__item")
        this.billingStreetField = page.locator('[placeholder="Billing Street"]')
        this.billingCityField = page.locator('[placeholder="Billing City"]')
        this.billingZipPostalField = page.locator('[placeholder="Billing Zip/Postal Code"]')
        this.billingStateField = page.locator('[placeholder="Billing State/Province"]')
        this.billingCountryField = page.locator('[placeholder="Billing Country"]')
    //shipping
        this.shippingStreetField = page.locator('[placeholder="Shipping Street"]')
        this.shippingCityField = page.locator('[placeholder="Shipping City"]')
        this.shippingZipPostalField = page.locator('[placeholder="Shipping Zip/Postal Code"]')
        this.shippingStateField = page.locator('[placeholder="Shipping State/Province"]')
        this.shippingCountryField = page.locator('[placeholder="Shipping Country"]')    

        this.saveButton = page.locator("button[title=Save]")
        this.enterPress = page.keyboard.press('Enter')
    }

    async fillAccountDetails(){
        await this.accountName.type('TestAccount_'+this.cfunctions.generateRandomNumber())
        await this.webSiteField.type('www.webAcc'+this.cfunctions.radomAlpha()+'.com')
        await this.typeDropdown.click()
        await this.typeValue.click()
        await this.descriptionField.type('Gift cards are redeemable for merchandise and in-store services at any Academy Sports + Outdoors store or for merchandise at academy.com')
        await this.phoneField.type('4742'+this.cfunctions.generateRandomNumber())
        await this.addressField.first().click()
        await this.addressSearch.type('3022 williams')
       // await this.enterPress
        await this.searchFieldResult.first().click()

        await this.addressField.last().click()
        await this.addressSearch.type('1202 york mills road')
        await this.searchFieldResult.first().click()
        await this.saveButton.click()


    }

    
}
module.exports = {AccountsPage}