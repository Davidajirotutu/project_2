//Code to make menu button retract

//First create variables for the menuBtn, sideNav & menu
var menuBtn = document.getElementById("menuBtn");
var menuBtn = document.getElementById("sideNav");
var menuBtn = document.getElementById("menu");

sideNav.style.right = "-150px";

menuBtn.onclick = function () {
    if(sideNav.style.right === "-150px"){
        sideNav.style.right = "0";
        menu.src = "image/close.png";
    }
    else{
        sideNav.style.right = "-150px";
        menu.src = "image/menu.png";
    }
}
