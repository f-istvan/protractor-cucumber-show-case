exports.config = {

  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  baseURL: 'http://localhost:8080/',

  specs: [
    'features/*.feature'
  ],

  cucumberOpts: {
    require: 'step_definitions/step_definitions.js',
    format: 'pretty'
  }

};