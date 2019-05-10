'use strict';

var contentMogo = (function () {
  var selectors = {
    slider: '.sliders',
    teamcarrousel: '.contentcarrousel',
    // carruselgalery: '.carruselgalery',
  };

  var dom = {};

  var catchDom = function () {

    dom.slider = $(selectors.slider);
    dom.teamcarrousel = $(selectors.teamcarrousel);
    dom.carruselgalery = $(selectors.carruselgalery);
  };

  var propertiesByDefault = {

    sliderBanner: {

      dots: true,
      arrows: false,
      cssEase: 'linear',
      fade: true,
      // autoplay: true,
    },

    slick: {
      infinite: true,
      slidesToShow: 1,
      dots: false,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    },

    carruselGalery: {
      slidesToShow: 1,
      dots: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            slidesToShow: 1,
          }
        }
      ]
    }
  }

  var suscribeEvent = function () {
    dom.slider.slick(propertiesByDefault.sliderBanner);
    dom.teamcarrousel.slick(propertiesByDefault.slick);
    dom.carruselgalery.slick(propertiesByDefault.carruselGalery);
  };

  var events = {
  };

  var initialize = function () {

    catchDom();
    suscribeEvent();
  };

  return {

    init: initialize
  }

})();

$(document).ready(contentMogo.init);
