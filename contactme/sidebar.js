var sidebarBtn = document.querySelector(".sidebar-toggle");
var sidebar = document.querySelector(".sidebar");
var closeBtn = document.querySelector(".close-btn");
sidebarBtn.addEventListener("click",function(){
  sidebar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener("click",function(){
  sidebar.classList.remove("show-sidebar");
})
