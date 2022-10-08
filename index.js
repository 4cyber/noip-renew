const puppeteer = require("puppeteer");

function timeout(ms) {  //timeout functions
    return new Promise(resolve => setTimeout(resolve, ms));
  }

var user = "";  //your noip email
var pass = "";  //your noip password

(async () => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    console.log("Opening login page");
    await page.goto("https://www.noip.com/it-IT/login");
    await page.type('#username', user);
    await page.type('#password', pass);
    await page.click('#clogs-captcha-button');
    console.log("Login...");
    await page.waitForNavigation();
    await timeout(3000);    //waiting 3 second to check if modals appears
    console.log("Checking if modals appears");
    await page.evaluate( async () => {
        $.each( $('.modal'), async function() {
            if ( $(this).css('display') != "none" ) {
                await $(this).find('button[data-cy="cancel"]').click();
            }
        } )
    });
    console.log("Opening domains page");
    await page.goto('https://my.noip.com/dynamic-dns');
    await timeout(4000);
    //Searching for btn success, the renawable domains
    const buttons = await page.$$("table.table .btn-success");
    if ( buttons.length > 0 ) {
        for (let btn of buttons) {
            await btn.click();
        }
        console.log('All domain renewed');
    } else {
        console.log("No domain to renew");
    }
    browser.close();
})();
