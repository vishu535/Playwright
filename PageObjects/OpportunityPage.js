import{CommonFunctions} from '../Utils/CommonFunctions.js';
class OpportunityPage{
    cfunctions = new CommonFunctions()
    constructor(page){
        this.page = page;
        this.opportunityName = page.locator('input[name=Name]')
        this.newAccount = page.locator("[title='New Account']")
        this.accountNameField = page.locator("[placeholder='Search Accounts...']")
        this.closeDateField = page.locator('input[name=CloseDate]')
        this.amountField = page.locator('input[name=Amount]')
        this.descriptionField = page.locator('textarea[id^=input]')
        this.statusStageField = page.locator('button[aria-label^=Stage]')
        this.statusStageValue = page.locator('span[title=Propose]')
        this.statusProbabilityField = page.locator('input[name=Probability]')
        this.statusForecastField = page.locator('button[aria-label^="Forecast Category"]')
        this.statusForecastValue = page.locator('span[title=Commit]')
        this.statusNextStepField = page.locator('input[name=NextStep]')

        this.saveButton = page.locator("button[name=SaveEdit]")
        
    }

    async createOpportunityName(){
        await this.opportunityName.type('opportunity'+this.cfunctions.radomAlpha())
        await this.accountNameField.click()
        await this.newAccount.click()
    }

    async fillOpportunityDetails(){
        await this.closeDateField.type('24/11/2024')
        await this.amountField.type('23800')
        await this.descriptionField.type('Lost, stolen, or altered cards cannot be replaced. Gift cards are not eligible for resale.')
        await this.statusStageField.click()
        await this.statusStageValue.click()
        await this.statusProbabilityField.type('')
        await this.statusForecastField.click()
        await this.statusForecastValue.click()
        await this.statusNextStepField.type('chill!!')
        await this.saveButton.click()
    }

    
}
module.exports = {OpportunityPage}