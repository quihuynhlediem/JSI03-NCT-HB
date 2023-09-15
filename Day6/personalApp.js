let heading = document.getElementById("personal_name");
heading.innerHTML = localStorage.getItem("username");

let logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("username");
  localStorage.removeItem("email")
  location.assign("index.html");
});
