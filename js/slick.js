'use strict'

/*=================================================
PICKUP スライダー
===================================================*/
{
  $(".slider").slick({
    autoplay: true,
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });
}
