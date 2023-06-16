import { Page } from "@playwright/test"

export default class LandingPage {

    constructor(public page: Page){

    }
    async gotoLandingPage(){
        await this.page.goto(``);
    }
}

