var Nightmare = require('nightmare');

var exports = module.exports = {};
var url = 'https://ps01.bergen.org/public/#sign-in-content';

var nightmare = Nightmare({ show: false })
    .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")

var final = 1;

exports.scrape = function (username, password) {
  var result = nightmare
    .goto(url)
    .type('input[type="text"]', username)
    .type('input[type="password"]', password)
    .click('#btn-enter')
    .wait('#btn-gradesAttendance')
    .goto('https://ps01.bergen.org/guardian/home.html')
    .evaluate(function() {
      var body = document.querySelectorAll("tr td[align=left]");
      var courses = [], mods = [], tri1 = [], tri2 = [], tri3 = [], grades = [];
      
      for (var i = 0; i < body.length; i++) {
        if (body[i].textContent.charAt(0) != "~") {
          courses.push(body[i].textContent);
          mods.push(body[i].previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
          tri1.push(body[i].nextElementSibling.textContent);
          tri2.push(body[i].nextElementSibling.nextElementSibling.textContent);
          tri3.push(body[i].nextElementSibling.nextElementSibling.nextElementSibling.textContent);
        }
      }
      
      grades.push(courses);
      grades.push(mods)
      grades.push(tri1);
      grades.push(tri2);
      grades.push(tri3);
      
      return grades;
    });

  return result;
};