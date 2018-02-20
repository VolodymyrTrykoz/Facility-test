window.addEventListener("load", myMap);
    function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
    center: new google.maps.LatLng(50.43, 30.56),
    zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    };


var mobile = document.querySelector('.mobile');
var close = document.querySelector('.close');
var menu = document.querySelector('.header__menu');



close.addEventListener('click', function(){
	mobile.classList.toggle('hide');
});

menu.addEventListener('click', function(){
	mobile.classList.toggle('hide');
});   
