$(document).ready(function () {
  $('.main_btna').on('click', function () {
    showModal();
  });

  $('.main_btn').on('click', function () {
    showModal();
  });

  $('.main_nav ul li:nth-child(2)').on('click', function () {

    showModal();
  });

  $('.close').on('click', function () {
    hideModal();
  });
  
  $('.overlay').on('click', function () {
    hideModal();
  });

  function showModal() {
    $('.overlay').fadeTo('slow', .5, function () {
      $('.modal').css(
        {
          'top': '-300px',
          'opacity': '0',
          'display': 'block',
        }).show().animate(
        {
          top: '100px',
          opacity: 1
        }, 500)

    });
  };
  
  function hideModal(){
    $('.modal').show().animate({
      top: '-300px',
      opacity: 0
    },1000, function(){
      $('.overlay').fadeOut(500);
    })    
  };
});
