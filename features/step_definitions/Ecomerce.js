const { Given, When, Then } = require('@cucumber/cucumber')
const {expect} = require('@playwright/test');
const playwright = require('@playwright/test');
const { POManager } = require('../../PageObjects/POManager.spec');

Given('login to website with {string} and {string}', {timeout: 100*1000}, async function (string, string2) {

    
    await this.page.goto("https://rahulshettyacademy.com/client/");
    await this.page.waitForLoadState("domcontentloaded");
    const loginpage=this.pomanager.GetLoginPage();

    await loginpage.Login(string, string2);
  });


When('Add product {string} to cart', async function (string) {
    const dashboardpage=this.pomanager.GetDashboardPage()

    await dashboardpage.Search_Add_Products(string);
    await dashboardpage.Navigate_Cart();
  });


Then('Verify the product {string} is displayed in the cart', async function (string) {
    const cartpage = this.pomanager.GetCartPage();

    await cartpage.Check_Product_Visibility(string);
    await cartpage.Navigate_CheckoutPage();
    
  });


  Given('login to website2 with {string} and {string}', async function (string, string2) {
    const userName=this.page.locator("input[id='username']");
    const signIn=this.page.locator("#signInBtn");

    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userName.fill(string);
    await this.page.locator("input#password").fill(string2);
    signIn.click();
  });

  Then('validate error', function () {
    console.log("Errir");
  });
