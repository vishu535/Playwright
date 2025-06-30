import{CommonFunctions} from '../Utils/CommonFunctions.js';
class ContactPage{
    cfunctions = new CommonFunctions()
    constructor(page){
        this.page = page;
        this.salutationDropdown = page.locator('[name=salutation]')
        this.salutation = page.locator("span[title='Mr.']")
        this.firstNameField = page.locator("input[name='firstName']")
        this.lastNameField = page.locator("input[name='lastName']")
        this.accountNameField = page.locator('[placeholder="Search Accounts..."]')
        this.accountNameValue = page.locator("[title^='TestAccount']")//first
        this.titleField = page.locator("input[name='Title']")
        this.descriptionField = page.locator('textarea[id^=input]') //first
        this.phoneField = page.locator("input[name='Phone']")
        this.emailField = page.locator("input[name='Email']")
        this.addressField = page.locator('[placeholder="Search Address"]')
        this.mailingStreetField = page.locator('textarea[name=street]')
        this.mailingCityField = page.locator('input[name=city]')
        this.mailingzipField = page.locator('input[name=postalCode]')
        this.mailingStateField = page.locator('input[name=province]')
        this.mailingCountryField = page.locator('input[name=country]')
        this.saveButton = page.locator("button[name=SaveEdit]")
    }

    async fillContactDetails(){
        await this.salutationDropdown.click()
        await this.salutation.click()
        await this.firstNameField.type('TestName'+this.cfunctions.generateRandomNumber())
        await this.lastNameField.type(this.cfunctions.radomAlpha())
        await this.accountNameField.click()
        await this.accountNameValue.first().click()
        await this.titleField.type('TestContact_'+this.cfunctions.generateRandomNumber())
        await this.descriptionField.first().type('Academy Gift Cards do not have fees or expiration dates. Lost, stolen, or altered cards cannot be replaced')
        await this.phoneField.type('8341'+this.cfunctions.generateRandomNumber())
        await this.emailField.type('catchyousoon@sftest.com')
      //  await this.addressField.type('1022 baker street')
        await this.mailingStreetField.type('1022 street')
        await this.mailingCityField.type('san francisco')
        await this.mailingzipField.type('10223')
        await this.mailingStateField.type('CA')
        await this.mailingCountryField.type('USA')
        await this.saveButton.click()

    }

    
}
module.exports = {ContactPage}