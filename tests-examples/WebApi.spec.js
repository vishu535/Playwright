const {test, expect, request} = require('@playwright/test')
const loginPayload = {userEmail:"vishu.reddy12@gmail.com",userPassword:"Testing@123"}
test.beforeAll(async ()=>{
    const apiContext = await request.newContext()
    const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {data : loginPayload})
    expect(loginResponse.ok()).toBeTruthy()
    const responseJson = loginResponse.json()
    const tok = responseJson.token
    console.log('TOKEN---> '+tok)
})

test('Application without login', async({page})=>{
    page.addInitScript(value =>{
        window.localStorage.setItem('token', value)}, tok)
    await page.goto('https://rahulshettyacademy.com/client')
    await page.locator('div.card-body h5 b').first().waitFor()
    const titles = await page.locator('div.card-body h5 b').allTextContents()
    console.log(titles)
    const cnt = await page.locator('div.card-body b').count()
    for(let i=0;i<cnt;i++){
        if(await products.nth(i).locator(' b').textContent() === expected){
            await products.nth(i).locator('text= Add To Cart').click()
            break;
        }
    }
    await page.locator('[routerlink*=cart]').click()
    await page.locator('div li').first().waitFor()
    const bool = await page.locator("h3:has-text('zara coat 3')").isVisible()
    expect(bool).toBeTruthy()
    await page.locator("text=Checkout").click()
    await page.locator("[placeholder*='Country']").type("ind")
    const dropdown = page.locator(".ta-results")
    await dropdown.waitFor()
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent()
      if (text === " India") {
         await dropdown.locator("button").nth(i).click()
         break;
      }
   }
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
   console.log(orderId)
  // await page.pause()
   await page.locator('button[routerlink*=myorders]').click()
   await page.locator('tbody').waitFor()
   const rows = await page.locator('tbody tr')
   for(let i=1;i<await rows.count();++i){
    const rowwiseOrder = await rows.nth(i).locator('th').textContent()
    console.log(rowwiseOrder)
    if(orderId.includes(rowwiseOrder)){
        await rows.nth(i).locator('button').first().click()
        break;
    }
   }
   const orderDetails = await page.locator('.col-text').textContent()
   expect(orderId.includes(orderDetails)).toBeTruthy()
  // await page.pause()
})

