const assert = require('chai').assert;
const App = require('../Functions');

describe('Contains Test cases for Function file', () => {
  
  it('Passing 3 and 5 shud give 8',()=>
{
     var actual  = App.Add(10,20);
     assert.equal(actual,30);

} )

it('Passing 3 and 5 shud give -2',()=>
{
     var actual  = App.Subtract(3,5);
     assert.equal(actual,-2);

} )
it('Passing 3 and 5 shud give 15',()=>
{
     var actual  = App.Product(3,5);
     assert.equal(actual,15);

} )

})
