'use strict';

const test = require('../doit');
const expect = require('chai').expect;

describe('Reverse number', function() {
  it('Reveresed 123', function() {

    expect(test.reverse(321)).to.equal('123');
  });

  it('Reveresed 541', function() {

    expect(test.reverse(541)).to.equal('145');
  });

  it('Reveresed 890', function() {

    expect(test.reverse(890)).to.equal('098');
  });
});

describe('Adding number and reverse', function() {
  it('14 and 41', function() {

    expect(test.addTogether(14)).to.equal(55);
  });

  it('15 and 51', function() {

    expect(test.addTogether(15)).to.equal(66);
  });

  it('134 and 431', function() {

    expect(test.addTogether(134)).to.equal(565);
  });
});

describe('isPalindrome', function() {
  it('Num == 55', function() {

    expect(test.isPali(55)).to.equal(true);
  });

  it('Num == 44', function() {

    expect(test.isPali(44)).to.equal(true);
  });

  it('Num == 32', function() {

    expect(test.isPali(32)).to.equal(false);
  });

  it('Num == 1', function() {

    expect(test.isPali(1)).to.equal(true);
  });
});

describe('Is Lychrel Number', function() {
  it('Make 14 Lychrel', function() {

    expect(test.makeLych(14)).to.equal(55);
  });

  it('Make 67 Lychrel', function() {

    expect(test.makeLych(67)).to.equal(484);
  });
});
