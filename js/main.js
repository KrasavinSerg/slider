$(document).ready(function () {

  $('.slider').slick({

    responsive: [{

      breakpoint: 991,
      settings: {
        arrows: false,
        dots: true,
      }
    }]
  });
  
  $('.start-btn').click(function () {

    setTimeout(function() {
      $('.first').hide();
      $('.second').show();

      $('.slider').slick('refresh');
    }, 5000);
  });
});
