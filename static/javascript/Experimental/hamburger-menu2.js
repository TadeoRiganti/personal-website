// Hamburger 

// Based on Victor Diaz de Leon's codepen:
// https://codepen.io/vxdiazdel/pen/wzvNGy

$(function() {
  $('#hamburger').on('click', function() {
    $(this).toggleClass('close');
    $('#nav').toggleClass('visible');
  });
});