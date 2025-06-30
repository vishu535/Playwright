class LeadsPage{
    constructor(page){
        this.page = page;
        this.salutationDropdown = page.locator('[name=salutation]')
        this.salutation = page.locator("span[title='Mr.']")
        this.firstNameField = page.locator("input[name='firstName']")
        this.lastNameField = page.locator("input[name='lastName']")
        this.companyField = page.locator("input[name='Company']")
        this.titleField = page.locator("input[name='Title']")
        this.websiteField = page.locator("input[name='Website']")
        this.descriptionField = page.locator("textarea[id^=input]")
        this.leadStatusDrop = page.locator('[aria-label^="Lead Status"]')
        this.leadStatusValue = page.locator("span[title=New]")
        this.phoneField = page.locator("input[name='Phone']")
        this.emailField = page.locator("input[name='Email']")
        this.addressField = page.locator('input[placeholder="Search Address"]')
        this.adressValue = page.locator("[title=Hyderabad]")

        this.cityField = page.locator("input[name='city']")
        this.postalField = page.locator("input[name='postalCode']")
        this.provinceField = page.locator("input[name='province']")
        this.countryField = page.locator("input[name='country']")
        this.noEmployeesField = page.locator("input[name='NumberOfEmployees']")
        this.annualRevenueField = page.locator("input[name='AnnualRevenue']")
        this.leadSourceDrop = page.locator('[aria-label^="Lead Source"]')
        this.leadSourceValue = page.locator("span[title='External Referral']")
        this.industryDrop = page.locator('[aria-label^="Industry"]')
        this.industryValue = page.locator("span[title=Chemicals]")

        this.saveButton = page.locator("button[name=SaveEdit]")
    }

    async newLeadCreation(){
        await this.salutationDropdown.click()
        await this.salutation.click()
        await this.firstNameField.type('Lead'+this.generateRandomNumber())
        await this.lastNameField.type(this.radomAlpha())
        await this.companyField.type('Home company'+this.radomAlpha())
        await this.titleField.type('tit'+this.radomAlpha())
        await this.websiteField.type('www.'+this.radomAlpha()+'.co.in')
        await this.descriptionField.first().type('The Test Strategy Document serves as a comprehenstesting process'+this.radomAlpha())
        await this.leadSourceDrop.click()
        await this.leadSourceValue.click()
        await this.phoneField.type('9966'+this.generateRandomNumber())
        await this.emailField.type('testlead'+this.generateRandomNumber()+'@sftest.com')
      //  await this.addressField.type('Hyderabad')
      //  await this.adressValue.click()
        await this.cityField.type('Hyderabad')
        await this.postalField.type('500078')
        await this.provinceField.type('Telangana')
        await this.countryField.type('India')
        await this.noEmployeesField.type('89')
        await this.annualRevenueField.type('900000')
        await this.leadSourceDrop.click()
        await this.leadSourceValue.click()
        await this.industryDrop.click()
        await this.industryValue.click()
        await this.saveButton.click()
    }

    generateRandomNumber() {
        var minm = 100000;
        var maxm = 999999;
        return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    }

    radomAlpha() {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
      
        for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * alphabet.length);
          result += alphabet.charAt(randomIndex);
        }     
        return result;
      }  
}
module.exports = {LeadsPage}