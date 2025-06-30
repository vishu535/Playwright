// @ts-check
const { defineConfig, devices } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  timeout: 60*1000,
  expect: {
    timeout: 15000
  },
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    browserName: 'chromium',
    
     // ..devices['Desktop Chromium'],
   // launchOptions: { args: ['--deny-permission-prompts'] },
   permissions: ['geolocation'],
    headless: false
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
   // trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  
});

