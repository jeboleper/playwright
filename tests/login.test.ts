import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  //Go to Lesmills Landing Page
  await page.goto('https://try.lesmillsondemand.com/');
  
  //Click on Sign in
  //await page.getByLabel('sign in').click();
  await page.locator('#header').getByRole('button', { name: 'sign in' }).click();

  //Enter Login credentials and Sign in
  await page.getByLabel('Email *').fill('jayveeolchondra69@gmail.com');
  await page.getByLabel('Password *').fill('Automation');
  await page.getByRole('button', { name: 'Log in' }).click();

  // await page.fill(".//input[@id='email']", "jayveeolchondra69@gmail.com");
  // await page.fill(".//input[@id='password']", "Automation");
  // await page.click(".//button[@id='submit-button']");

  /*
  //Home page
  await page.goto('https://my.lesmillsondemand.com/explore');
  await page.getByTitle('Account').click();
  //await page.getByRole('button', { name: 'JO' }).click();
  await page.getByRole('menuitem', { name: 'Log Out' }).click();
  await page.goto('https://my.lesmillsondemand.com/login/?redirect_to=%2Fexplore%2F');
 /* await page.getByLabel('Email *').click();
  await page.getByLabel('Email *').fill('jayveeolchondra69@gmail.com');
  await page.getByLabel('Email *').press('Tab');
  await page.getByLabel('Password *').fill('Automation');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('https://my.lesmillsondemand.com/explore');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Search workouts').click();
  await page.getByPlaceholder('Search workouts').fill('body combat');
  await page.locator('.play--icon > svg').first().click();
  await page.frameLocator('iframe[title="Vimeo Video"]').getByRole('button', { name: 'Play' }).click();
  await page.getByRole('button', { name: 'BACK' }).click();
*/

await page.waitForTimeout(3000);

});

test('Logout', async ({ page }) => {
  //Home page
  await page.goto('https://my.lesmillsondemand.com/explore');
  await page.getByTitle('Account').click();
  //await page.getByRole('button', { name: 'JO' }).click();
  await page.getByRole('menuitem', { name: 'Log Out' }).click();
  await expect(page).toHaveURL('');
});