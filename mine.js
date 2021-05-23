const menu = document.getElementsByClassName("menu");
const details = document.querySelectorAll(".menu a");

menu[0].addEventListener("mouseover", function () {
    menu[0].style.backgroundColor = "black";
    for (var i = 0; i < details.length; i++) {
        details[i].style.color = "white";
    }
});
menu[0].addEventListener("mouseout", function () {
    menu[0].style.backgroundColor = "white";
    for (var i = 0; i < details.length; i++) {
        details[i].style.color = "black";
    }
});

