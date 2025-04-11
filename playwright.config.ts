const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    //baseURL: 'https://www.google.com', // Base URL para Google
    basseURL: 'https://themalaland.github.io/', // Base URL para el sitio de ejemplo
    actionTimeout: 0,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: false, // Modo no headless para ver el navegador
    launchOptions: {
      slowMo: 200, // Ralentiza las acciones para simular comportamiento humano
    }
  },
  projects: [
    {
      name: 'Google Chrome',
      use: { 
        browserName: 'chromium',
        channel: 'chrome', // Usa el canal de Google Chrome
        viewport: { width: 1280, height: 720 },
      },
    },
  ],
});