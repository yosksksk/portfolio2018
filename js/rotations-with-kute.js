// identify the elements
var el1 = document.querySelector('.box1');
var el2 = document.querySelector('.box2');
var el3 = document.querySelector('.box3');
var el4 = document.querySelector('.box4');

// built the tween objects
var tween1 = KUTE.fromTo(el1,{rotate:0},{rotate:720},{duration: 1500});
var tween2 = KUTE.fromTo(el2,{rotate:0},{rotate:720},{duration: 1500});
var tween3 = KUTE.fromTo(el3,{rotate:0},{rotate:720},{duration: 1500});
var tween4 = KUTE.fromTo(el4,{rotate:0},{rotate:720},{duration: 1500});

$('p.box1').on('click', function(){ 
    // start the animation
    tween1.start();
});

$('p.box2').on('click', function(){ 
    // start the animation
    tween2.start();
});

$('p.box3').on('click', function(){ 
    // start the animation
    tween3.start();
});

$('p.box4').on('click', function(){ 
    // start the animation
    tween4.start();
});