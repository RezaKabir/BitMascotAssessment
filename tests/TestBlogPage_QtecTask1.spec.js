const {test, expect} = require('@playwright/test')

test('TestBlogPage', async ({page})=>{

await page.goto('https://staging.qtecsolution.com/blog')

//  Links/Products in Blog Page

const links =await page.$$('a');
for (const link of links){
const linktext = await link.textContent();
console.log(linktext);
} 

//not ok
const chklistlink = await page.locator(" //div[@class='blog-title']").allInnerTexts('The Ultimate Checklist We Follow for Ensuring Mobile App Security and Data Protection')
await expect(chklistlink).toBeVisible();

await page.close();

})