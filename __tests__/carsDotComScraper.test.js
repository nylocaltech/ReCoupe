const carsDotComScraper = require('../server/scrapers/carsDotComScraper.js');

// We assume that the return value of carsDotComScraper will be an array with a length greater than 0.

describe('carsDotComScraper', () => {
  // const data = async carsDotComScraper("toyota", "camry", '2015', '10029');
  let data;

  // we expect this function to return an array
  it('returns an array', () => {
    data = async carsDotComScraper("toyota", "camry", '2015', '10029');
    expect(await Array.isArray(data)).toBeTruthy();
  })

  // we expect length of array to be greater than 0
  it('returns an array with length greater than 0', () => {
    data = async carsDotComScraper("toyota", "camry", '2015', '10029');
    expect(await data.length).toBeGreaterThan(0);
  })
});