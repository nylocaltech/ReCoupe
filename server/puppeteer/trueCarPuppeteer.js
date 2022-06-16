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


  let data = [];
  let prices;

  const allData = await page.$$eval("#mainContent > div > div.container.container-max-width-3.deprecated-padding-1 > div > div > div > div.margin-bottom-2 > div:nth-child(1) > ul", (data) => {
    return data.map(singleData => {
      return singleData.textContent
    })
  })

  console.log(allData)
  // const allPrices = await page.$$eval(".heading-3.margin-y-1.font-weight-bold", (prices) => 
  //     prices.map((singlePrice) => singlePrice.textContent)
  // )
  // console.log(allPrices)
  // let allPrice = allPrices[0];

  // //split allcars data into an array
   let allcarsdata = allData[0].split('Toyota')
  // for(let i = 0; i < allcarsdata.length; i++){
  //   allcarsdata[i] = allcarsdata[i] + '\n';
  // }

  // console.log(allcarsdata)
  await fs.writeFile('price.txt', allcarsdata);


  //await page.screenshot({path: 'trueCar.png', fullPage: true})

  // const photos = await page.$$eval(".card-image.vehicle-card-image div img[src]", (imgs) => {
  //   console.log(imgs)
  //   return imgs.map(x => x.getAttribute('src') + '\n')
  // })

  // await page.setRequestInterception(true);

  // await page.evaluate(scrollToBottom);

// div.container.container-max-width-3.deprecated-padding-1 > div > div > div > div.margin-bottom-2 > div:nth-child(1) > ul > li:nth-child(1) > div > div

  // photos = await page.$$eval(".card-image.vehicle-card-image div img[src]", (imgs) => {
  //   console.log(imgs)
  //   const photosLinks = [];
  //   const carPhotos = {};
  //   imgs.map(x => {
  //     let src = x.getAttribute('src');
  //     let word = src.split('/')
  //     if(!carPhotos[word[4]]){
  //       carPhotos[word[4]] = src;
  //       photosLinks.push(src);
  //     }
  //   })
  //   return photosLinks; 
  // })


  // // function to check if new src link should be appended
  // for (let newPhoto of photos) {
  //   newPhoto = newPhoto + '\n';
  //   let shouldAddtoFile = true;

  //   //console.log(typeof fsr.readFileSync('img1.txt',{encoding:'utf8', flag:'r'}))
  //   fsr.readFile('img1.txt', 'utf8', function(err, data){
  //     // Display the file content
  //     let arr = data.split('\n')
  //     arr.forEach(async (oldData) => {
  //       console.log(oldData, '<--oldData');
  //       console.log(newPhoto, '<--newPhoto')
  //       console.log(oldData.localeCompare(newPhoto.split('\n')[0]) != 0)
  //     //only add when there is new data
  //     if(oldData === newPhoto.split('\n')[0]){
  //       shouldAddtoFile = false;
  //     }
  //   })
  //   if (shouldAddtoFile){
  //     fsr.appendFile('img1.txt', newPhoto, (err) => {
  //       //console.log(err);
  //     });
  //   }
  // });
    
  //   //if(fs.readFile())
  // }

  await browser.close()
  // for (let photo of photos) console.log(photo, '<--photo');
}

start();


  // let file = fsr.readFile('img1.txt', 'utf8', function(err, data){
  // // Display the file content
  //   console.log(data, 'data');
  // });
  // console.log(file)

// console.log(typeof fsr.readFileSync('img1.txt',{encoding:'utf8', flag:'r'}))
// let file = fsr.readFileSync('img1.txt',{encoding:'utf8', flag:'r'})
// let arr = file.split('\n')

//console.log(arr)

//#mainContent > div > div.container.container-max-width-3.deprecated-padding-1 > div > div.col-lg-8.col-xl-9 > div > div.margin-bottom-2 > div:nth-child(1) > ul > li:nth-child(1) > div > div > div.carousel.w-100.position-relative > div > div > ul > li:nth-child(1) > a > div > div > img
//card-image.vehicle-card-image > div > img
//#mainContent > div > div.container.container-max-width-3.deprecated-padding-1 > div > div.col-lg-8.col-xl-9 > div > div.margin-bottom-2 > div:nth-child(1) > ul > li:nth-child(28) > div > div > div.card-image.vehicle-card-image > div