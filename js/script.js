document.addEventListener('DOMContentLoaded', function () {
  var myCarousel = document.querySelector('#carouselExample');
  var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000 // Cambio automático cada 5 segundos (ajusta el valor según tus preferencias)
  });
});


