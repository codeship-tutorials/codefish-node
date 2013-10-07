var Browser = require("zombie");
var app = require("../app");
var browser = new Browser();;
app.listen(3000, '127.0.0.1');

describe("The frontpage", function () {
  it("should declare that I've entered the Codeship", function () {
    browser.visit("http://localhost:3000/", function () {
      expect(browser.text("h1")).toEqual("I've entered the Codeship");
    });
  });

  it("should lead to the Codeship", function () {
    browser.visit("http://localhost:3000/", function () {
      expect(browser.query("a[href='https://www.codeship.io']").text()).toEqual("codeship.io");
    });
  });
});
