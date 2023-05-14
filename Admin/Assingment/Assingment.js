let data = JSON.parse(localStorage.getItem("assignments")) || [];
class lectureList {
  constructor() {}
  showLectureList() {
    display(data);
    function display(data) {
      document.querySelector(".section").innerHTML = "";
      data.forEach((elem, index) => {
        let div = document.createElement("div");
        div.classList.add("lectures");
        div.innerHTML = `
        <div class="details">
        <span>${elem.title}</span>
        <button class="type">${elem.type}</button>
        <p><b>${elem.instructor}</b> scheduled <b>Asiignment problem's</b> at ${elem.schedule}
          - ${elem.time}</p>
      </div>
      `;
        let button = document.createElement("button");
        button.innerText = "Remove";
        button.setAttribute("id", "remove");
        button.addEventListener("click", () => {
          removeLecture(elem, index);
        });
        div.appendChild(button);
        document.querySelector(".section").append(div);
      });
    }
    function removeLecture(elem, index) {
      data.splice(index, 1);
      localStorage.setItem("assignments", JSON.stringify(data));
      display(data);
    }
  }
  addLectureList(title, type, instructor, schedule) {
    this.title = title;
    this.type = type;
    this.instructor = instructor;
    this.schedule = schedule;
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    this.time = time;
    data.push(this);
    localStorage.setItem("assignments", JSON.stringify(data));
    this.showLectureList();
  }
}

function showLecture() {
  let list = new lectureList();
  list.showLectureList();
}
showLecture();
function addLecture() {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let type = document.getElementById("type").value;
  let instructor = document.getElementById("instructor").value;
  let schedule = document.getElementById("schedule").value;
  let lecture = new lectureList();
  lecture.addLectureList(title, type, instructor, schedule);
}
function showData() {
  let emailData = JSON.parse(localStorage.getItem("currentUser"));
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

// select logo
let logo=document.getElementsByClassName("home_admin_page_redirect")[0];
console.log(logo);
logo.addEventListener("click",()=>{
  window.location.href="../Admin_Page/Admin.html"
})