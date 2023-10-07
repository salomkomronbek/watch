const slider = document.querySelector('.gallery,.bola');
let isDown = false;
let startX;
let scrollLeft;
slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 5;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});


$(window).scroll(function(){
    if(document.documentElement.scrollTop >300 || document.body.scrollTop >300){
        // $('.ri-arrow-up-line').css('fontSize', '50px')
       
        // $('.boshqa-navbar').css('position', 'fixed')
        $('.boshqa-navbar').css('opacity', '0')
        $('.boshqa-navbar').css('position', 'fixed')
    }
else{
  
        $('.boshqa-navbar').css('opacity', '1')
        $('.boshqa-navbar').css('positon', 'none')
}

})
$(window).scroll(function(){
    if(document.documentElement.scrollTop >300 || document.body.scrollTop >300){
        // $('.ri-arrow-up-line').css('fontSize', '50px')
       
        // $('.boshqa-navbar').css('position', 'fixed')
        $('.boshqa-navba').css('opacity', '1')
        // $('.boshqa-navba').css('position', 'fixed')
    }
else{
  
        $('.boshqa-navba').css('opacity', '0')
        // $('.boshqa-navba').css('positon', 'none')
}

})
$(window).scroll(function(){
    if(document.documentElement.scrollTop >970 || document.body.scrollTop >970){
        // $('.ri-arrow-up-line').css('fontSize', '50px')
       $('.else').css('transform', 'translateY (-200px)')
        // $('.boshqa-navbar').css('position', 'fixed')
        $('.else').css('opacity', '0')
        // $('.boshqa-navba').css('position', 'fixed')
    }
else{
  
        $('.else').css('opacity', '1')
        // $('.boshqa-navba').css('positon', 'none')
}

})
$(window).scroll(function(){
    if(document.documentElement.scrollTop >970 || document.body.scrollTop >970){
        // $('.ri-arrow-up-line').css('fontSize', '50px')
       $('.boshqa-navb').css('transform', 'translateY (0px)')
        // $('.boshqa-navbar').css('position', 'fixed')
        $('.boshqa-navb').css('opacity', '1')

        // $('.boshqa-navba').css('position', 'fixed')
    }
else{
  
        $('.boshqa-navb').css('opacity', '0')
        $('.boshqa-navb').css('transform', 'translateY' )
        // $('.boshqa-navba').css('positon', 'none')
}

})

$(window).scroll(function(){
  if(document.documentElement.scrollTop >5000 || document.body.scrollTop >5000){
      
     $('.boshqa-navb.li-lar').css('backgroundColor', 'red)')
      
      $('.boshqa-navb.li-lar').css('opacity', '1')
      
  }
else{
  // $('.li-lar').css('backgrounColor', 'green)')
  $('.boshqa-navb .li-lar').css('opacity', '1')
   
}

})