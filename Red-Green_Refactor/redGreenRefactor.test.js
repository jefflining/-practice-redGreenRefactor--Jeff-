const countVowels = require('./redGreenRefactor.js');

describe("The countVowels function", function() {

   test("check to see if My name is Jeff is the input that 4 is the output",
function() {
       expect(countVowels("My name is Jeff")).toBe(4);
   });

   test("If input is undefined the output should be String is undefined",
function() {
       expect(countVowels()).toBe("String is undefined");
   });

   test("If input is an empty string output should be 0",
function() {
       expect(countVowels("")).toBe(0);
   });

   test("check to see if My name is Jeff is the input that 4 is the output",
function() {
       expect(countVowels("MY NAME IS JEFF")).toBe(4);
   });
 });