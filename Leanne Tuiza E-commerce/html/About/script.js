/*
Check out the original dribbble shot
https://dribbble.com/shots/2797559-Mr-bara-Split-Screen
*/



const up = $('.nav-up');
const down = $('.nav-down');
let counter = 1;
let number = $('.number');

function moveDown(currentSlide) {
  
  var nextSlide = currentSlide.next();
  var currentSlideUp = currentSlide.find('.txt');
  var currentSlideDown = currentSlide.find('.img');
  var nextSlideUp = nextSlide.find('.img');
  var nextSlideDown = nextSlide.find('.txt');
  let currentCopy = currentSlide.find('.copy'); 
  let nextCopy = nextSlide.find('.copy'); 
  
  if( nextSlide.length !== 0 ) {
    
    counter = counter + 1;
    
    if( counter % 2 === 0 ) {
      
      TweenMax.to(number, 0.3, {x: '-100%'})
      TweenMax.to( currentSlideUp, 0.4, { y: '-100%', delay:0.15 });
      TweenMax.to( currentSlideDown, 0.4, { y: '100%', delay:0.15 });
      setTimeout(function() {number.html('')},300);
      
    } else {
      
      number.html('0'+counter);
      TweenMax.to(number, 0.3, {x: '0%', delay:1})
      TweenMax.to( currentSlideUp, 0.4, { y: '100%', delay:0.15 });
      TweenMax.to( currentSlideDown, 0.4, { y: '-100%', delay:0.15 });
    }
    
    TweenMax.to( currentCopy, 0.3, {autoAlpha: 0, delay:0.15});
    TweenMax.to( nextCopy, 0.3, {autoAlpha: 1, delay:1});
    TweenMax.to( nextSlideUp, 0.4, { y: '0%', delay:0.15 });
    TweenMax.to( nextSlideDown, 0.4, { y: '0%', delay:0.15 });
    
    $(currentSlide).removeClass('active');
    $(nextSlide).addClass('active');
    
  } 
}

function moveUp(currentSlide) {
  
  var prevSlide = currentSlide.prev();
  var currentSlideUp = currentSlide.find('.img');
  var currentSlideDown = currentSlide.find('.txt');
  var prevSlideUp = prevSlide.find('.txt');
  var prevSlideDown = prevSlide.find('.img');
  let currentCopy = currentSlide.find('.copy');
  let prevCopy = prevSlide.find('.copy'); 
  
  if( prevSlide.length !== 0 ) {
    
    counter = counter - 1;
    
    if( counter % 2 === 0 ) {
      
      
      TweenMax.to(number, 0.3, {x: '-100%'});
      TweenMax.to( currentSlideUp, 0.4, { y: '-100%', delay:0.15 });
      TweenMax.to( currentSlideDown, 0.4, { y: '100%', delay:0.15 });
      setTimeout(function() {number.html('')},300);

      
    }else {
      
      number.html('0'+counter);
      TweenMax.to(number, 0.3, {x: '0%', delay:1})
      TweenMax.to( currentSlideUp, 0.4, { y: '100%', delay:0.15 });
      TweenMax.to( currentSlideDown, 0.4, { y: '-100%', delay:0.15 });
    }
    
    TweenMax.to( currentCopy, 0.3, {autoAlpha: 0, delay:0.15});
    TweenMax.to( prevCopy, 0.3, {autoAlpha: 1, delay:1});
    TweenMax.to( prevSlideUp, 0.4, { y: '0%', delay:0.15 });
    TweenMax.to( prevSlideDown, 0.4, { y: '0%', delay:0.15 });
    
    $(currentSlide).removeClass('active');
    $(prevSlide).addClass('active');
    
  }
  
}

function hideNav() {
  
  if( counter == $('.slide').length) {    
    TweenMax.to($('.nav-down'),0.5, {autoAlpha: 0, delay:0.5} );
  }else {
     TweenMax.to($('.nav-down'),0.5, {autoAlpha: 1, delay:0.5} );
  }
  if( counter === 1) {    
    TweenMax.to($('.nav-up'),0.5, {autoAlpha: 0, delay:0.5} );
  }else {
     TweenMax.to($('.nav-up'),0.5, {autoAlpha: 1, delay:0.5} );
  }
  
}


down.on('click', function() {
  
  var currentSlide = $('.active');
  moveDown(currentSlide); 
  hideNav();
  
});

up.on('click', function() {
  
  var currentSlide = $('.active');
  moveUp(currentSlide);
  hideNav();

});

$(function(){
			
  var $slogans = $("p.slogan").find("strong");
  var $holder = $("#holder");
  
  //set via JS so they're visible if JS disabled
  $slogans.parent().css({position : "absolute", top:"0px", left:"0px"});
  
  //settings
  var transitionTime = 0.4;
  var slogansDelayTime = 2;
  
  //internal
  var totalSlogans = $slogans.length;
  
  var oldSlogan = 0;
  var currentSlogan = -1;
  
  //initialize	
  switchSlogan();
  
  function switchSlogan(){
    
    oldSlogan = currentSlogan;
    
    if(currentSlogan < totalSlogans-1){
      currentSlogan ++
    } else {
      currentSlogan = 0;
    }
    
    TweenLite.to($slogans.eq(oldSlogan), transitionTime, {top:-20, alpha:0, rotationX: 90});
    TweenLite.fromTo($slogans.eq(currentSlogan), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
    
    TweenLite.delayedCall(slogansDelayTime, switchSlogan);
  }
  
});