/***/

$(document).ready

(function() {
    
    var isDraggable = $(document).width() > 480 ? true : false; // If document (your website) is wider than 480px, isDraggable = true, else isDraggable = false

    var mapOptions = {
        zoom: 5,
        scrollwheel: false,
        draggable: isDraggable,
        center: new google.maps.LatLng(60.676048, - 94.724121),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
            "featureType": "landscape",
            "stylers": [{
                "hue": "#F1FF00"
            }, {
                "saturation": -27.4
            }, {
                "lightness": 9.4
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.highway",
            "stylers": [{
                "hue": "#0099FF"
            }, {
                "saturation": -20
            }, {
                "lightness": 36.4
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.arterial",
            "stylers": [{
                "hue": "#00FF4F"
            }, {
                "saturation": 0
            }, {
                "lightness": 0
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.local",
            "stylers": [{
                "hue": "#FFB300"
            }, {
                "saturation": -38
            }, {
                "lightness": 11.2
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "color": "#17729e"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "hue": "#9FFF00"
            }, {
                "saturation": 0
            }, {
                "lightness": 0
            }, {
                "gamma": 1
            }]
        }]
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var kmlUrl = 'http://msbsm.com/sites/66_days/mapdata/m8Lgv3.kml';

    var kmlOptions = {
        suppressInfoWindows: false,
        preserveViewport: false,
        map: map
    };

    var kmlLayer = new google.maps.KmlLayer(kmlUrl, kmlOptions);


});
