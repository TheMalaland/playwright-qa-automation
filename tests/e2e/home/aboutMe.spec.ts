import { test, expect } from '@playwright/test';
import aboutMe from '../../../page-objects/pages/aboutMe';

test.describe('About Me Page Tests', () => {
    let aboutMePage : aboutMe;

    test.beforeEach(async ({ page }) => {
        aboutMePage = new aboutMe(page);
        await aboutMePage.navigate();
    }
    );

    test('the url should be correct', async () => { 
        const currentURL = await aboutMePage.page.url(); // Agrega 'await' aquí
        expect(currentURL).toBe(aboutMePage.pageURL);
    });
    test('the title should be correct', async () => {
        const titleText = await aboutMePage.title.innerText();
        expect(titleText).toBe('About Me');
    });

    test('the description should be correct', async () => {
        const descriptionText = await aboutMePage.description.innerText();
        expect(descriptionText).toBe("I'm a QA automation engineer with experience in web and mobile testing, ensuring high-quality releases for iOS and Android. I’ve contributed to large-scale launches, building robust automation frameworks with Selenium and Playwright. With a strong eye for detail, a commitment to excellence, and a solid work ethic, I thrive in fast-paced environments where quality and efficiency matter most.");
    });

    test('the resume button should be visible', async () => {
        const isVisible = await aboutMePage.isResumeButtonVisible();
        expect(isVisible).toBe(true);
    }
    );

    test('the resume button text should be correct', async () => {
        const buttonText = await aboutMePage.getResumeButtonText();
        expect(buttonText).toBe('Resume');
    });

    test('the resume button URL should be correct', async () => {
        const buttonURL = await aboutMePage.getResumeButtonURL();
        expect(buttonURL).toBe('https://drive.google.com/file/d/11rh1LwYeRUOiN9ytzvPxOUxabYCefZtE/view?usp=drive_link');
    });

    test('the resume button should redirect to google login', async () => {
        await aboutMePage.clickResumeButton(); // Click the resume button
        const [newPage] = await Promise.all([
            aboutMePage.page.waitForEvent('popup'), // Wait for the new page to open
        ]);
        const url = await newPage.url(); // Get the URL of the new page
        expect(url).toContain('https://accounts.google.com/');
    }
    );
    
})