import { expect, Page } from "@playwright/test"

export default class HomePage {

    constructor(public page: Page){

    }
    async gotoHomePage(){
        await this.page.locator('#header')
            .getByRole('button', { name: 'sign in' }).click();
    }

    async logoutUser(){

        // await this.page.locator("(//button[@title='Account'])[1]").click();
        //await this.page.locator("//span[text()='Log Out']").click();
        await this.page.getByRole('button', { name: 'JO' }).click();
        await this.page.getByRole('menuitem', { name: 'Log Out' }).click();
        // await this.page.getByTitle('Account').click();
        // await this.page.getByRole('menuitem', { name: 'Log Out' }).click();
        await this.page.waitForURL('https://my.lesmillsondemand.com/login/?redirect_to=%2Fexplore%2F');
        //await this.page.goto('https://my.lesmillsondemand.com/login/?redirect_to=%2Fexplore%2F');

    }

    async validateHomePage(){

        const homePageLogo = this.page.locator("//a[@title='Les Mills Home']");
        const topMenuExplore = this.page.locator("//div[text()='Explore']");
        const topMenuLearn = this.page.locator("//div[text()='Learn']");
        const topMenuShop = this.page.locator("//div[text()='Shop']");
        const topMenuSearch = this.page.locator("(//button[@title='Search'])[1]");
        const topMenuAccount = this.page.getByRole('button', { name: 'JO' });

        expect(homePageLogo).toBeVisible;
        expect(topMenuExplore).toBeVisible;
        expect(topMenuLearn).toBeVisible;
        expect(topMenuShop).toBeVisible;
        expect(topMenuSearch).toBeVisible;
        expect(topMenuAccount).toBeVisible;
    }
}

