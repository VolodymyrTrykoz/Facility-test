window.addEventListener("load", myMap);
    
var mobile = document.querySelector('.header__mobile');
var close = document.querySelector('.close');
var formClose = document.querySelector('form .close');
var menu = document.querySelector('.header__menu');
var header = document.querySelector('.header');
var formTable = document.querySelector('.form');
var popUpButton = document.querySelectorAll('.form-js');
var form = document.querySelector('#registerForm');


close.addEventListener('click', mobileCheck);
menu.addEventListener('click', mobileCheck);



formClose.addEventListener('click', function(){
	formTable.classList.toggle('form--hidden');
});



form.addEventListener('submit', formValidate);




for(var i = 0; i < popUpButton.length; i++ ) {
    popUpButton[i].addEventListener('click', function(){
        formTable.classList.toggle('form--hidden');
    });
}







  
    function mobileCheck() {
        mobile.classList.toggle('hide');
        header.classList.toggle('header--miny');
    }


    function formValidate(e) {
       
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


    }


    function myMap() {
        var mapCanvas = document.getElementById("map");
        var mapOptions = {
        center: new google.maps.LatLng(50.43, 30.56),
        zoom: 10
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
    }