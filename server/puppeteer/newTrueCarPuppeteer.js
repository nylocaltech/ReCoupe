const puppeteer = require('puppeteer');
const fs = require('fs/promises');
const fsr = require('fs');
let scrollToBottom = require("scroll-to-bottomjs");

let photos    
// "price" integer NOT NULL,
// "image" varchar NOT NULL,
// "mileage" integer NOT NULL,
// "year" integer NOT NULL,
// "make" varchar NOT NULL,
// "model" varchar NOT NULL,
// "url" varchar NOT NULL,
// "zip" integer NOT NULL,
// "date" varchar NOT NULL,
// UNIQUE (url),


async function start(make, model, minYear, zip){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //await page.goto(`https://www.truecar.com/used-cars-for-sale/listings/${make}/${model}/year-${minYear}-max/location-${zip}/?sort[]=price_asc`)

  await page.goto(`https://www.truecar.com/used-cars-for-sale/listings/toyota/camry/year-2010-2012/location-11228/?sort[]=price_asc`)

  await page.waitForSelector('.page_inner');

    let urls = await page.$$eval("div.margin-bottom-2 > div:nth-child(1) > ul", links => {
    links = links.map(el => el.querySelector('li:nth-child(1) > div > div > a').href)
    return links;
  })
  console.log(urls);
  browser.close();
}

start();

//#mainContent > div > div.container.container-max-width-3.deprecated-padding-1 > div > div.col-lg-8.col-xl-9 > div > div.margin-bottom-2 > div:nth-child(1) > ul > li:nth-child(1) > div > div > a

//   let data = [];
//   let prices;

//   const allData = await page.$$eval("#mainContent > div > div.container.container-max-width-3.deprecated-padding-1 > div > div > div > div.margin-bottom-2 > div:nth-child(1) > ul", (data) => {
//     return data.map(singleData => {
//       return singleData.textContent
//     })
//   })

//   console.log(allData)
//   let allcarsdata = allData[0].split('Toyota')
//   await fs.writeFile('price.txt', allcarsdata);
//   await browser.close()
//   // for (let photo of photos) console.log(photo, '<--photo');
// }





module.exports = scraperObject; 