const reviews = [

  {
    id: 1,
    projectName: "Rader Toons",
    linkProject: "https://anarijnr.github.io/RaderToons/",
    img:
      "images/raderbike.png",
    text:
      "Landing page for Rader-Toons. Meet Rader and his friends as they embark on amazing adventures.",
    category: "Landing",
  },

  {
    id: 2,
    projectName: "Ibe Architects",
    linkProject: "https://anarijnr.github.io/Bigi/",
    img:
      "images/BLOCK OF FLATS, JAHI, ABUJA (4).jpg",
    text:
      "Portfolio Website for Chidera Ibe Architects. View all his wonderful works. ",
    category: "Big",
  },

  {
    id: 3,
    projectName: "Prom Match",
    linkProject: "https://anarijnr.github.io/PromMatch/",
    img:
      "images/imagess.jpeg",
    text:
      "Prom Match site. Match two things together, freely remove, add, and match names.",
    category: "Mini",
  },

  {
    id: 4,
    projectName: "Clock Timer",
    linkProject: "https://anarijnr.github.io/clock/",
    img:
      "images/clock.jpg",
    text:
      "What's the time?",
    category: "Mini",
  },

];



var img = document.querySelector("#person-img");
var project = document.querySelector("#project-name");
var projectLink = document.querySelector("#view-project a");
var info = document.querySelector("#info");
let row = document.querySelector(".row");

// load itema
window.addEventListener("DOMContentLoaded", function () {

  display(reviews);

});

let buttons = document.querySelectorAll(".buttonsContainer .btn");
console.log(buttons);

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let category = e.currentTarget.dataset.id;

    let filteredReviews = reviews.filter(function (item) {
      if (category === item.category) {
        return item.category;
      }
    });

    if (category === "all") {
      return display(reviews);
    } else {
      return display(filteredReviews);
    }
  })
})

function display(arrayOfObjects) {
  let displayAllProjects = arrayOfObjects.map(function (item) {
    return `
       <div class="col-lg-4 col-md-6">
         <div>
          <img src="${item.img}" id="person-img" alt="">
         </div>
          <h4 id="project-name">${item.projectName}</h4>
          <p id="view-project"> <a href="${item.linkProject}"> <button type="button" class="btn btn-lg btn-success" name="button">View project <i class="fa-solid fa-arrow-right-long"></i> </button> </a> </p>
          <p id="info">
            ${item.text}
          </p>
        </div>`
  });

  displayAllProjects = displayAllProjects.join("");
  row.innerHTML = displayAllProjects;

};



