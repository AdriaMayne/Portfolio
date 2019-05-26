// pt.js documentation:
// http://williamngan.github.io/pt/docs/

var space;
var count;
var view_width = $(window).width();

function drawSpace () {
    var colors = {
        a1: "#E31B6D", a2: "#FFFFFF", a3: "#E31B6D", a4: "#FFFFFF",
        b1: "#96bfed", b2: "#f5ead6", b3: "#f1f3f7", b4: "#e2e6ef"
    };

    space = new CanvasSpace("pt").setup( {bgcolor: "#222"} );
    var form = new Form(space);

    //// 2. Create Elements
    var pts = [];
    var center = space.size.$divide(2);
    var line = new Line(640, space.size.y).to(space.size); // --> Establece el elemento sobre el que se mueven las líneas.

    // Calculate the number of lines depending on the viewport width
    if (view_width <= 600) {
        count = 110;
    } else if (view_width <= 1140) {
        count = 130;
    } else {
        count = 150;
    }
    var r = Math.min(space.size.x, space.size.y) * 0.8;
    var mouse = center.clone();

    for (var i = 0; i < count; i++) {
        var p = new Vector(Math.random()*r - Math.random()*r, Math.random()*r - Math.random()*r );
        var rotation = i * Math.PI / count;

        p.moveBy(center).rotate2D(rotation, center);
        p.brightness = 0.1;
        pts.push(p);
    }

    space.add({
        animate: function(time, fps, context) {
            for (var i = 0; i < pts.length; i++) {
                // rotate the points slowly
                var pt = pts[i];
                pt.rotate2D(Const.one_degree / 20, center);
                form.stroke(false).fill(colors["a" + (i % 4)]).point(pt, 1);
                // form.stroke(false).fill('#E31B6D').point(pt, 1);
        
                // get line from pt to the mouse line
                var ln = new Line(pt).to( line.getPerpendicularFromPoint(pt) );

                // opacity of line derived from distance to the line
                //var opacity = Math.min( 0.8, 1 - Math.abs( line.getDistanceFromPoint(pt)) / r);
                var mouseDistance = Math.abs(ln.getDistanceFromPoint(mouse))

                if (mouseDistance < 50) {
                    if (pts[i].brightness < 0.3) {
                        pts[i].brightness += 0.015;
                    }
                } else {
                    if (pts[i].brightness > 0.1) {
                        pts[i].brightness -= 0.01;
                    }
                }
        
                var color = "rgba(255,255,255," + pts[i].brightness +")";
                form.stroke(color).fill(false).line(ln).point(pt, 1);
                // opacity of line derived from distance to the line
                // var opacity = Math.min( 0.8, 1 - Math.abs(line.getDistanceFromPoint(pt)) / r );
                // form.stroke("rgba(255,255,255," + opacity + ")", 2*(i%20)/20 ).fill( false ).line( ln );
            }
        },
    
        onMouseAction: function(type, x, y, evt) {
            if (type=="move") {
                mouse.set(x,y);
            }
        },
    
        onTouchAction: function(type, x, y, evt) {
            this.onMouseAction( type, x, y );
        }
    });

    // 4. Start playing
    space.bindMouse();
    space.bindTouch();
    space.play();
}

drawSpace();

$(window).resize(function(){
    space.removeAll();
    $('canvas').remove();
    drawSpace();
});