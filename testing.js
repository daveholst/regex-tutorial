const phrase = "how to learn javascript";
const capitalStr = phrase.replace(/\b\w/g, c => c.toUpperCase());

console.log(capitalStr);

const phNum1 = '+61407505513'
const phRegEx = /^(0[4,5][0-9]{8})$|^(\+?61[0-9]{9})$/gm;

console.log(phRegEx.test(phNum1));
