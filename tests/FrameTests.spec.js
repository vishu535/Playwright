const{test, expect} = require('@playwright/test')
//this is test conflict
test('Academy project', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const allframes = page.frames();
    console.log("No.of frames: " + allframes.length);
    
    const frame3 = page.frameLocator("[src='frame_3.html']")
    await frame3.locator("input[name='mytext3']").fill("Vishveshwar Reddy");

    const frame2 = page.frameLocator("[src='frame_2.html']")
    await frame2.locator("input[name='mytext2']").fill(" Reddy");

    const frame1 = page.frameLocator("[src='frame_1.html']")
    await frame1.locator("input[name='mytext1']").fill(" Pulla");
})
