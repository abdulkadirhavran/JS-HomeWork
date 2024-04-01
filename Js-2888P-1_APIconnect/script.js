async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    console.log(users[0].name);
    console.log(users[0].username);
    console.log(users[0].email);
    console.log(users[0].address);
    console.log(users[0].phone);
    console.log(users[0].company.name);
    console.log(users[0].website);
    showUsers(users);
  } catch (err) {
    console.log("Hata kodu: ", err);
  }
}

function showUsers(data) {
  const container = document.getElementById("user-section");
  data.forEach((user) => {
    const userSectionHTML = `
        <div class="col-md-12 d-flex align-items-center mb-4 ">
          <div class="card fs-5 w-100 border-danger rounded-2">
            <div class="card-body d-flex flex-column text-center bg-secondary-subtle">
             <h4 class="card-title fs-2">${user.name}</h4>
             <p class="card-subtitle mt-2 text-body-secondary">
              <i class="bi bi-person-circle"></i> @${user.username}
             <p>
             <p class="card-text"><i class="bi bi-envelope me-2"></i>${user.email}</p>
             <p class="card-text"><i class="bi bi-badge-ad me-2"></i>${user.address.city}</p>
             <p class="card-text"><i class="bi bi-phone me-2"></i>${user.phone}</p>
             <p class="card-text"><i class="bi bi-building-check me-2"></i>${user.company.name}</p>
             <p class="card-text"><i class="bi bi-browser-chrome me-2"></i>${user.website}</p>
           </div>
          </div>
        </div>
      `;
    container.innerHTML += userSectionHTML;  //innerHTML yerine innerText koyarsan backtick içinde ki kodları tarayıcı da görürsün :)
  });
}

getUsers(); //Fonksiyonu mutlaka çağırmamız gerekiyor.
