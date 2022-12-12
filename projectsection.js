const reviews = [

  {
    id: 1,
    projectName: "Rader Toons",
    linkProject: "https://anarijnr.github.io/RaderToons/",
    img:
      "images/raderbike.png",
    text:
      "Landing page for Rader-Toons. Meet Rader and his friends as they embark on amazing adventures.",
  },

  {
    id: 2,
    projectName: "Chidera Ibe Architects",
    linkProject: "https://anarijnr.github.io/Bigi/",
    img:
      "images/BLOCK OF FLATS, JAHI, ABUJA (4).jpg",
    text:
      "Portfolio Website for Chidera Ibe Architects. View all his wonderful works. ",
  },

  {
    id: 3,
    projectName: "Prom Match",
    linkProject: "https://anarijnr.github.io/PromMatch/",
    img:
      "images/imagess.jpeg",
    text:
      "Prom Match site. Match two things together, freely remove, add, and match names.",
  },

  {
    id: 4,
    projectName: "Clock Timer",
    linkProject: "https://anarijnr.github.io/clock/",
    img:
      "images/clock.jpg",
    text:
      "What's the time?",
  },

];

var switcher = 0;

var img = document.querySelector("#person-img");
var project = document.querySelector("#project-name");
var projectLink = document.querySelector("#view-project a");
var info = document.querySelector("#info");

var prevBtn = document.querySelector(".prev-btn");
var nextBtn = document.querySelector(".next-btn");


window.addEventListener("DOMContentLoaded", function () {
  switcherAuto(switcher);

})

function switcherAuto(switchup) {
  var item = reviews[switchup];
  img.src = item.img;
  project.textContent = item.projectName;
  info.innerHTML = item.text;
  projectLink.href = item.linkProject;
}

nextBtn.addEventListener("click", function () {
  switcher++;
  if (switcher > reviews.length - 1) {
    switcher = 0;
  }
  switcherAuto(switcher);
})

prevBtn.addEventListener("click", function () {
  switcher--;
  if (switcher < 0) {
    switcher = reviews.length - 1;
  }

  switcherAuto(switcher);
})
