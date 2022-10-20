const assert = require('chai').assert;
const App = require("../hello");

// A test file will  contains test cases  
// test cases are stored in a test suite  

// describe > Its a test suite
// it > a test case

describe('This is a test suite' , ()=>
{
  it('This is test case 1', ()=>
  {
    // assert is used to test
    //assert.equal()
    assert.equal('hello', 'hello');
  })

  it('Testing Hello function', () =>
  {
         var actual = App();
assert.equal(actual, "hello");
  })
})



