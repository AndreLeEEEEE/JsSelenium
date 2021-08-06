// The below isn't for ES modules
// const {By,Key,Builder} = require("selenium-webdriver");
const {Builder, By, Key, util} = require("selenium-webdriver");

// The below requires ES modules
// import {By} from "/node_modules/selenium-webdriver";
// import "/node_modules/chromedriver";
// import { SayName } from "./Dummy.js";

async function example() {
    let searchString = "Automation testing with Selenium and JavaScript";

    // Wait for the browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    // To fetch https://www.google.com/ from the browser
    await driver.get("https://www.google.com/");

    // To send a search query by passing the value in searchString
    await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);

    // Verify the page title and print it
    let title = await driver.getTitle();
    console.log(`Title is ${title}`);

    // It's always a safe practice to quit the browser after execution
    await driver.quit();
}