const {Builder, By, Key, util, Actions} = require("selenium-webdriver");
const ks = require("node-key-sender");

async function clickMenuItem(driver, itemName) {
    let nodes = await driver.findElements(By.className("MenuNodeTitle"));
    nodes.forEach(async node => {
        let text = await node.getText();
        if (text === itemName) {
            await node.click();
        }
    });
}

async function example() {
    // Wait for the browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    // To fetch https://www.google.com/ from the browser
    await driver.get("https://www.plexonline.com/modules/systemadministration/login/index.aspx");

    // To send a search query by passing the value in searchString
    await driver.findElement(By.name("txtUserID")).sendKeys("w.Andre.Le");
    await driver.findElement(By.name("txtPassword")).sendKeys("Ry?s_o_3CS");
    await driver.findElement(By.name("txtCompanyCode")).sendKeys("wanco", Key.RETURN);

    let windows = await driver.getAllWindowHandles();
    driver.switchTo().window(windows[1]);

    let nodes = await driver.findElements(By.className("MenuNodeTitle"));
    nodes.forEach(async node => {
        let text = await node.getText();
        if (text === "Office Menu") {
            await node.click();
        }
    });

    // await driver.quit();
}

example();