let users = JSON.parse(localStorage.getItem("users"));
// console.log("userData", users);

if (users == null) {
  alert("No user data found so you should first signup");
  window.location.href = "../Signup/index.html"
}

class user {
  constructor() { }
  login(useremail, userpass, userRole) {

    let data = false;
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].email === useremail &&
        users[i].pass === userpass &&
        users[i].usertype === userRole
      ) {
        data = true;
        break;
      } else {
        data = false;
      }
      if (data == true) {
        break;
      }
    }
    if (data == true) {
      if (userRole === "student") {
        localStorage.setItem("studentLoggedIn", JSON.stringify(useremail));
        window.location = "../../Student/Lecture_Page/student.html";
      } else {
        localStorage.setItem("adminLoggedIn", JSON.stringify(useremail));
        window.location = "../../Admin/Admin_Page/Admin.html";
      }
    } else {
      alert("Wrong Credentials");
    }
  }
}
function loginUser() {
  event.preventDefault();
  let useremail = document.getElementById("email").value;
  let userpass = document.getElementById("password").value;
  let userRole = document.getElementById("user").value;
  let User = new user();
  User.login(useremail, userpass, userRole);
}