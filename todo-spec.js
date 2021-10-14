describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var gobutton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));

  beforeEach(function(){
    browser.get('http://juliemr.github.io/protractor-demo/');
  })

  it('should have a title', function(){
    expect(browser.getTitle()).toEqual('Super Calculator');
  });
  it('should add one and three', function(){
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(3);
    gobutton.click();
    expect(latestResult.getText()).toEqual('4');
  });
  it('should add four and five', function(){
    firstNumber.sendKeys(4);
    secondNumber.sendKeys(5);
    gobutton.click();
    expect(latestResult.getText()).toEqual('10');
  });
  it('should read the value from an input', function(){
    firstNumber.sendKeys(1);
    expect(firstNumber.getAttribute('value')).toEqual('1');
  })
  
  });