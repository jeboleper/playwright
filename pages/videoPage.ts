import { Page } from "@playwright/test"

export default class VideoPage {

    constructor(public page: Page){

    }
    async gotoVideoPage(){
        await this.page.locator('#header')
            .getByRole('button', { name: 'sign in' }).click();
    }
}

