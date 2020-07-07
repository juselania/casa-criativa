function onOff(){
document
.querySelector("#modal")
.classList
.toggle("hide")

document
.querySelector("body")
.classList
.toggle("hideScroll")

//Ajustando a rolagem em dispositivos maiores e add um prop. scroll
document
.querySelector("#modal")
.classList
.toggle("addScroll")
}

