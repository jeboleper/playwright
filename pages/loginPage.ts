import { Page } from "@playwright/test"

export default class LoginPage {

    constructor(public page: Page){

    }
    async gotoLoginPage(){
        await this.page.goto('https://try.lesmillsondemand.com/');
        await this.page.locator('#header').getByRole('button', { name: 'sign in' }).click();
        await this.page.waitForURL('https://my.lesmillsondemand.com/login/');
    }

    async enterLoginEmail(emailaddress: string){
        await this.page.getByLabel("Email *")
            .fill('jayveeolchondra69@gmail.com');
    }
    async enterLoginPassword(password: string){
        await this.page.getByLabel("Password *")
            .fill('Automation');
    }
    async clickLoginButton(){
        await this.page.getByRole('button', {name: 'Log in'})
            .click();
        // await Promise.all([
        //     this.page.waitForLoadState("networkidle")
        // ]);
    }

    async login(email: string, password: string){
        await this.gotoLoginPage();
        await this.enterLoginEmail(email);
        await this.enterLoginPassword(password);
        await this.clickLoginButton();
        await this.page.waitForURL('https://my.lesmillsondemand.com/explore');
    }
}

