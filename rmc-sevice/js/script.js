$(document).ready(function () {
    svg4everybody({});
});

ymaps.ready(function () {
    var e1 = new ymaps.Map("map1", {
            center: [55.77234000426992, 37.64957899999999],
            zoom: 16,
            controls: []
        }),
        e2 = new ymaps.Map("map2", {
            center: [55.739250, 37.508229],
            zoom: 16,
            controls: []
        }),
        t1 = new ymaps.Placemark([55.77234000426992, 37.64957899999999], {}, {
            iconLayout: "default#image",
            iconImageHref: "../img/map-logo.png",
            iconImageSize: [157, 41],
            iconImageOffset: [-45, -45]
        }),
        t2 = new ymaps.Placemark([55.739250, 37.508229], {}, {
            iconLayout: "default#image",
            iconImageHref: "../img/map-logo.png",
            iconImageSize: [157, 41],
            iconImageOffset: [-45, -45]
        });
    e1.geoObjects.add(t1);
    e2.geoObjects.add(t2)
})