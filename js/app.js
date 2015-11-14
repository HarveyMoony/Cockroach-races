

define("app", ["stage", "Roach"], function(stage, Roach) {

    var roachesGroup = {};

    for(var i = 0; i < roaches.length; i++){
        roachesGroup[roaches[i].id] = new Roach(roaches[i]);
        document.getElementsByClassName('name')[i].innerHTML = roaches[i].name;
    }

    document.addEventListener('keydown', start);

    function start(e) {
        if(e.keyCode == 32) {
            for(var key in roachesGroup) {
                roachesGroup[key].run(stage.distance);
                stage.begin = 'on';
            }
            document.removeEventListener('keydown', start);
        }
    }

});