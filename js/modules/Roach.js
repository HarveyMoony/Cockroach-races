/** Жук
 *  @param {object} [args]
 **/
define(
    'Roach',
    function(){

        function Roach() {

            var args = arguments,
                template = '<div id="' + this.id + '" class="coockroach"></div>';

            this.id = args.id || 'r1';
            this.name = args.name || 'Micky';
            this.speed = args.speed || 3;
            this.color = args.color || '#bb000';
            this.position = 0;
            this.reaction = args.reaction || 5;
        }

        Roach.prototype.run = function() {
            var startTime = new Date();

            var running = setTimeout(function tick() {
                if (this.position + 60 > square.size){
                    place++;
                    var time = new Date() - startTime;
                    document.querySelector('#'+args.id).innerHTML = "<p class='place'>" + place + "</p>";
                    document.querySelector('.coockroach')[args.id].parentElement.parentElement.children[0].innerHTML = time/1000
                } else {
                    this.position += Math.random() * this.speed;
                    document.querySelector('#'+this.id).style.marginLeft = this.position + 'px';
                    running = setTimeout(tick, 5)
                }
            }, 5)
        };

        Roach.prototype.wait = function() {
            var _waiting = setInterval(waiting, this.reaction);
            function waiting() {
                if(square.begin == 'on') {
                    this.run();
                    clearInterval(_waiting)
                }
            }
        };

        return Roach;

    }
);