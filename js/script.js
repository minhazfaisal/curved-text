// js


// jq
$(document).ready(function(){


    var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });
    /**
     * Demo 2
     */
    var circle = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * -t + 0.5 * Math.PI),
            y: 500.0 + 300.0 * Math.sin(2.0 * Math.PI * -t + 0.5 * Math.PI)
        };
    };

    $('#text2').curvedText({
        curve:    circle,
        domain:   [0.0, 1.0],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 1000.0 }
    });


    /**
     * Demo 3
     */
    var bezier = function (t)
    {
        var px = [100.0, 350.0, 500.0, 900.0],
            py = [400.0,  50.0, 500.0, 200.0],
            ax = [px[0], 3.0 * (px[1] - px[0]), 3.0 * (px[2] - 2.0 * px[1] + px[0]), px[3] - 3.0 * px[2] + 3.0 * px[1] - px[0]],
            ay = [py[0], 3.0 * (py[1] - py[0]), 3.0 * (py[2] - 2.0 * py[1] + py[0]), py[3] - 3.0 * py[2] + 3.0 * py[1] - py[0]],
            cx = ax[0] + ax[1] * t + ax[2] * t * t + ax[3] * t * t * t,
            cy = ay[0] + ay[1] * t + ay[2] * t * t + ay[3] * t * t * t;

        return {
            x: cx,
            y: cy
        };
    };

    $('#text3').curvedText({
        curve:    bezier,
        domain:   [0.0, 1.0],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 500.0 }
    });


})