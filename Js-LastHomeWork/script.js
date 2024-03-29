async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    console.log(users[0].name);
    console.log(users[0].username);
    console.log(users[0].address);
    console.log(users[0].company.name);
    console.log(users[0].email);
    console.log(users[0].phone);
    console.log(users[0].website);
    displayUsers(users);
  } catch (error) {
    console.log("hata " + error);
  }
}

function displayUsers(users)  {
    const container = document.getElementById("user-cards")


}
