var Browser = require("zombie");
var app = require("../app");
var browser = new Browser();;

describe("The frontpage", function () {
  var server;

  beforeEach(function () {
    var listening = false;
    var loaded = false;
    runs(function() {
      server = app.listen(3000, '127.0.0.1', function () { listening = true });
    });
    waitsFor(function() { return listening }, "Couldn't start server.", 500);
    runs(function() {
      browser.visit("http://localhost:3000/").then(function () { loaded = true });
    });
    waitsFor(function() { return loaded }, "Couldn't load page.", 500);
  });

  afterEach(function () { server.close() });

  it("should declare that I've entered the Codeship", function () {
    expect(browser.text("h1")).toEqual("I've entered the Codeship!");
  });

  it("should lead to the Codeship", function () {
    expect(browser.text("a[href='https://www.codeship.io']")).toEqual("codeship.io");
  });
});
