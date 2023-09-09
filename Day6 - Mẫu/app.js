import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";

const firebaseConfig = {
      apiKey: "AIzaSyC0i59DC02EOl972GDt-xhtAypbPnFX0XY",
      authDomain: "jsi03-59bf0.firebaseapp.com",
      databaseURL: "https://jsi03-59bf0-default-rtdb.firebaseio.com",
      projectId: "jsi03-59bf0",
      storageBucket: "jsi03-59bf0.appspot.com",
      messagingSenderId: "641607578160",
      appId: "1:641607578160:web:ff69a6fbf2157cbc0173f5",
      measurementId: "G-6TNZ1JB05C"
};
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // const database = getDatabase(app);

    // function writeUserData(userId, name, age) {
    //   set(ref(database, 'users/' + userId)), {
    //     name: name,
    //     age: age
    //   }
    // }

    // writeUserData("1", 'Linh', 18)
    const dbRef = ref(getDatabase(app));
    const userId = "One";
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

// function readFom() {
//   rollV = document.getElementById("roll").value;
//   nameV = document.getElementById("name").value;
//   genderV = document.getElementById("gender").value;
//   addressV = document.getElementById("address").value;
//   console.log(rollV, nameV, addressV, genderV);
// }

// let createBtn = document.getElementById("create");
// let readBtn = document.getElementById("read");
// let updateBtn = document.getElementById("update");
// let deleteBtn = document.getElementById("delete");

// createBtn.addEventListener("click", function () {});