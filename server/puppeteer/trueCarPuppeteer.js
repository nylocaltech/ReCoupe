const puppeteer = require('puppeteer');
const fs = require('fs');
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

  await page.goto(`https://www.truecar.com/used-cars-for-sale/listings/body-suv/location-new-york-ny/?sort[]=best_deal_desc_script`)


  let Alldata = [];

  //price
  let priceData = await page.$$eval(".heading-3.margin-y-1.font-weight-bold", (data) => 
  data.map((singleData) => parseInt(singleData.textContent.slice(1).split(',').join(''))
  ))
  console.log(priceData.length, 'price length')

  //image
  const imageData = await page.$$eval(".img-container.img-container-block", (data) => 
  data.map((singleData) => singleData.querySelector('img').src)
  )
  let correctImage = []
  if(imageData.length > 50){
    for(let i = 0; i < imageData.length; i += 5){
      correctImage.push(imageData[i]);
    }
  }
  console.log(correctImage.length, 'imageData length');

  //mileage
  let mileageData = await page.$$eval(".font-size-1.text-truncate", (data) => 
    data.map((singleData) => singleData.textContent)
  )
  let mileage = [];
  for(let i = 2; i < mileageData.length; i += 4){
    let removeSpace = mileageData[i].split(' ');
    let removeCommaAndJoin = parseInt(removeSpace[0].split(',').join(''));
    mileage.push(removeCommaAndJoin);
  }
  console.log(mileage.length, 'mileage length')

  //year
  const yearData = await page.$$eval(".vehicle-card-year.font-size-1", (data) => 
    data.map((singleData) => parseInt(singleData.textContent))
  )
  console.log(yearData.length, 'year length')

  //made and model
  const makeData = await page.$$eval(".vehicle-header-make-model.text-truncate", (data) => 
    data.map((singleData) => singleData.textContent)
  )
  const makeD = [], modelD = [];
  makeData.forEach(element => {
    let makeAndModel = element.split(' ');
    makeD.push(makeAndModel[0]);
    modelD.push(makeAndModel[1]);
  })
  console.log(makeD.length, 'make length');
  console.log(modelD.length, 'model length');

  //url
  const urlData = await page.$$eval(".linkable.card.card-shadow.vehicle-card._1qd1muk"
  , (data) => 
  data.map((singleData) => singleData.querySelector('a').href)
  )
  console.log(urlData.length, 'url length');

  //zip
  console.log(11228, 'zip');

  //date
  const date = new Date();
  const actualDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  console.log(actualDate, 'date')

  for(let i = 0; i < priceData.length; i++){
    let data = {
      price: priceData[i],
      image: correctImage[i],
      mileage: mileage[i],
      year: yearData[i],
      make: makeD[i],
      model: modelD[i],
      url: urlData[i],
      zip: 11228,
      date: actualDate,
      dealer: 'TrueCars.com',
      vehicletype: 'SUV'
    }
    Alldata.push(data)
  }
  console.log(Alldata)
  fs.writeFile('SUV_data.txt', JSON.stringify(Alldata, null, 2), (err) => {
    console.log(err);
  });
  await browser.close()
}

start();