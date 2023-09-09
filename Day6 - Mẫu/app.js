// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function readFom() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  console.log(rollV, nameV, addressV, genderV);
}

let createBtn = document.getElementById("create");
let readBtn = document.getElementById("read");
let updateBtn = document.getElementById("update");
let deleteBtn = document.getElementById("delete");

createBtn.addEventListener("click", function () {});