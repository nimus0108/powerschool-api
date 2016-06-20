var exports = module.exports = {};

exports.scrape = function (body) {
	var courses = [], mods = [], tri1 = [], tri2 = [], tri3 = [], complete = [];
		for (var i = 0; i < body.length; i++) {
			if (body[i].textContent.charAt(0) != "~") {
				courses.push(body[i].textContent);
				mods.push(body[i].previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
				tri1.push(body[i].nextElementSibling.textContent);
				tri2.push(body[i].nextElementSibling.nextElementSibling.textContent);
				tri3.push(body[i].nextElementSibling.nextElementSibling.nextElementSibling.textContent);
			}
		}
	complete.push(courses);
	complete.push(mods)
	complete.push(tri1);
	complete.push(tri2);
	complete.push(tri3);
	var grades = ['asdfasd','asdfsad'];
	return grades;
}