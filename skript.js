<<<<<<< HEAD
$(document).ready(function(){
    moveHtml();
      $(window).resize(function(){
    moveHtml();
  });


    $('.slider').slick({
        dots: true,
        autoplay: false
        });
    $('.demo').slick({
          
    });
});

function moveHtml(){
    var mql764 = window.matchMedia('(max-width: 764px)');
    var mql320 = window.matchMedia('(max-width: 320px)');


 if(mql764.matches && !mql320.matches) {
    var checkbox = $('.right-wrapper>.checkbox').detach();
    checkbox.appendTo('.left-wrapper');
 } else {
    
    var checkbox  = $('.left-wrapper>.checkbox').detach();
    checkbox.insertBefore('input[name="submit-form"]');
 }

    if(mql320.matches) {
      var tel = $('.contacts > h6').remove();
      tel.appendTo('aside');
      tel.innerHTML = 'Ring oss gjerne!<span>55235560</span>';
      var aside = $('.wrapper>aside').detach();
      aside.insertAfter('.demo');
      aside.css('background', '#e2e1e1');

  } else {
      var tel =$('form + h6').detach();
      tel.prependTo('.contacts');
      tel.innerHTML = 'Ring oss gjerne pa <span>telefon 55235560</span>';
      var aside = $('.slider-wrapper>aside').detach();
      aside.appendTo('article');
      aside.css('background', '#f2f2f2');
  }
};




=======
$(document).ready(function(){
    moveHtml();
      $(window).resize(function(){
    moveHtml();
  });


    $('.slider').slick({
        dots: true,
        autoplay: false
        });
    $('.demo').slick({
          
    });
});

function moveHtml(){
    var mql764 = window.matchMedia('(max-width: 764px)');
    var mql320 = window.matchMedia('(max-width: 320px)');


 if(mql764.matches && !mql320.matches) {
    var checkbox = $('.right-wrapper>.checkbox').detach();
    checkbox.appendTo('.left-wrapper');
 } else {
    
    var checkbox  = $('.left-wrapper>.checkbox').detach();
    checkbox.insertBefore('input[name="submit-form"]');
 }

    if(mql320.matches) {
      var tel = $('.contacts > h6').remove();
      tel.appendTo('aside');
      tel.innerHTML = 'Ring oss gjerne!<span>55235560</span>';
      var aside = $('.wrapper>aside').detach();
      aside.insertAfter('.demo');
      aside.css('background', '#e2e1e1');

  } else {
      var tel =$('form + h6').detach();
      tel.prependTo('.contacts');
      tel.innerHTML = 'Ring oss gjerne pa <span>telefon 55235560</span>';
      var aside = $('.slider-wrapper>aside').detach();
      aside.appendTo('article');
      aside.css('background', '#f2f2f2');
  }
};




>>>>>>> 94aec45a621a960f47d211f24c314a7bb06f723a
