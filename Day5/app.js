import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
	getDatabase,
	ref,
	set,
	get,
	child,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";

const firebaseConfig = {
	apiKey: "AIzaSyC4lxHH8YG0nfxndpup7IVzIdA-x-6090Y",
	authDomain: "jsi03-myfirstproject.firebaseapp.com",
	projectId: "jsi03-myfirstproject",
	storageBucket: "jsi03-myfirstproject.appspot.com",
	messagingSenderId: "633830080267",
	appId: "1:633830080267:web:36fc363a46947f9c51ec0e",
	measurementId: "G-0E2QMWM8QV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
var rollV, nameV, genderV, addressV;

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

createBtn.addEventListener("click", function () {
	readFom();
	set(ref(database, "students/" + rollV), {
		student_roll: rollV,
		student_name: nameV,
		student_gender: genderV,
		student_address: addressV,
	});
});
