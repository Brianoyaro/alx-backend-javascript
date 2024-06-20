const chai = require("chai");
const expect = chai.expect;
// import sinon
const sinon = require("sinon");
const sendPaymentRequestToApi = require('./3-payment.js');
const utils = require('./utils.js');


describe.skip('sendPAymentRequestToApi', function() {
  it('spies on the sendPaymentRequestToApi property from Utils module', function() {
    /*let mySpy = sinon.spy(sendRequestToApi);
    sendRequestToApi(100, 20);
    expect(mySpy.calledWith(100, 20)).to.be.true;
    expect(mySpy.calledOnce).to.be.true;*/
    let mySpy = sinon.spy(utils, calculateNumber);
    sendRequestToApi(100, 20);
    expect(mySpy.calledWith(100, 20)).to.be.true;
    expect(mySpy.calledOnce).to.be.true;
  });
});
describe('stub', function() {
  it('it message', function() {
    let mySpy = sinon.spy(sendPaymentToApi);
    let myStub = sinon.stub(utils, calculateNumber)
    myStub.returns(10)
    sendRequestToApi(100, 20);
    expect(myStub.calledWith('SUM', 100, 20)).to.be.true;

    // mySpy should verify console.log from sendPaymentToApi logs 'The total is 10
    /*expect(mySpy.returns('The total is 10')).to.be.true;*/
    mySpy.restore()
    myStub.restore()
  });
});
