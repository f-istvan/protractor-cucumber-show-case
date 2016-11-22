module.exports = function() {

    this.Given(/^I go to "([^"]*)"$/, function (arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback(null, 'pending');
    });

    this.When(/^I add "([^"]*)" in the task field$/, function (arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback(null, 'pending');
    });

    this.When(/^I click the add button$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback(null, 'pending');
    });

    this.Then(/^I should see my new task in the list$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback(null, 'pending');
    });

}