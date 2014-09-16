var menuIsDisplayed = false;

// Start with navbar shown.
if ($(window).scrollTop() === 0) {
  $('.navbar').css('top', '0');
}

$(function() {
  var lastScroll = 0;

  // Change navbar colors depending on window scroll position.
  $(window).scroll(function(event) {
    var thisScroll = $(this).scrollTop();
    // When at top of page, show menu.
    if (thisScroll === 0 && !menuIsDisplayed) {
      $('.navbar').css('top', '0').fadeIn('slow');
      $('.navbar').css('background-color', 'transparent')
        .css('color', '#FFFFFF');
      $('.menu').css('color', '#FFFFFF');
      $('.menu-bars li').css('background-color', '#FFFFFF');
      $('.menu-bars li').css('border-color', '#FFFFFF');
    }
    if (thisScroll > 250) {
      $('.navbar').css('background-color', '#FFFFFF')
        .css('color', '#3093bd').fadeIn('slow');
      $('.menu').css('color', '#3093bd');
      $('.menu-bars li').css('background-color', '#3093bd')
        .css('border-color', '#3093bd');
    }
    if (thisScroll < lastScroll) {
      $('.navbar').css('top', '0');
    }
    else {
      $('.navbar').css('top', '-59px');
      $('.menu-dropdown').css('display', 'none');
      menuIsDisplayed = false;
    }
    lastScroll = thisScroll;
  });

  // Change navbar colors on hover depending on window scroll position.
  $('.navbar-container').hover(function () {
    if (lastScroll === 0) {
      $('.navbar').css('background-color', '#FFFFFF')
        .css('color', '#3093bd').fadeIn('slow');
      $('.menu').css('color', '#3093bd');
      $('.menu-bars li').css('background-color', '#3093bd')
        .css('border-color', '#3093bd');
    }
    $('.navbar').css('top', '0');
  }, function () {
    if (lastScroll === 0) {
      $('.navbar').css('background-color', 'transparent')
        .css('color', '#FFFFFF').fadeIn('slow');
      $('.menu').css('color', '#FFFFFF');
      $('.menu-bars li').css('background-color', '#FFFFFF')
        .css('border-color', '#FFFFFF');
    }
    if (lastScroll !== 0) {
      $('.navbar').css('top', '-59px');
    }
    if (menuIsDisplayed) {
      $('.menu-dropdown').css('display', 'none');
      menuIsDisplayed = false;
    }
  });

  // Display menu-dropdown on click.
  $('.navbar').click(function () {
    if (!menuIsDisplayed) {
      $('.menu-dropdown').css('display', 'block');
      menuIsDisplayed = true;
    }
    else {
      $('.menu-dropdown').css('display', 'none');
      menuIsDisplayed = false;
    }
  });
});