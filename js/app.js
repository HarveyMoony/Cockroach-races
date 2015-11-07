

define("app", ["Roach", "stage"], function(Roach, stage) {

    var roachesGroup = {};

    var place = 0;

    for(var i = 0; i < roaches.length; i++){
        roachesGroup[roaches[i].id] = new Roach(roaches[i]);
        document.getElementsByClassName('name')[i].innerHTML = roaches[i].name;
    }

    var btnStart = document.querySelector('#btn-start');
    btnStart.addEventListener('click', function(){
        stage.begin = 'on'
    });

    document.addEventListener('keydown', function(e) {
        if(e.keyCode == 32) {
            for(var key in roachesGroup) {
                roachesGroup[key].wait();
                stage.begin = 'on';
            }
        }
    });

});


