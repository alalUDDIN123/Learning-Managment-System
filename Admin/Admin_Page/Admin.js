let data = JSON.parse(localStorage.getItem("users")) || [];
let emailData = JSON.parse(localStorage.getItem("adminLoggedIn"));



// console.log("email check:", emailData);

if (!emailData) {
  alert("Please Login To Access This Page")
  window.location.href = "../../Registration/login/login.html"
}


class userList {
  constructor() { }
  showUserList() {

    display(data);
    function display(data) {
      document.querySelector(".user-list").innerHTML = "";

      const filteredData = data.filter((user) => user.email !== emailData);
      // console.log("All useres except admin or logged in ", filteredData);
      filteredData.forEach((elem, index) => {
        let div = document.createElement("div");
        div.classList.add("details");
        div.innerHTML = `
          <p>${elem.email}</p>
          <p>${elem.pass}</p>
          <p>${elem.usertype}</p>
        `;
        let div2 = document.createElement("div");
        let p = document.createElement("p");
        p.setAttribute("id", "remove");
        p.innerText = "Remove";
        p.addEventListener("click", () => {
          removeUser(index, elem);
        });
        div2.append(p);
        div.appendChild(div2);
        document.querySelector(".user-list").append(div);
      });
    }


    // Remove Student 👍

    function removeUser(index, el) {
      // console.log("index clicked:", index);
      // console.log(el);

      let isConfirm = confirm(`Are you sure you want to remove the user with email:  ${el.email}`);

      if(isConfirm){
        data.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(data));
        display(data);
      }
        
    }
  }

  // Manually added students or admin functunality

  addStudentData(e, p, t) {
    this.email = e;
    this.pass = p;
    this.usertype = t;

    data.push(this);
    localStorage.setItem("users", JSON.stringify(data));
    this.showUserList();

  }
}

// Value get 👍

function addStudent() {
  event.preventDefault();
  let e = document.getElementById("email").value;
  let p = document.getElementById("pass").value;
  let t = document.getElementById("type").value;

  if (e === "" || p === "" || t === "") {
    alert("Please fill up all required field")
  } else if (p.length < 5) {
    alert("Password length must be greater 4")
  }
  else {
    let student = new userList();
    student.addStudentData(e, p, t);
  }


}


function showUser() {
  let list = new userList();
  list.showUserList();
}
showUser();

// Display email 👍

function showData() {
  document.querySelector(".guest").innerHTML = `
  <p>${emailData}</p>
  `;
}
showData();


const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

