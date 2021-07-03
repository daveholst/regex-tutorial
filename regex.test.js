// const { expect } = require("@jest/globals");

// const phNum1 = '+61407505513'



const phRegEx = /^(0[4,5][0-9]{8})$|^(\+?61[0-9]{9})$/;


// console.log(phRegEx.test(phNum1));

describe('returns true with aus phone number', () => {
  it('is true on +61407505519', () => {
    const phNum = '+61407505519';
    expect(phRegEx.test(phNum)).toBe(true);
  });
  it('is true on 61407505519', () => {
    const phNum = '61407505519';
    expect(phRegEx.test(phNum)).toBe(true);
  });
  it('is true on 0407505519', () => {
    const phNum = '0407505519';
    expect(phRegEx.test(phNum)).toBe(true);
  });
  it('is true on 0407505519', () => {
    const phNum = '0407505519';
    expect(phRegEx.test(phNum)).toBe(true);
  });
})
describe('returns false with aus phone number', () => {
  it('is true on +6140750551', () => {
    const phNum = '+6140750551';
    console.log(phRegEx.test(phNum));
    expect(phRegEx.test(phNum)).toBe(false);
  });
  it('is false on 614075055199', () => {
    const phNum = '614075055199';
    console.log(phRegEx.test(phNum));
    expect(phRegEx.test(phNum)).toBe(false);
  });
  it('is false on 1407505519', () => {
    const phNum = '1407505519';
    expect(phRegEx.test(phNum)).toBe(false);
  });
  it('is false on 0707505519', () => {
    const phNum = '0707505519';
    console.log(phRegEx.test(phNum));
    expect(phRegEx.test(phNum)).toBe(false);
  });
})

