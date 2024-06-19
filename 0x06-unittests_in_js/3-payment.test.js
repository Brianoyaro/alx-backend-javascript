const chai = require("chai");
const expect = chai.expect;
// import sinon
const sinon = require("sinon");
const sendPaymentRequestToApi = require('./3-payment.js');
const utils = require("./utils.js");


describe("sendPaymentRequestToApi", function() {
    describe("tests sendPaymentRequestToApi", function() {
      it("tests sendPaymentRequestToApi", function() {
        sinon.spy(sendPaymentRequestToApi);
        sendPaymentRequestToApi(100,20);
        expect(utils.calculateNumber.calledOnce).to.be.true;
        // expect(sendPaymentRequestToApi(100, 20)).to.equal(utils.sendPaymentRequestToApi('SUM', 100, 20));
      });
    });
  });
