const value = 5.23;



console.log(Number.isFinite(1 / 0));
console.log(Number.isFinite(value));
console.log(Number.isInteger(value));
console.log(Number.isInteger(1 / 0));
console.log(Number.isInteger("Hello"));
console.log(Number.isNaN(value));
console.log(Number.isSafeInteger(2**54));
console.log(Number.parseFloat("0.12"));
console.log(Number.parseInt());
console.log(4.99999.toFixed(1));
console.log(value.toLocaleString("en-IN"));




