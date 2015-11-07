
define('stage', function() {

    var api = {
        size: document.getElementsByClassName('track')[0].offsetWidth,
        begin: 'off',
        getSize: getSize
    };

    return api;


    function getSize() {
        return document.getElementsByClassName('track')[0].offsetWidth
    }

});