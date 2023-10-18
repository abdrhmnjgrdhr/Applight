// SIDE NAV BAR SHOW AND HIDDEN

let sideNav = document.getElementById("side-nav")
let show = document.getElementById("show")
let hide = document.getElementById("hidden")

// show

show.addEventListener("click",function(){
    sideNav.style.marginTop="0"
})

// HIDE

hide.addEventListener("click",function(){
    sideNav.style.marginTop="-200%"
})