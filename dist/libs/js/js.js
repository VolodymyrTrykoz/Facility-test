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
var formClose = document.querySelector('form .close');
var menu = document.querySelector('.header__menu');
var header = document.querySelector('.header');
var formTable = document.querySelector('.form');
var popUpButton = document.querySelector('#form-js');

close.addEventListener('click', function(){	
	mobile.classList.toggle('hide');
	header.classList.toggle('header--mobile');
});

menu.addEventListener('click', function(){
	mobile.classList.toggle('hide');
	header.classList.toggle('header--mobile');
});   

popUpButton.addEventListener('click', function(){
	formTable.classList.toggle('form--hidden');
});

formClose.addEventListener('click', function(){
	formTable.classList.toggle('form--hidden');
});






var form = document.querySelector('#registerForm');
  
    form.addEventListener('submit', function (e) {
       
        var isValid = true;
        var inputs = this.querySelectorAll('[required]');

        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value == '' ) {
                inputs[i].classList.add('error')
                isValid = false;
            }

            else {
                inputs[i].classList.remove('error')
            }
        }

        if(isValid){
            this.submit()
        } else {
            e.preventDefault();
        }


    });