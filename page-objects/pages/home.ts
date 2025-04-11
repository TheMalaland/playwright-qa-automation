import { Page, Locator } from '@playwright/test';

class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly header: Locator;
  readonly footer: Locator; 
  readonly mainContent: Locator;
  readonly aboutMe: Locator;
  readonly experience: Locator;
  readonly projects: Locator;
  readonly porfolio: Locator;
  readonly skills: Locator;
  readonly contactMe: Locator;
  readonly navigationBar: Locator;
  readonly navigationBarItems: Locator; // Array de locators para los elementos de la barra de navegación


  constructor(page: Page) {
    this.page = page;
    this.logo = this.page.locator('.navbar-brand.navbar-brand'); // Selector del logo de la página
    this.header = this.page.locator('nav.px-3.fixed-top.navbar-transparent.navbar.navbar-expand-lg.navbar-light'); // Selector del header
    this.footer = this.page.locator('footer.mt-auto.py-5.text-center'); // Selector del footer
    this.mainContent = this.page.locator('div.container.py-5', { hasText: 'TheMalaland' }); // Selector más específico para el contenido principal
    this.aboutMe = this.page.locator('h2.display-4.mb-5.text-center', { hasText: 'About Me' }); // Selector para "About Me"
    this.experience = this.page.locator('h2.display-4.mb-5.text-center', { hasText: 'Experiences' }); // Selector para "Experience"
    this.projects = this.page.getByRole('heading', { name: 'Recent Projects', exact: true }); // Selector más preciso para "Projects"
    this.porfolio = this.page.locator('h2.display-4.pb-5.text-center', { hasText: 'Projects' }).nth(0); // Selector para "Portfolio"
    this.skills = this.page.locator('h2.display-4.pb-5.text-center', { hasText: 'Skills' }); // Selector para "Skills"
    this.contactMe = this.page.locator('h2.display-4.pb-3.text-center', { hasText: 'Contact Me' }); // Selector para "Contact Me"
    this.navigationBar = this.page.locator("div.navbar-collapse.collapse"); // Selector del botón de la barra de navegación
    this.navigationBarItems = this.page.locator('div.navbar-nav a.nav-link'); // Enlaces de la barra de navegación
  }

  async navigate(): Promise<void> {
    // Navega a la página principal usando el baseURL configurado
    await this.page.goto('https://themalaland.github.io/');
  }

  async isLogoVisible(): Promise<boolean> {
    return await this.logo.isVisible();
  }

  async getlogoText(): Promise<string> {
    return await this.logo.innerText();
  }

  async isMainContentVisible(): Promise<boolean> {
    return await this.mainContent.isVisible();
  }

  async isHeaderVisible(): Promise<boolean> {
    return await this.header.isVisible();
  }

  async isFooterVisible(): Promise<boolean> {
    return await this.footer.isVisible();
  }


  async isAboutMeVisible(): Promise<boolean> {
    return await this.aboutMe.isVisible();
  }

  async isExperienceVisible(): Promise<boolean> { 
    return await this.experience.isVisible();
  }

  async isProjectsVisible(): Promise<boolean> {
    return await this.projects.isVisible();
  }

  async isPortfolioVisible(): Promise<boolean> {
    return await this.porfolio.isVisible();
  }

  async isSkillsVisible(): Promise<boolean> {
    return await this.skills.isVisible();
  }

  async isContactMeVisible(): Promise<boolean> {
    return await this.contactMe.isVisible();
  }

  async isNavigationBarVisible(): Promise<boolean> {
    return await this.navigationBar.isVisible();
  }

  async isNavigationBarIconVisible(): Promise<boolean> {
    return this.navigationBar.isVisible()
  }


  async clickNavigationBarItem(index: number): Promise<void> {
    await this.navigationBarItems.nth(index).click();

  }

  async getNavigationBarItemText(index: number): Promise<string> {
    return await this.navigationBarItems.nth(index).innerText();
  }
}

export default HomePage;