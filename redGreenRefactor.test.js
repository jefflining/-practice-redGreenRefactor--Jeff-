const hello = require('../hello.js');

describe("My name is Jeff", function() {

   test("check to see if My name is Jeff is the input that 4 is the output",
function() {
       expect(countVowels("My name is Jeff")).toBe(4);
   });

//    test("should return a general greeting when name is not specified",
// function() {
//        expect(hello()).toBe("Hello, World!");
//    });

 });