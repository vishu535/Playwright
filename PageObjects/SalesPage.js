class SalesPage{
    constructor(page){
        this.page = page;
        this.navHeader = page.locator('nav[aria-label=Global] .navItem')
        
    }

    async clickAllLinkHeaders(){
        const headers = await this.navHeader.count()
        console.log('------------------------'+headers)
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
        for(let i=0;i<headers;i++){
            console.log('-------came here!!!!!!!!!!-----')
            await this.navHeader.nth(i).click()
         //   await this.page.locator('[part=help-text]').waitFor()
         await delay(4000); 
        }
    }

    
}
module.exports = {SalesPage}