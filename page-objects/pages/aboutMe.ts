import { Page, Locator } from '@playwright/test';

class aboutMe {
    readonly page: Page;
    readonly pageURL: string;
    readonly title: Locator;
    readonly description: Locator;  

    readonly resumeButton: Locator;
    readonly resumeButtonText: Locator;
    readonly resumeButtonURL: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageURL = 'https://themalaland.github.io/#aboutme'; // URL de la página "About Me"
        this.title = this.page.locator('h2.display-4.mb-5.text-center', {hasText:"About Me"}); // Selector del título "About Me"
        this.description = this.page.locator('.lead.text-justify');
        this.resumeButton = this.page.locator('a[aria-label="Resume/CV"]'); // Selector del botón "Resume"
        this.resumeButtonText = this.page.locator('a[aria-label="Resume/CV"]', {hasText:"Resume"}); // Selector del texto del botón "Resume"
        
    }

    async navigate(): Promise<void> {
        // Navega a la página "About Me"
        await this.page.goto(this.pageURL);
    }

    async getTitleText(): Promise<string> {
        return await this.title.innerText(); // Devuelve el texto del título
    }

    async getDescriptionText(): Promise<string> {
        return await this.description.innerText(); // Devuelve el texto de la descripción
    }

    async isResumeButtonVisible(): Promise<boolean> {
        return await this.resumeButton.isVisible(); // Verifica si el botón "Resume" es visible
    }

    async getResumeButtonText(): Promise<string> {
        return await this.resumeButtonText.innerText(); // Devuelve el texto del botón "Resume"
    }

    async getResumeButtonURL(): Promise<string> {
        const href = await this.resumeButton.getAttribute('href'); // Devuelve el enlace del botón "Resume"
        if (!href) {
            throw new Error('Resume button href attribute is null');
        }
        return href;
    }
    
    async clickResumeButton(): Promise<void> {
        await this.resumeButton.click(); // Hace clic en el botón "Resume"
    }

}


export default aboutMe 