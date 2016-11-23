var expect = require('chai').expect;

module.exports = function() {

  this.Given(/^I go to "([^"]*)"$/, function (url, next) {
    browser.get(url);
    next();
  });

  this.When(/^I add "([^"]*)" in the task field$/, function (text, next) {
    element(by.model('username')).sendKeys(text);
    next();
  });

  this.Then(/^I should see "([^"]*)"$/, function (text, next) {
    element(by.binding('username')).getText().then(function (textToAssert) {
      expect(textToAssert).to.equal(text);
    });
    next();
  });

}