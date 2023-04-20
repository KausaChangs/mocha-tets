const chai = window.chai;
const expect = chai.expect;

describe("convertToCelcius", () => {
  it("Should convert to farenheit to celcius for all values in an array", () => {
    expect(convertToCelcius([23, 140, 212, 41])).to.deep.equal([
      -5, 60, 100, 5,
    ]);
  });
});
