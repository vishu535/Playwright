class HomePage{
    constructor(page){
        this.page = page;
        this.accountHeader = page.locator('a[href="/lightning/o/Account/home"]')
        this.contactsHeader = page.locator('a[href="/lightning/o/Contact/home"]')
        this.salesHeader = page.locator('a[href="/lightning/o/Opportunity/home"]')
        this.apportunitiesHeader = page.locator("a>span>lightning-icon[icon-name='standard:opportunity']")
        this.newLeads = page.locator(".group1 button:has-text('New')")
        this.newOpportunities = page.locator(".group2 button:has-text('New')")
        this.newContacts = page.locator(".group3 button:has-text('New')")
        this.sidePanelSales = page.locator('[title=Sales]')
        this.buyNowButton = page.locator('[title="Buy Now"]')
        this.settingsIcon = page.locator("button[aria-label='Quick Settings']")
    }

    async navigateToLeads(){
        await this.newLeads.click()
    }

    async navigateToOpportunity(){
        await this.newOpportunities.click()
    }

    async navigateToContacts(){
        await this.newContacts.click()
    }

    async navigateToSales(){
        await this.sidePanelSales.click()
    }

    async navigateToOpportunities(){
        await this.salesHeader.hover()
        await this.apportunitiesHeader.click()
    }

    async navigateToContactUs(){
        await this.buyNowButton.click()
     //   await this.contactUsLink.click()
    }

    async navigateToSettings(){
        await this.settingsIcon.click()
    }
}
module.exports = {HomePage}