/*Elebase 4.3.75, Build 4375
April 20th 2018
For evaluation purposes only*/

//NOTE: The giraffe sound effect is defined and called in 'animations.js' so that it is played at the correct time

$(document).ready(function () {
    //Home page

    //Monkey
    //Lion
    $("#monkey").click(function () { //listen for hover event on monkey     
        var sound = new Howl({
            src: ['../assets/monkey.mp3'],
        });
        sound.play();
    });

    //Lion
    $("#lion").click(function () { //listen for hover event on lion       
        var sound = new Howl({
            src: ['../assets/roar.mp3'],
        });
        sound.play();
    });  

});


