const { defineConfig, devices } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'line',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    }
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run start-prod',
    url: 'http://localhost:5000',
    reuseExistingServer: !process.env.CI,
    timeout: 3 * 1000,
  },
  use: {
    baseURL: 'http://localhost:5000',
    trace: 'on-first-retry'
  }
})

