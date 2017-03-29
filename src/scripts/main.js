var countdown = require('countdown');

var model = {
    init: function () {
        console.log('Model initialized');
    },

    currentDate: new Date(),
    eventDate: new Date(2056, 10, 05)
};

var helper = {

  dateDiff: function() {
    return countdown(model.currentDate, model.eventDate);
  }
};

var view = {
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

var app = {
    init: function () {
        model.init();
        view.init();
    }
};

app.init();
