
require.config({
    baseUrl: "js",
    paths: {
        "underscore": '../bower_components/underscore/underscore-min',

        "Roach": 'modules/Roach',
        "stage": 'modules/stage'
    }
});

require(["app"], function() {

});