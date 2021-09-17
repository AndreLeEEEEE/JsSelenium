const {Builder, By, Key, util, Actions} = require("selenium-webdriver");
// Gets real finicky with promises, which is unfortunate because selenium is 95% promises
const ks = require("node-key-sender");

async function example() {
    // Wait for the browser to build and launch properly
    let driver = new Builder().forBrowser("chrome").build();

    // To fetch https://www.google.com/ from the browser
    await driver.get("https://www.plexonline.com/modules/systemadministration/login/index.aspx");

    // To send a search query by passing the value in searchString
    await driver.findElement(By.name("txtUserID")).sendKeys("w.Andre.Le");
    await driver.findElement(By.name("txtPassword")).sendKeys("Ry?s_o_3CS");
    await driver.findElement(By.name("txtCompanyCode")).sendKeys("wanco", Key.RETURN);

    let windows = await driver.getAllWindowHandles();
    // Apparently switchTo() doesn't return a value even though the docs
    // say it returns a targetLocator. Thus, it can't be used in
    // assignments or return statements.
    await driver.switchTo().window(windows[1]);
    return driver;
}

async function getMenuNodes(driver) {
    return driver.findElements(By.className("MenuNodeTitle"));
}

async function getElementText(webElement) {
    return webElement.getText();
}

async function clickOnElement(webElement) {
    webElement.click();
}

async function KeepGoing(driver, targetNode) {
    let nodes = await getMenuNodes(driver);
    for (let node of nodes) {
        let text = await getElementText(node);
        if (text === targetNode) {
            await clickOnElement(node);
        }
    }
    return driver;
}

example()
    .then(driver => KeepGoing(driver, "Office Menu"))
    .then(driver => KeepGoing(driver, "Production Menu"))
    .then(driver => KeepGoing(driver, "Production Setup Menu"))
    .then(driver => KeepGoing(driver, "Production History"))