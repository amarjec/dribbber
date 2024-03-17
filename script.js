var nav = function() {
    var search = document.querySelector("#rnav input");
var sicon = document.querySelector("#rnav i");


search.addEventListener("click", function(){
    sicon.style.opacity = 0;
})
search.addEventListener("mouseout", function(){
    sicon.style.opacity = 1;
})


var details1 = document.querySelector("#details1");
var g1 = document.querySelector("#g1");

g1.addEventListener("mouseover", function(){
    details1.style.opacity = 1;
})
g1.addEventListener("mouseout", function(){
    details1.style.opacity = 0;
})

var details2 = document.querySelector("#details2");
var g2 = document.querySelector("#g2");
g2.addEventListener("mouseover", function(){
    details2.style.opacity = 1;
})
g2.addEventListener("mouseout", function(){
    details2.style.opacity = 0;
})
}
nav()

