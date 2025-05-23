import { test, expect } from '@playwright/test';
import HomePage from '../../../page-objects/pages/home';
import MainScreen  from '../../../page-objects/pages/mainscreen';

test.describe('Homepage Tests', () => {
    
    //open the 
    

    test('should display the homepage correctly', async ({ page }) => {
        const homePage = new HomePage(page);
         await homePage.navigate();
    });

    test('the page should have the correct title', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigate();
        const title = await page.title();
        expect(title).toBe('TheMalaland - QA');
    });

    test ('the mainscreen title should be correct', async ({ page }) => {
        const mainscreen = new MainScreen(page);
        await mainscreen.navigate();
        const logoText = await mainscreen.getTitleText();
        expect(logoText).toBe('TheMalaland');
    });
    /** 
    test('the mainscreen personal description should be correct', async ({ page }) => {
        const mainscreen = new MainScreen(page);
        await mainscreen.navigate();

        // Verificar que el texto de la descripción personal es correcto
        const personalDescriptionText = await mainscreen.getPersonalDescriptionText();
        expect(personalDescriptionText).toBe('Crafting quality software with precise testing and relentless attention to detail.');
    });
    */

    test('social media icons should be visible', async ({ page }) => {
        const mainscreen = new MainScreen(page);
        await mainscreen.navigate();

        // Verificar que los iconos de redes sociales son visibles
        expect(await mainscreen.isgithubIconVisible()).toBeTruthy();
        expect(await mainscreen.islinkedinIconVisible()).toBeTruthy();
        expect(await mainscreen.isinstagramIconVisible()).toBeTruthy();
    });

    test('should navigate to GitHub when the icon is clicked', async ({ page }) => {
        const mainscreen = new MainScreen(page);
        await mainscreen.navigate();

        expect(await mainscreen.isgithubIconVisible()).toBeTruthy();
        await mainscreen.clickGithubIcon();

    });

    test('the social media redirections should be correct (as described)', async ({ page }) => {
        const mainscreen = new MainScreen(page);
        await mainscreen.navigate();

        // Verificar que los enlaces de las redes sociales son correctos
        await mainscreen.validateGithubURL();
        await mainscreen.validateLinkedinURL();
        await mainscreen.validateInstagramURL();
    })

    test('the moreaboutMe button should be visible and clickable', async ({ page }) => {
        const mainscreen = new MainScreen(page);
        await mainscreen.navigate();

        // Verificar que el botón "More about me" es visible y se puede hacer clic
        expect(await mainscreen.moreAboutMeIsVisible()).toBeTruthy();
        await mainscreen.clickMoreaboutMebutton();
    })

    test('the moreaboutMe button should redirect correctly', async ({ page }) => {
        const mainscreen = new MainScreen(page);
        await mainscreen.navigate();

        // Verificar que el botón "More about me" redirige correctamente
        await mainscreen.validateMoreAboutMeNavigation();
    })


});