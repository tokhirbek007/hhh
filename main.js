const body = document.querySelector("body")
let exit = document.querySelector(".exit")
let menu = document.querySelector(".menu-button")
let navList = document.querySelector("header nav ul")

exit.addEventListener("click", function (){
    navList.style.display = "none"
})

menu.addEventListener("click", function (){
    navList.style.display = "flex"
})