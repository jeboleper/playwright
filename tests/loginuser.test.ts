import { expect, test } from "@playwright/test"
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/HomePage";
import VideoPage from "../pages/videoPage";

const emailaddress = "jayveeolchondra69@gmail.com";
const loginpassword = "Automation";

test("TC1_NavigateToHomePage", async ({ page, baseURL }) => {
    test.setTimeout(60000);
    const login = new LoginPage(page);
    const homePage = new HomePage(page);

    // await page.goto('https://try.' + `${baseURL}`);
    await login.login(emailaddress, loginpassword)
    // await page.waitForURL('https://my.' + `${baseURL}explore`);
    //await page.goto('https://my.' + `${baseURL}explore`);

    // const homePageLogo = page.locator("//a[@title='Les Mills Home']");
    // const topMenuExplore = page.locator("//div[text()='Explore']");
    // const topMenuLearn = page.locator("//div[text()='Learn']");
    // const topMenuShop = page.locator("//div[text()='Shop']");
    // const topMenuSearch = page.locator("(//button[@title='Search'])[1]");
    // const topMenuAccount = page.getByRole('button', { name: 'JO' });

    // expect(homePageLogo).toBeVisible;
    // expect(topMenuExplore).toBeVisible;
    // expect(topMenuLearn).toBeVisible;
    // expect(topMenuShop).toBeVisible;
    // expect(topMenuSearch).toBeVisible;
    // expect(topMenuAccount).toBeVisible;
    await homePage.validateHomePage;
});

test("TC2_SignIn and SignOut User", async ({ page, baseURL }) => {

    test.setTimeout(60000);
    const login = new LoginPage(page);
    const homePage = new HomePage(page);

    await login.login(emailaddress, loginpassword)

    await page.evaluate(() => {
        window.scrollBy(100, 0);
      });
    
    await homePage.logoutUser();

});

test("TC3_Search", async ({ page, baseURL }) => {

    test.setTimeout(60000);
    const login = new LoginPage(page);
    const homePage = new HomePage(page);
    const topMenuSearch = page.locator("(//button[@title='Search'])[1]");
    const firstVideoResult = page.locator('.play--icon > svg').first();

    await login.login(emailaddress, loginpassword)
    
    await page.evaluate(() => {
        window.scrollBy(100, 0);
      });
    
    await topMenuSearch.click();
    await page.getByPlaceholder('Search workouts').fill('body combat');
    
    //verify search results visible
    expect(firstVideoResult).toBeVisible

});

// test("TC4_PlayVideo", async ({ page, baseURL }) => {
    
//     test.setTimeout(80000);
//     const login = new LoginPage(page);
//     const homePage = new HomePage(page);
//     const topMenuSearch = page.locator("(//button[@title='Search'])[1]");
//     const firstVideoResult = page.locator("//div[@class='title'])[1]");
//     // const firstVideoResult = page.locator("('div').filter({ hasText: /^44:04BODYCOMBAT #93 45 minNo EquipmentCardio$/ }).first()");
//     //await page.locator('div').filter({ hasText: /^44:04BODYCOMBAT #93 45 minNo EquipmentCardio$/ }).first().click();
//     // (//div[@class='title'])[1]


//     await page.goto('https://try.' + `${baseURL}`);
//     // const LoginTitle = page.locator("#create-account-title");
//     // console.log(await LoginTitle.getByText);
//     // expect(LoginTitle).toHaveText("Log In");
//     await login.login(emailaddress, loginpassword)
//     await page.waitForURL('https://my.' + `${baseURL}explore`);
//     // await page.goto('https://my.' + `${baseURL}explore`);

//     await page.evaluate(() => {
//         window.scrollBy(100, 0);
//       });
    
//     await topMenuSearch.click();
//     await page.getByPlaceholder('Search workouts').fill('bodycombat #93 45 min');
//     await page.getByPlaceholder('Search workouts').press('Enter');

//     //verify search results visible
//     //expect(firstVideoResult).toBeVisible
//     //expect(firstVideoResult).toContainText("BODYCOMBAT");
//     //expect(firstVideoResult).toHaveAttribute('Title', 'bodycombat');

//     // await firstVideoResult.click();
//     await page.locator('div').filter({ hasText: /^44:04BODYCOMBAT #93 45 minNo EquipmentCardio$/ }).first().click();
    
    
//     await page.locator("//button[@aria-label='Play']").click();
    
//     //await page.waitForURL('https://my.lesmillsondemand.com/workout/BODYCOMBAT%20%2393%2045%20min');
//     // await page.frameLocator('iframe[title="Vimeo Video"]').getByRole('button', { name: 'Play' }).click();
//     //await page.frameLocator('iframe[title="Vimeo Video"]').getByRole('button', { name: 'Pause' }).click();
//     await page.getByRole('button', { name: 'BACK' }).click();

//     // await page.getByPlaceholder('Search workouts').fill('bodycombat');
//     // await page.getByPlaceholder('Search workouts').press('Enter');
//     // await page.locator('div').filter({ hasText: /^44:04BODYCOMBAT #93 45 minNo EquipmentCardio$/ }).first().click();
//     // await page.frameLocator('iframe[title="Vimeo Video"]').locator('#vp-preview').click();
//     // await page.frameLocator('iframe[title="Vimeo Video"]').getByRole('button', { name: 'Pause' }).click();
//     // await page.frameLocator('iframe[title="Vimeo Video"]').getByRole('button', { name: 'Play' }).click();
//     // await page.getByRole('button', { name: 'BACK' }).click();
  
// });


// test('test', async ({ page }) => {
//   await page.goto('https://try.lesmillsondemand.com/');
//   await page.getByRole('button', { name: 'Allow all cookies' }).click();
//   await page.locator('#header').getByRole('button', { name: 'sign in' }).click();
//   await page.getByLabel('Email *').click();
//   await page.getByLabel('Email *').fill('jayveeolchondra69@gmail.com');
//   await page.getByLabel('Email *').press('Tab');
//   await page.getByLabel('Password *').fill('Automation');
//   await page.getByRole('button', { name: 'Log in' }).click();
//   await page.goto('https://my.lesmillsondemand.com/explore');
//   await page.getByRole('button', { name: 'Search' }).click();
//   await page.getByPlaceholder('Search workouts').fill('bodycombat #93 45 min');
//   await page.locator('.play--icon > svg > path').first().click();
// });