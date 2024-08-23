const {After, Before, AfterStep, Status} = require('@cucumber/cucumber');
const { POManager } = require('../../PageObjects/POManager.spec');
const playwright = require('@playwright/test');
const path = require('path');


// Synchronous
Before(async function () {
  
    const browser = await playwright.chromium.launch({headless: false});
    const context = await browser.newContext();
    this.page = await context.newPage();

    this.pomanager= new POManager(this.page);
});

After(function () {
    // Assuming this.driver is a selenium webdriver
    console.log("ending")
  });

AfterStep(async function ({result}) {
    //stepName = this.currentTest.metadata().testName + ' - ' + this.currentTest.metadata().action;
    // This hook will be executed after all steps, and take a screenshot on step failure
    if (result.status === Status.FAILED) {
        //const screenshotPath = `screenshots/${stepName}.png`; // Add timestamp or other identifiers if needed
        await this.page.screenshot({ path: "ss1.png" });    }
  });