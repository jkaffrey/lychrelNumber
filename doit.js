'use strict';

module.exports = {

  reverse: function(num) {

    return (num.toString().split('').reverse().join(""));
  },

  addTogether: function(num) {

    return parseInt(this.reverse(num)) + num;
  },

  isPali: function(num) {

    return num.toString() === this.reverse(num);
  },

  makeLych: function(num) {

    while (!(this.isPali(num))) {

      num = this.addTogether(num);
    }

    return num;
  }
}
