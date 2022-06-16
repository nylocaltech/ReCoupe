const fs = require('fs');

let data = [
    {
      "price": 14990,
      "image": "https://listings-prod.tcimg.net/listings/175576/83/33/4T4BF1FK5CR183383/6QC7227TTGJAYGT3PCSFRQFVYQ-og-360.jpg",
      "mileage": 93318,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T4BF1FK5CR183383/2012-toyota-camry/?sponsoredVehiclePosition=0&zipcode=10007",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 15499,
      "image": "https://listings-prod.tcimg.net/listings/214232/98/12/4T4BF1FK9CR171298/MRXILWXLFAYHJ7524IEDZIEXXU-og-360.jpg",
      "mileage": 80005,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T4BF1FK9CR171298/2012-toyota-camry/?sponsoredVehiclePosition=1&zipcode=10013",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 7499,
      "image": "https://listings-prod.tcimg.net/listings/79992/19/22/4T1BF1FK9CU202219/O23PFQ6RCM4DHR5D64WVCZECS4-cr-360.jpg",
      "mileage": 208634,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BF1FK9CU202219/2012-toyota-camry/",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 10600,
      "image": "https://listings-prod.tcimg.net/listings/102836/57/85/4T1BF1FK8CU108557/GJMO2LIHWJT232SMQL6HVEXE7A-cr-360.jpg",
      "mileage": 131754,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BF1FK8CU108557/2012-toyota-camry/",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 10900,
      "image": "https://listings-prod.tcimg.net/listings/102836/11/65/4T1BF1FK6CU016511/DY44AZYENZDS3GA25VLDRPVZ2M-cr-360.jpg",
      "mileage": 122852,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BF1FK6CU016511/2012-toyota-camry/",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 10950,
      "image": "https://listings-prod.tcimg.net/listings/102836/67/74/4T4BF1FK3CR247467/Z7GIYDW3WSHUAUPQTA7G4NQAOE-cr-360.jpg",
      "mileage": 113813,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T4BF1FK3CR247467/2012-toyota-camry/",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 11695,
      "image": "https://listings-prod.tcimg.net/listings/67957/62/76/4T4BF1FK1CR177662/NBSEC34KL3MYWZMTZUEZMPFTRE-cr-360.jpg",
      "mileage": 129318,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T4BF1FK1CR177662/2012-toyota-camry/",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 11987,
      "image": "https://listings-prod.tcimg.net/listings/7003/05/12/4T1BK1FK9CU501205/NBFH2JEWWFMSQNS2V2ZZ6E34DQ-cr-360.jpg",
      "mileage": 131527,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BK1FK9CU501205/2012-toyota-camry/",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 13250,
      "image": "https://listings-prod.tcimg.net/listings/102836/38/18/4T1BF1FK5CU601838/FRJFHH7XTZLO6TFWDHQCC4WGXY-cr-360.jpg",
      "mileage": 81153,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BF1FK5CU601838/2012-toyota-camry/",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 14590,
      "image": "https://listings-prod.tcimg.net/listings/77763/54/13/4T1BF1FK1CU631354/CYLMIHCQA2TOCTG3IZ22NNKHIY-og-360.jpg",
      "mileage": 90842,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BF1FK1CU631354/2012-toyota-camry/?zipcode=10007",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 14818,
      "image": "https://listings-prod.tcimg.net/listings/18801/28/28/4T1BF1FKXCU022828/OSOODIZ24QUV5GVTO6DDYVURTE-cr-360.jpg",
      "mileage": 80093,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BF1FKXCU022828/2012-toyota-camry/",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 14990,
      "image": "https://listings-prod.tcimg.net/listings/77763/89/93/4T4BF1FK3CR259389/2OUT7YJV22TXQMXFCNKO4NYB7I-og-360.jpg",
      "mileage": 84948,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T4BF1FK3CR259389/2012-toyota-camry/?zipcode=10007",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 15590,
      "image": "https://listings-prod.tcimg.net/listings/77763/76/67/4T4BF1FK6CR186776/Z2GHTSOJP3WTURRBCXBKMP52CM-og-360.jpg",
      "mileage": 91195,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T4BF1FK6CR186776/2012-toyota-camry/?zipcode=10007",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 15590,
      "image": "https://listings-prod.tcimg.net/listings/175576/94/31/4T1BF1FK5CU193194/YDTUY5BQ6GURIDN6MWVVHJQO5Y-og-360.jpg",
      "mileage": 78211,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BF1FK5CU193194/2012-toyota-camry/?zipcode=10007",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 15590,
      "image": "https://listings-prod.tcimg.net/listings/77763/18/99/4T4BF1FK9CR179918/42IGX6N77NUC2EKSHVATVDPLGY-og-360.jpg",
      "mileage": 99943,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T4BF1FK9CR179918/2012-toyota-camry/?zipcode=10007",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 15990,
      "image": "https://listings-prod.tcimg.net/listings/77763/83/00/4T1BF1FK7CU160083/VX4LLFKTKJP2HBBA7GY3JKZFNE-og-360.jpg",
      "mileage": 98338,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BF1FK7CU160083/2012-toyota-camry/?zipcode=10007",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 15998,
      "image": "https://listings-prod.tcimg.net/listings/5573/96/92/4T1BF1FK4CU189296/QRQE6ZHYH7WBSDXNBUFNQR3XIQ-og-360.jpg",
      "mileage": 98445,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BF1FK4CU189296/2012-toyota-camry/?zipcode=19047",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 15998,
      "image": "https://listings-prod.tcimg.net/listings/285138/51/29/4T4BF1FK4CR222951/G4HKUSSQDR4PSLK5CXXS2Q5VZM-og-360.jpg",
      "mileage": 106941,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T4BF1FK4CR222951/2012-toyota-camry/?zipcode=19047",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 15998,
      "image": "https://listings-prod.tcimg.net/listings/5557/47/28/4T1BD1FK6CU022847/NHTY7KQDVBW3JEGIJEHJVYWOHE-og-360.jpg",
      "mileage": 99765,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BD1FK6CU022847/2012-toyota-camry/?zipcode=19047",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 15998,
      "image": "https://listings-prod.tcimg.net/listings/5598/96/36/4T4BF1FK5CR273696/IYC7NXT42PLO5ZFOHRH7G553U4-og-360.jpg",
      "mileage": 77602,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T4BF1FK5CR273696/2012-toyota-camry/?zipcode=19047",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 16990,
      "image": "https://listings-prod.tcimg.net/listings/77763/03/05/4T4BF1FK2CR260503/NHSIWNZ6MMCA2FCMRON72Z6PAY-og-360.jpg",
      "mileage": 103155,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T4BF1FK2CR260503/2012-toyota-camry/?zipcode=10007",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 16990,
      "image": "https://listings-prod.tcimg.net/listings/77763/23/20/4T4BF1FK9CR262023/TLZY3YDSZYHIYQHFV5EBBZAVYM-og-360.jpg",
      "mileage": 74329,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T4BF1FK9CR262023/2012-toyota-camry/?zipcode=10007",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 16990,
      "image": "https://listings-prod.tcimg.net/listings/175576/98/46/4T1BF1FK2CU524698/YL2TKWIXF4SQMKCG4SJLILABNQ-og-360.jpg",
      "mileage": 43013,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BF1FK2CU524698/2012-toyota-camry/?zipcode=10007",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 16990,
      "image": "https://listings-prod.tcimg.net/listings/77763/70/68/4T1BK1FK7CU016870/5XRAAQN2FA2B3YZLFGB7Z2VFFE-og-360.jpg",
      "mileage": 85078,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BK1FK7CU016870/2012-toyota-camry/?zipcode=10007",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 16998,
      "image": "https://listings-prod.tcimg.net/listings/5541/57/40/4T1BF1FK7CU114057/PZGUHI2YY2S37B25UCYHZR7HPA-og-360.jpg",
      "mileage": 96674,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BF1FK7CU114057/2012-toyota-camry/?zipcode=19047",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 16998,
      "image": "https://listings-prod.tcimg.net/listings/80533/01/84/4T4BF1FK4CR218401/JLBKAX4JQHXQHGZKLBZSHQ77IE-og-360.jpg",
      "mileage": 106350,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T4BF1FK4CR218401/2012-toyota-camry/?zipcode=19047",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 16998,
      "image": "https://listings-prod.tcimg.net/listings/297675/07/50/4T1BK1FK3CU505007/B5KP7A3R6KDEFQLKAVH5V4CV34-og-360.jpg",
      "mileage": 120206,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BK1FK3CU505007/2012-toyota-camry/?zipcode=19047",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 17990,
      "image": "https://listings-prod.tcimg.net/listings/77763/57/00/4T1BF1FKXCU130057/N4BQYKU6VEEHLKL5C74DIFIUE4-og-360.jpg",
      "mileage": 70638,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BF1FKXCU130057/2012-toyota-camry/?zipcode=10007",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 17998,
      "image": "https://listings-prod.tcimg.net/listings/83076/45/71/4T4BF1FK9CR187145/ZBEGISIR7AUG2R6IJ3TLSU3NXU-og-360.jpg",
      "mileage": 82837,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T4BF1FK9CR187145/2012-toyota-camry/?zipcode=19047",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 18590,
      "image": "https://listings-prod.tcimg.net/listings/77763/52/29/4T1BD1FK8CU012952/FBOOUSAFTRYH5ZGNAWHVRATB4Q-og-360.jpg",
      "mileage": 81029,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BD1FK8CU012952/2012-toyota-camry/?zipcode=10007",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 19998,
      "image": "https://listings-prod.tcimg.net/listings/146109/92/40/4T4BF1FK5CR264092/JQ2UMZU3HTO7EPT4SWAT3ITQXA-og-360.jpg",
      "mileage": 48366,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T4BF1FK5CR264092/2012-toyota-camry/?zipcode=19047",
      "zip": 11228,
      "date": "6/16/2022"
    },
    {
      "price": 19998,
      "image": "https://listings-prod.tcimg.net/listings/285136/34/07/4T1BK1FKXCU520734/LSZGMOE2ZHBETTY4ET67ZCUAOM-og-360.jpg",
      "mileage": 63948,
      "year": 2012,
      "make": "Toyota",
      "model": "Camry",
      "url": "https://www.truecar.com/used-cars-for-sale/listing/4T1BK1FKXCU520734/2012-toyota-camry/?zipcode=19047",
      "zip": 11228,
      "date": "6/16/2022"
    }
  ]

  for (let obj of data) {
    if (obj["url"].slice(12,16) === 'true') {
        obj["dealer"] = "TrueCar.com";
    }
  }

  console.log(data);

  fs.writeFile('data_with_dealer.txt', JSON.stringify(data, null, 2), (err) => {
    console.log(err);
  });
