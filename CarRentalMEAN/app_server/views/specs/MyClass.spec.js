let MyClass = require("../src/MyClass.js");
let MyObj = new MyClass();
var chai = require('chai');
var expect = chai.expect;

 describe("Test suit", function() {
    it("Test the add method", function() {
    expect(MyObj.add(1,2)).to.be.equal(3);
    });
});

 describe("Test suit", function() {
    it("Test the validation method", function() {
    expect(MyObj.validation("Bob")).to.be.equal(true);
    });
});