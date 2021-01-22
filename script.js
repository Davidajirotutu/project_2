//Code to make menu button retract

//First create variables for the menuBtn, sideNav & menu
var menuBtn = document.getElementById("menuBtn");
var menuBtn = document.getElementById("sideNav");
var menuBtn = document.getElementById("menu");

sideNav.style.right = "-250px";

menuBtn.onclick = function () {
    if(sideNav.style.right === "-250px"){
        sideNav.style.right = "0";
        menu.src = "close.png";
    }
    else{
        sideNav.style.right = "-250px";
        menu.src = "menu.png";
    }
}
