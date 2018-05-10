/*Elebase 4.3.75, Build 4375
April 20th 2018
For evaluation purposes only*/

$(document).ready(function () {

    /*Google Analytics function*/
    function sendTrackingEvent(action, label) {
        ga('send', 'event', 'Animation Played', action, label);
    }

    //-----ANIMATION DEFAULTS (1080p and above)-----//

    //Play clouds animation
    $('#clouds').addClass("clouds-play");

    //Play trees animation
    $('#trees').addClass("trees-zoom");


    //Menu button animations (characters jumping)
    //Home enter
    $("#home").mouseenter(function () {
        $('#home').addClass("rollover");
        $('#monkey').addClass("jump");
        $('#lion').addClass("jump");
        $('#giraffe').addClass("jump");
    });

    //Home exit
    $("#home").mouseleave(function () {
        $('#home').removeClass("rollover");
        $('#monkey').removeClass("jump");
        $('#lion').removeClass("jump");
        $('#giraffe').removeClass("jump");
    });

    //Day-to-day enter
    $("#daytoday").mouseenter(function () {
        $('#daytoday').addClass("rollover");
        $('#monkey').addClass("jump");
        $('#lion').addClass("jump");
        $('#giraffe').addClass("jump");
    });

    //Day-to-day exit
    $("#daytoday").mouseleave(function () {
        $('#daytoday').removeClass("rollover");
        $('#monkey').removeClass("jump");
        $('#lion').removeClass("jump");
        $('#giraffe').removeClass("jump");
    });

    //Groups enter
    $("#groups").mouseenter(function () {
        $('#groups').addClass("rollover");
        $('#monkey').addClass("jump");
        $('#lion').addClass("jump");
        $('#giraffe').addClass("jump");
    });

    //Groups exit
    $("#groups").mouseleave(function () {
        $('#groups').removeClass("rollover");
        $('#monkey').removeClass("jump");
        $('#lion').removeClass("jump");
        $('#giraffe').removeClass("jump");
    });

    //Team enter
    $("#team").mouseenter(function () {
        $('#team').addClass("rollover");
        $('#monkey').addClass("jump");
        $('#lion').addClass("jump");
        $('#giraffe').addClass("jump");
    });

    //Team exit
    $("#team").mouseleave(function () {
        $('#team').removeClass("rollover");
        $('#monkey').removeClass("jump");
        $('#lion').removeClass("jump");
        $('#giraffe').removeClass("jump");
    });

    //Parents enter
    $("#parents").mouseenter(function () {
        $('#parents').addClass("rollover");
        $('#monkey').addClass("jump");
        $('#lion').addClass("jump");
        $('#giraffe').addClass("jump");
    });

    //Parents exit
    $("#parents").mouseleave(function () {
        $('#parents').removeClass("rollover");
        $('#monkey').removeClass("jump");
        $('#lion').removeClass("jump");
        $('#giraffe').removeClass("jump");
    });

    //Contact enter
    $("#contact").mouseenter(function () {
        $('#contact').addClass("rollover");
        $('#monkey').addClass("jump");
        $('#lion').addClass("jump");
        $('#giraffe').addClass("jump");
    });

    //Contact exit
    $("#contact").mouseleave(function () {
        $('#contact').removeClass("rollover");
        $('#monkey').removeClass("jump");
        $('#lion').removeClass("jump");
        $('#giraffe').removeClass("jump");
    });


    //Play monkey animation (add CSS class 'monkey-play' to start the animation)
    $("#monkey").click(function () {
        sendTrackingEvent('Played', 'Monkey animation');
        $('#monkey').addClass("monkey-play");
    });

    //Play lion animation (add CSS class 'lion-play' to start the animation)
    $("#lion").click(function () {
        sendTrackingEvent('Played', 'Lion animation');
        $('#lion').addClass("lion-play");     
        $('#monkey').addClass("monkey-run");
        $('#giraffe').addClass("giraffe-run");
    });

    //Giraffe sound effect ONLY
    //NOTE: This is not in 'sound.js' because there needs to be a delay before the sound is played, so this function is executed in the
    //function below with a jQuery 'delay' method to play the sound at the correct time
    function giraffeSound() {
        var sound = new Howl({
            src: ['../assets/chew.mp3'],
            volume: 8, //this sound effect is too quiet by default
        });
        sound.play();
    }

    //Play giraffe animation (add CSS class 'giraffe-play' to start the animation)
    $("#giraffe").click(function () {
        sendTrackingEvent('Played', 'Giraffe animation');
        $('#giraffe').addClass("giraffe-play");
        setTimeout(giraffeSound, 5000) //play sound effect after 5 seconds (after giraffe has scaled up)
    });

});