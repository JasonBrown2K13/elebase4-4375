/*Elebase 4.3.75, Build 4375
April 20th 2018
For evaluation purposes only*/

//When the user taps anywhere in the feature image or the text container, if the hamburger menu is opened it will hide itself
//An alternative method of closing the hamburger menu

$(document).ready(function () {

    /*Google Analytics function*/
    function sendTrackingEvent(action, label) {
        ga('send', 'event', 'Menu Hidden By Tap', action, label);
    }

    $("#textcontainer").click(function () {
        if ($(".hamburger").css('display') == 'none' == false) {
            sendTrackingEvent('Tapped', 'Tapped on text container');
            console.log("clicked");
            $(".hamburger").slideToggle("fast", function () { 
            });
        }      
    });

    $("#featureimage").click(function () {
        if ($(".hamburger").css('display') == 'none' == false) {
            sendTrackingEvent('Tapped', 'Tapped on feature image');
            console.log("clicked");
            $(".hamburger").slideToggle("fast", function () {
            });
        }
    });
    
});