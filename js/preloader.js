/*Elebase 4.3.75, Build 4375
April 20th 2018
For evaluation purposes only*/

$("#status").fadeIn();
$("#preloader").fadeIn();
$.get(url, data, function () {
    $("#status").fadeOut();
    $("#preloader").fadeOut();
});


