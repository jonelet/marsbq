var helper = require('./helper');

var view = module.exports = {
  init: function () {
        view.showCountDown();
    },

    showCountDown: function() {
      var diff = helper.dateDiff();

      document.querySelector('#years').innerHTML = diff.years;
      document.querySelector('#days').innerHTML = diff.months;
      document.querySelector('#hours').innerHTML = diff.days;
    }
};
