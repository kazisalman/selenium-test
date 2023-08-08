// Import the necessary modules from the selenium-webdriver package
const { Builder, By, Key, until } = require('selenium-webdriver');

// Create a new instance of the WebDriver
const driver = new Builder().forBrowser('chrome').build();

// Define the URL you want to open
const url = 'https://trusthub.in/login';

// Define an async function to interact with the webpage
async function getTitle() {
  try {
    // Open the specified URL
    await driver.get(url);

    // Get the title of the webpage
    const title = await driver.getTitle();
    console.log("............",await driver)
    console.log('Webpage Title:', title);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the browser
    await driver.quit();
  }
}

// Call the async function to get the title
getTitle();
