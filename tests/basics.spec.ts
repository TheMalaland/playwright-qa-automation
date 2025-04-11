import { test, expect } from '@playwright/test';
import HomePage from '../page-objects/pages/home';

test.describe('Basic Homepage Tests', () => {
  test('the homepage should be shown correctly', async ({ page }) => {
    const homePage = new HomePage(page);
    
    // Navegar a la página de inicio
    await homePage.navigate();

    // Verificar que el logo es visible
    const isLogoVisible = await homePage.isLogoVisible();
    expect(isLogoVisible).toBeTruthy();

    //verifies that all sections are visible
    const isHeaderVisible = await homePage.header.isVisible();
    expect(isHeaderVisible).toBeTruthy();

    const isFooterVisible = await homePage.footer.isVisible();
    expect(isFooterVisible).toBeTruthy();

    const isMainContentVisible = await homePage.mainContent.isVisible();
    expect(isMainContentVisible).toBeTruthy();

    const isAboutMeVisible = await homePage.aboutMe.isVisible();
    expect(isAboutMeVisible).toBeTruthy();


    const isExperienceVisible = await homePage.experience.isVisible();
    expect(isExperienceVisible).toBeTruthy();

    const isProjectsVisible = await homePage.projects.isVisible();
    expect(isProjectsVisible).toBeTruthy();

    const isPortfolioVisible = await homePage.porfolio.isVisible();
    expect(isPortfolioVisible).toBeTruthy();

    const isSkillsVisible = await homePage.skills.isVisible();
    expect(isSkillsVisible).toBeTruthy();

    const isContactMeVisible = await homePage.contactMe.isVisible();
    expect(isContactMeVisible).toBeTruthy();


  });
  
  test('the navigation bar should be shown correctly', async ({ page }) => {

    const homePage = new HomePage(page);
    
    // Navegar a la página de inicio
    await homePage.navigate();

    // Verificar que la barra de navegación es visible    
    const isNavigationBarVisible = await homePage.isNavigationBarVisible();
    expect(isNavigationBarVisible).toBeTruthy();

    await homePage.clickNavigationBarItem(0); // Click en el primer elemento de la barra de navegación
    await homePage.clickNavigationBarItem(1); // Click en el segundo elemento de la barra de navegación
    await homePage.clickNavigationBarItem(2); // Click en el primer elemento de la barra de navegación
    await homePage.clickNavigationBarItem(3); // Click en el tercer elemento de la barra de navegación

  } );

  test('the navigation bar content should be shown correctly', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.navigate();

    const expectedTexts = ['Projects', 'Resume', 'About', 'Skills'];
    expect (await homePage.navigationBarItems.count()).toBe(expectedTexts.length);
    for (let i = 0; i < expectedTexts.length; i++) {
      const text = await homePage.navigationBarItems.nth(i).textContent();
      expect(text).toBe(expectedTexts[i]);
    }
  });

  test('the logo should be shown correctly', async ({ page }) => {
    const homePage = new HomePage(page);
    
    // Navegar a la página de inicio
    await homePage.navigate();

    // Verificar que el logo es visible
    const isLogoVisible = await homePage.isLogoVisible();
    expect(isLogoVisible).toBeTruthy();

    // Verificar que el texto del logo es correcto
    const logoText = await homePage.getlogoText();
    expect(logoText).toBe('TheMalaland ✓');
  });



  


});