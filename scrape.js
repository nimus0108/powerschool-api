var Nightmare = require('nightmare');

var exports = module.exports = {};

var url = 'https://ps01.bergen.org/public/#sign-in-content';

var nightmare = Nightmare({ show: false })
    .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")

var final = 1;

exports.login = function (username, password) {
  var result = nightmare
    .goto(url)
    .type('input[type="text"]', username)
    .type('input[type="password"]', password)
    .click('#btn-enter')
    .wait('#btn-gradesAttendance')
    .goto('https://ps01.bergen.org/guardian/home.html')
    .evaluate(function() {
      var grades=[];
      return grades;
    });

    return result;
};