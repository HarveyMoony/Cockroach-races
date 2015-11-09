/** Жук
 *  @param {object} [args]
 **/
define(
    'Roach',
    ['underscore'],
    function(){

        function Roach(args) {

            var tmpl = '<div id="' + this.id + '" class="coockroach"></div>';

            this.id = args.id || 'r1';
            this.name = args.name || 'Micky';
            this.speed = args.speed || 3;
            this.color = args.color || '#bb000';
            this.position = 0;
            this.reaction = args.reaction || 5;
        }

        Roach.prototype.run = function(distance) {
            console.log(this);

            var self = this,
                startTime = new Date();

            setTimeout(function() {
                var running = setTimeout(function tick() {
                    if (self.position + 60 > distance){
                        self.finish(startTime)
                    } else {
                        self.position += Math.random() * self.speed;
                        document.querySelector('#'+self.id).style.marginLeft = self.position + 'px';
                        running = setTimeout(tick, 5)
                    }
                }, 10 )
            }, 0);
        };

        Roach.prototype.finish = function(startTime) {
            self.place += 1;
            var time = new Date() - startTime;
            document.querySelector('#'+self.id).innerHTML = "<p class='place'>" + self.place + "</p>";
            document.querySelector('.coockroach')[self.id].parentElement.parentElement.children[0].innerHTML = time/1000
        };

        return Roach;

    }
);