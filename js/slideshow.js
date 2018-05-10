/*Elebase 4.3.75, Build 4375
April 20th 2018
For evaluation purposes only*/

//Slideshows
const mySiema = new Siema(); //Home Page
const mySiema2 = new Siema({ selector: '.siema1' }); //Mini Monkeys
const mySiema3 = new Siema({ selector: '.siema5' }); //Little Lions
const mySiema4 = new Siema({ selector: '.siema6' }); //Jolly Giraffes
const mySiema5 = new Siema({ selector: '.siema7' }); //Courtyard
const mySiema6 = new Siema({ selector: '.siema8' }); //Nature Garden

//Buttons

//Home Page
const prev1 = document.querySelector('.prev1');
const next1 = document.querySelector('.next1');
prev1.addEventListener('click', () => mySiema.prev());
next1.addEventListener('click', () => mySiema.next());

//Mini Monkeys
const prev2 = document.querySelector('.prev2');
const next2 = document.querySelector('.next2');
prev2.addEventListener('click', () => mySiema2.prev());
next2.addEventListener('click', () => mySiema2.next());

//Little Lions
const prev3 = document.querySelector('.prev3');
const next3 = document.querySelector('.next3');
prev3.addEventListener('click', () => mySiema3.prev());
next3.addEventListener('click', () => mySiema3.next());

//Jolly Giraffes
const prev4 = document.querySelector('.prev4');
const next4 = document.querySelector('.next4'); 
prev4.addEventListener('click', () => mySiema4.prev());
next4.addEventListener('click', () => mySiema4.next());

//Courtyard
const prev5 = document.querySelector('.prev5');
const next5 = document.querySelector('.next5');
prev5.addEventListener('click', () => mySiema5.prev());
next5.addEventListener('click', () => mySiema5.next());

//Nature Garden
const prev6 = document.querySelector('.prev6');
const next6 = document.querySelector('.next6');
prev6.addEventListener('click', () => mySiema6.prev());
next6.addEventListener('click', () => mySiema6.next());