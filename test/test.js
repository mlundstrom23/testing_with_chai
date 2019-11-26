// require testing modules
const mocha = require('mocha')
const expect = require('chai').expect
const { describe, it } = mocha

// require the module that we are putting to the test

// prove all the things
// behavior driven development "to.be, to.have, to.not" etc.
describe('My comprehension of the JS basics is solid', () => {

    // prove statements that support the "describe" 
    it('and this proves my awesomeness with JS', () => {
        expect('I am a string').to.be.a('string');
        expect({ I: 'am', An: 'object'}).to.be.an('object');
        expect(null).to.be.a('null');
        expect(undefined).to.be.an('undefined');
        expect([]).to.be.an('array').that.is.empty;
        expect([1, 2, 3, 4, 5]).to.be.an('array').that.includes(5);
        expect('0').to.not.be.an('array')
        expect({ model: 'Ford' }).to.have.a.property('model');
        expect({ make: 'tesla', model: 'cybertruck'}).to.include({make: 'tesla', model: 'cybertruck'});
    })
})
        