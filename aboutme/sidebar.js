var sidebarBtn = document.querySelector(".sidebar-toggle");
var sidebar = document.querySelector(".sidebar");
var closeBtn = document.querySelector(".close-btn");
var endSpan = document.querySelector(".end span");
sidebarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
})


let date = new Date();
endSpan.innerHTML = date.getFullYear();
// console.log(endSpan);
