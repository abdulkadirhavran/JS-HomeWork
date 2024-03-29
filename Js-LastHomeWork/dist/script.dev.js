"use strict";

function fetchUsers() {
  var response, users;
  return regeneratorRuntime.async(function fetchUsers$(_context) {
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
          console.log(users[0].address);
          console.log(users[0].company.name);
          console.log(users[0].email);
          console.log(users[0].phone);
          console.log(users[0].website);
          displayUsers(users);
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          console.log("hata " + _context.t0);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 17]]);
}

function displayUsers(users) {
  var container = document.getElementById("user-cards");
}