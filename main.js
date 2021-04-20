

function timedDataExtractor() {
  const puppeteer = require('puppeteer');

  async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);


    //
    // const [el] = await page.$x('//*[@id="mw-content-text"]/div[1]/table[1]/tbody/tr[2]/td/div/div[2]/div[1]/a/img');
    // const src = await el.getProperty('src');
    // const srcTxt = await src.jsonValue();
    //
    const [el2] = await page.$x('//*[@id="maincounter-wrap"]/div/span');
    const txt = await el2.getProperty('textContent');
    const rawTxt = await txt.jsonValue();
    //
    console.log({rawTxt});
    //
    // document.getElementById('total-cases').innerHTML = "India's Total Cases: " + rawTxt;
    browser.close();


  }

  scrapeProduct('https://www.worldometers.info/coronavirus/country/india/')
}

setInterval(timedDataExtractor, 10000);

// 3600000
