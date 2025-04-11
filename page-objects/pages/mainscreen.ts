import { Locator, Page} from "@playwright/test";

class MainScreen {
    readonly page: Page;
    readonly title: Locator;
    readonly personal_description: Locator;
    readonly github_icon: Locator;
    readonly linkedin_icon: Locator;
    readonly instagram_icon: Locator;
    readonly moreaboutme: Locator;
    readonly logo: Locator;
    readonly githubURL : Locator;
    readonly linkedinURL: Locator;
    readonly instagramURL: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = this.page.locator('h1.display-1', { hasText: 'TheMalaland' }); // Selector del título de la página
        this.personal_description = this.page.locator('.lead.typist', { hasText: 'Crafting quality software with precise testing and relentless attention to detail.' }); // Selector de la descripción personal
        this.logo = this.page.locator('.navbar-brand.navbar-brand'); // Selector del logo de la página

        // Selectores actualizados para los íconos de redes sociales
        this.github_icon = this.page.locator('a[aria-label="My github"] i.fab.fa-github.socialicons'); // Selector del icono de GitHub
        this.linkedin_icon = this.page.locator('a[aria-label="My linkedin"] i.fab.fa-linkedin.socialicons'); // Selector del icono de LinkedIn
        this.instagram_icon = this.page.locator('a[aria-label="My instagram"] i.fab.fa-instagram.socialicons'); // Selector del icono de Instagram
   
        //Selectores para los enlaces de las redes sociales
        this.githubURL = this.page.locator('a[aria-label="My github"]'); // Selector del enlace de GitHub
        this.linkedinURL = this.page.locator('a[aria-label="My linkedin"]'); // Selector del enlace de LinkedIn
        this.instagramURL = this.page.locator('a[aria-label="My instagram"]'); // Selector del enlace de Instagram
   
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
        const personalDescription = this.page.locator('.lead.typist'); // Selector del elemento
        await personalDescription.waitFor({ state: 'visible' }); // Espera a que el elemento sea visible

        // Espera hasta que el texto completo esté disponible
        const expectedText = 'Crafting quality software with precise testing and relentless attention to detail.';
        await this.page.waitForFunction(
          (element, expected) => element.textContent === expected,
          await personalDescription.elementHandle(), // Obtiene el elemento del DOM
          expectedText // Texto esperado
        );

        return await personalDescription.innerText();
      }

      async isgithubIconVisible(): Promise<boolean> {
        return await this.github_icon.isVisible();
      }

      async islinkedinIconVisible(): Promise<boolean> {
        return await this.linkedin_icon.isVisible();
      }

      async isinstagramIconVisible(): Promise<boolean> {
        return await this.instagram_icon.isVisible();
      }

      async clickGithubIcon(): Promise<void> {
        await this.github_icon.click();
      }
      
      async clickLinkedinIcon(): Promise<void> {
        await this.linkedin_icon.click();
      }

      async clickInstagramIcon(): Promise<void> {
        await this.instagram_icon.click();
      }


}
export default MainScreen;