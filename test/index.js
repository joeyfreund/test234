var assert = require('chai').assert;

describe('My fancy new class', function() {

  describe('One set of features', function () {

    it('is an empty test', function(){

    });

    it('should verify that 1 equals 1', function(){
      assert.equal(1, 1);
    });
  });


  describe('Another set of features', function () {

    it('should fail', function(){
      assert.equal(2, 1);
    });

  });

});
