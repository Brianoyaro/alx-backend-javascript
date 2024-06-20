const chai = require("chai");
const expect = chai.expect;
// import sinon
const sinon = require("sinon");
const sendPaymentRequestToApi = require('./3-payment.js');
const utils = require('./utils.js');


describe('stub', function() {
  it('it message', function() {
    let mySpy = sinon.spy(console, 'log');
    let myStub = sinon.stub(utils, 'calculateNumber')
    myStub.returns(10)
    sendRequestToApi(100, 20);
    expect(myStub.calledWith('SUM', 100, 20)).to.be.true;
    // mySpy should verify console.log from sendPaymentToApi logs 'The total is 10
    expect(mySpy.calledWith('The total is: 10')).to.be.true;
    mySpy.restore()
    myStub.restore()
  });
});
