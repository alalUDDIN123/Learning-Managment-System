let data = JSON.parse(localStorage.getItem("lectures")) || [];
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
          <p><b>${elem.instructor}</b> scheduled <b>${elem.category}</b> at ${elem.schedule}
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
        localStorage.setItem("lectures", JSON.stringify(data));
        display(data);
      }
    }
    addLectureList(title, type, category, instructor, schedule) {
      this.title = title;
      if (type == "LIVE") {
        this.type = "LIVE";
      } else {
        this.type = "VIDEO";
      }
      this.category = category;
      this.instructor = instructor;
      this.schedule = schedule;
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes();
      this.time = time;
      data.push(this);
      localStorage.setItem("lectures", JSON.stringify(data));
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
    let category = document.getElementById("category").value;
    let instructor = document.getElementById("instructor").value;
    let schedule = document.getElementById("schedule").value;
    let lecture = new lectureList();
    lecture.addLectureList(title, type, category, instructor, schedule);
  }
  function showData() {
    let emailData = JSON.parse(localStorage.getItem("currentUser"));
    document.querySelector(".guest").innerHTML = `
    <p>${emailData} </p>
    `;
  }
  showData();