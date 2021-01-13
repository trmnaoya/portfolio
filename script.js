$(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 550) {
        $('#nav').addClass('fixed');
      } else {
        $('#nav').removeClass('fixed');
      }
    });
});

$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top-130;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
});

// ウィンドウを開く
$( '.js-modal-open' ).each( function() {
  $( this ).on( 'click', function() {
       var target = $( this ).data( 'target' );
       var modal = document.getElementById( target );
       $( modal ).fadeIn( 300 );
       return false;
  });
});

// ウィンドウを閉じる
$( '.js-modal-close' ).on( 'click', function() {
 $( '.js-modal' ).fadeOut( 300 );
 return false;
});