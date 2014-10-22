var should = require('chai').should();

describe('Encoder', function () {
  var encoder = require('../lib/encoder.js');

  it('has an encrypt function', function () {
    encoder.encrypt.should.be.a('function');
  });

  it('should encrypt and set url', function () {
    encoder.message = 'pirates';
    encoder.password = 'man';
    encoder.setUrl();

    encoder.url.should.include('file:///Users/philip/codefellows/rails/day22/SecretSauce/decode.html?');
  });
});

describe('Decoder', function () {
  var decoder = require ('../lib/decoder.js');

  it('has a decrypt function', function () {
    decoder.decrypt.should.be.a('function');
  });

  it('should decrypt and get message', function () {
    decoder.encryptedMessage = 'U2FsdGVkX18P6rGvCMbUuhEoloaH9oR1f0E+PKt1U4I=';
    decoder.password = 'man';
    decoder.getMessage();

    decoder.message.should.equal('pirates');
  });
});
