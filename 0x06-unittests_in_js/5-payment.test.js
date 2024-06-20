const expect = require('chai').expect
const sendPaymentRequestToAPI = require('./5-payment.js')
const sinon = require('sinon')

describe('describe message', function() {
    let mySpy;
    beforeEach(function() {
        mySpy = sinon.spy(sendPaymentRequestToAPI);
    })
    afterEach(function() {
        mySpy.restore();
    })
    it('sending 100 and 20, expects 120', function() {
      sendPaymentTequestToAPI(100, 20);
      expect(mySpy.calledOnce).to.be.true;
    });
    it('sending 10 and 10, expects 20', function() {
      sendPaymentTequestToAPI(10, 10);
      expect(mySpy.calledOnce).to.be.true;
    });
});
