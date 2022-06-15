const carsDotComScraper = require('../server/scrapers/carsDotComScraper.js');

// We assume that the return value of carsDotComScraper will be an array with a length greater than 0.

describe('carsDotComScraper', () => {
  // const data = async carsDotComScraper("toyota", "camry", '2015', '10029');
  let data;

  // we expect this function to return an array
  it('returns an array', async () => {
    data = await carsDotComScraper("toyota", "camry", '2015', '10029');
    expect(Array.isArray(data)).toBeTruthy();
  })

  // we expect length of array to be greater than 0
  it('returns an array with length greater than 0', async () => {
    data = await carsDotComScraper("toyota", "camry", '2015', '10029');
    expect(data.length).toBeGreaterThan(0);
  })

  it('each object in the array should have the price, image, mileage, year, make, model, url, zip, date', async () => {
    data = await carsDotComScraper("toyota", "camry", '2015', '10029');
    data.forEach((element) => {
      expect(element.price).toBeGreaterThan(0);
      expect(typeof element.image).toBe('string');
      expect(element.mileage).toBeGreaterThanOrEqual(0);
      expect(element.year).toBeGreaterThan(0);
      expect(typeof element.make).toBe('string');
      expect(typeof element.model).toBe('string');
      expect(typeof element.url).toBe('string');
      expect(element.zip).toBeGreaterThan(0);
      expect(typeof element.date).toBe('string');

    })
  })
});

