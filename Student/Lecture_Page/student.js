let data = JSON.parse(localStorage.getItem("lectures")) || [];
// slecting no lecture div

let noLectureData = document.getElementById("no_lecture")
let filterDuv = document.getElementsByClassName("add")[0]
// console.log(filterDuv);

// console.log("lengthL:", data.length);


if (data.length === 0) {
  filterDuv.style.display="none"

}else{
  noLectureData.style.display="none"
}
class lectureList {
  constructor() { }
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
          <p><b>${elem.instructor}</b> scheduled <b>${elem.category}</b> at ${elem.schedule}
            - ${elem.time}</p>
        </div>
        <div><button class="Attendence">Present</button></div>
        `;
        document.querySelector(".section").append(div);
      });
    }
  }


  // Filter by title functunality start 👍  👍  👍  👍  👍  👍

  filterByTiltle(value) {
    let datas = data.filter((elem) => {
      return elem.title == value;
    });
    if (value == "All") {
      document.querySelector(".section").innerHTML = "";
      data.forEach((elem, index) => {
        let div = document.createElement("div");
        div.classList.add("lectures");
        div.innerHTML = `
          <div class="details">
          <span>${elem.title}</span>
          <button class="type">${elem.type}</button>
          <p><b>${elem.instructor}</b> scheduled <b>${elem.category}</b> at ${elem.schedule}
            - ${elem.time}</p>
        </div>
        `;
        document.querySelector(".section").append(div);
      });
    } else {
      document.querySelector(".section").innerHTML = "";
      datas.forEach((elem, index) => {
        let div = document.createElement("div");
        div.classList.add("lectures");
        div.innerHTML = `
          <div class="details">
          <span>${elem.title}</span>
          <button class="type">${elem.type}</button>
          <p><b>${elem.instructor}</b> scheduled <b>${elem.category}</b> at ${elem.schedule}
            - ${elem.time}</p>
        </div>
        `;
        document.querySelector(".section").append(div);
      });
    }
  }
  // Filter by title functunality end 👍  👍  👍  👍  👍  👍



  // Filter by Date functunality start 🏬 🏬 🏬 🏬

  filterByDate(values) {
    let database = data.filter((elem) => {
      return elem.schedule == values;
    });
    document.querySelector(".section").innerHTML = "";
    database.forEach((elem, index) => {
      let div = document.createElement("div");
      div.classList.add("lectures");
      div.innerHTML = `
          <div class="details">
          <span>${elem.title}</span>
          <button class="type">${elem.type}</button>
          <p><b>${elem.instructor}</b> scheduled <b>${elem.category}</b> at ${elem.schedule}
            - ${elem.time}</p>
        </div>
       
        `;
      document.querySelector(".section").append(div);
    });
  }
}
// Filter by Date functunality end 🏬 🏬 🏬 🏬

// Display the all data which are admin Added🥈 🥈 🥈 🥈 🥈

function showLecture() {
  let list = new lectureList();
  list.showLectureList(); // See line no 👍 6
}
showLecture();





// Show email of the student 👍

function showData() {
  let emailData = JSON.parse(localStorage.getItem("currentUser"));
  document.querySelector(".guest").innerHTML = `
    <p>${emailData} </p>
    `;
}
showData();



//  filter by title 👍

function filterTitle() {
  let value = document.getElementById("title").value;
  let tiltleFilter = new lectureList();
  tiltleFilter.filterByTiltle(value);
}

// filter by data 👍
function filterDate() {
  let dateValue = document.getElementById("schedule").value;
  let filterDate = new lectureList();
  filterDate.filterByDate(dateValue);
}


// Reset The filter details 👍
function resetFilter() {
  window.location.reload();
}

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

