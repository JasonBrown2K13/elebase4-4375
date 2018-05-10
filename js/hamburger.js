/*Elebase 4.3.75, Build 4375
April 20th 2018
For evaluation purposes only*/

$(document).ready(function () {

    $(".hamburger").hide(); //ensure that hamburger menu is hidden on page load
    var menuMobileVibrate = $('#menu-mobile').vibrate("long"); //make menu button on the page vibrate
    $("#menu-mobile").click(function (menuMobileVibrate) { //listen for click event on menu button
        console.log("Hamburger opened"); //log hamburger opened
        $(".hamburger").slideToggle("fast", function () { //open the hamburger menu when button pressed once, then close when pressed again
        });
    });
    
});