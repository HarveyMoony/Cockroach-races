
define('stage', function() {

    var api = {
        distance: document.getElementsByClassName('track')[0].offsetWidth,
        begin: 'off',
        getSize: getDistance
    };

    return api;


    function getDistance() {
        return document.getElementsByClassName('track')[0].offsetWidth
    }

});