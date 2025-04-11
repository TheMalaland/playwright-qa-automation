import { test, expect } from '@playwright/test';
import HomePage from '../../../page-objects/pages/home';
import MainScreen  from '../../../page-objects/pages/mainscreen';

test.describe('Homepage Tests', () => {
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

    test('the mainscreen personal description should be correct', async ({ page }) => {
        const mainscreen = new MainScreen(page);
        await mainscreen.navigate();

    
        // Verify that the personal description is visible
        const personalDescriptionText = await mainscreen.getPersonalDescriptionText();
        expect(personalDescriptionText).toBe('Crafting quality software with precise testing and relentless attention to detail.');
    }
    );

});