exports.config = {
  framework: 'jasmine',
  specs: ['todo-spec.js'],
  multiCapabilities:[{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]
}