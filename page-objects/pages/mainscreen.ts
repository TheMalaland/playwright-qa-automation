import { Locator, Page } from "@playwright/test";

class MainScreen {
    readonly page: Page;
    readonly title: Locator;
    readonly personal_description: Locator;
    readonly github: Locator;
    readonly linkedin: Locator;
    readonly instagran: Locator;
    readonly moreaboutme: Locator;
    readonly logo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = this.page.locator('h1.display-1', {hasText :'TheMalaland'}); // Selector del título de la página
        this.personal_description = this.page.locator('lead typist', {hasText :'Crafting quality software with precise testing and relentless attention to detail.'}); // Selector de la descripción personal
        this.logo = this.page.locator('.navbar-brand.navbar-brand'); // Selector del logo de la página

    }

    async navigate(): Promise<void> {
        // Navega a la página principal usando el baseURL configurado
        await this.page.goto('https://themalaland.github.io/');
      }

      async isLogoVisible(): Promise<boolean> {
        return await this.logo.isVisible();
      }
    
      async getTitleText(): Promise<string> {
        return await this.title.innerText();
      }

      async getPersonalDescriptionText(): Promise<string> {
        const personalDescription = this.page.locator("//div[@class='lead typist']"); // Reemplaza con el selector correcto
        await personalDescription.waitFor({ state: 'visible' }); // Espera a que el elemento sea visible
        return await personalDescription.innerText();
      }
}
export default MainScreen;