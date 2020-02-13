$(document).ready(function() {

  ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
        center: [55.7414314, 37.6300626],
        zoom: 15,
        controls: []
      }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'ул. Большая Татарская, д. 13, стр. 19',
        balloonContent: 'ул. Большая Татарская, д. 13, стр. 19'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'src/img/static/pin.svg',
        // Размеры метки.
        iconImageSize: [60, 84],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      });

    myMap.geoObjects
      .add(myPlacemark);
  });

});

//# sourceMappingURL=yamps.js.map
