// gallery

(function($){
    $(document).ready(function() {
      // Isotope
      let sizer = $('</div>').css('width', '25%');
  
      let $grid = $('.gallery__list').isotope({
      itemSelector: '.gallery__item',
      percentPosition: true,
      masonry: {
        columnWidth: sizer[0]
      }
      });
  
      $('.filter-link').on('click', function() {
          let filterValue = $(this).attr('data-filter'),
          filter = filterValue === '' ? '' : `[data-name="${filterValue}"]`;
        
      $('.filter-link').removeClass('filter-link_active');
      $(this).addClass('filter-link_active');  
        
        
      $grid.isotope({ filter: filter });
      });
   
    });
  })(jQuery);

// swiper


  let swiper = new Swiper('.swiper1', {

    autoplay: {
          delay: 5000,
       
    },
    pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
             },
             
  });

  let mySwiper = new Swiper('.swiper2', {

    autoplay: {
      delay: 4000,
   
},
pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
         },
   
       
  });
  
// map
  
  let map;
  const myLatLng = { lat: 49.589612, lng: 34.551115 };
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: myLatLng,
      zoom: 16,
    });
    image = '../i/pin.png',
    new google.maps.Marker({
      position: myLatLng,
      map,
      draggable:true,
      icon: image,
      animation: google.maps.Animation.BOUNCE
    });
  }


// scroll

$(function(){
	$('#scroll_bottom').click(function(){
		$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 1500);
		return false;
	});
});