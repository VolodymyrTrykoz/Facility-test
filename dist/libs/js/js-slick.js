
    $(document).ready(function(){
      $('.first-slider').slick(
      	  {		  dots: true,
      	  		  infinite: true,
      	  		  fade: true,
      	  		  cssEase: 'linear',
      	  		  speed: 1000,
                  responsive: [
                      {
                        breakpoint: 576,
                        settings: {
                          arrows: false,                       
                        }
                      }
                  ]
      	  		 }
      	);


      $('.mini-slider__box').slick(
      	  {		  
      	  	infinite: true,
      	  	cssEase: 'linear',
      	  	speed: 500,
            autoplay: true,
      	  	slidesToShow: 3,
  			    slidesToScroll: 1,
            responsive: [
                  {
                    breakpoint: 576,
                    settings: {
                      arrows: true,                  
                      slidesToShow: 1,

                    }
                  }
  
            ]

      	  }
      	);
    });
 