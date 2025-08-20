const simple_stinrg = "What is up ?";
const simple_stinrg2 = "I think Ruth's dog is cuter than your dog !";
const simple_stinrg3 = "   What is up ?   ";
const number = "456";


// Methods----------------------------------------------
console.log(simple_stinrg.length);
console.log(simple_stinrg.at(3));
console.log(simple_stinrg.includes("is"));
console.log(simple_stinrg.indexOf("is"));
console.log(simple_stinrg2.lastIndexOf("dog"));
console.log(simple_stinrg.startsWith("at",2));
console.log(simple_stinrg.endsWith("Wh",2));
console.log(simple_stinrg.slice(4, 10));
console.log(simple_stinrg2.replace(/dog/i, "how"));
console.log(simple_stinrg.split(" ", 3));
console.log(simple_stinrg3.trim());
console.log(simple_stinrg3.trimStart());
console.log(simple_stinrg3.trimEnd());
console.log(number.padStart(6,"123"));
console.log(number.padEnd(6,"789"));
console.log(simple_stinrg.split(" ", 2));
console.log("lap lap ".repeat(10));



