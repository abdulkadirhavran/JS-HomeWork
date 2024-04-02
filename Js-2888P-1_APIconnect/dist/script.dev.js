"use strict";

function getUsers() {
  var response, users;
  return regeneratorRuntime.async(function getUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://jsonplaceholder.typicode.com/users"));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          users = _context.sent;
          console.log(users[0].name);
          console.log(users[0].username);
          console.log(users[0].email);
          console.log(users[0].address);
          console.log(users[0].phone);
          console.log(users[0].company.name);
          console.log(users[0].website);
          showUsers(users);
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          console.log("Hata kodu: ", _context.t0);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 17]]);
}

function showUsers(data) {
  var container = document.getElementById("user-section");
  data.forEach(function (user) {
    var userSectionHTML = "\n        <div class=\"col-md-12 d-flex align-items-center mb-4 \">\n          <div class=\"card fs-5 w-100 border-danger rounded-2\">\n            <div class=\"card-body d-flex flex-column text-center bg-secondary-subtle\">\n             <h4 class=\"card-title fs-2\">".concat(user.name, "</h4>\n             <p class=\"card-subtitle mt-2 text-body-secondary\">\n              <i class=\"bi bi-person-circle\"></i> @").concat(user.username, "\n             <p>\n             <p class=\"card-text\"><i class=\"bi bi-envelope me-2\"></i>").concat(user.email, "</p>\n             <p class=\"card-text\"><i class=\"bi bi-badge-ad me-2\"></i>").concat(user.address.city, "</p>\n             <p class=\"card-text\"><i class=\"bi bi-phone me-2\"></i>").concat(user.phone, "</p>\n             <p class=\"card-text\"><i class=\"bi bi-building-check me-2\"></i>").concat(user.company.name, "</p>\n             <p class=\"card-text\"><i class=\"bi bi-browser-chrome me-2\"></i>").concat(user.website, "</p>\n           </div>\n          </div>\n        </div>\n      ");
    container.innerHTML += userSectionHTML; //innerHTML yerine innerText koyarsan backtick içinde ki kodları tarayıcı da görürsün :)
  });
}

getUsers(); //Fonksiyonu mutlaka çağırıp inspect'te console sekmesini kontrol etmeliyiz