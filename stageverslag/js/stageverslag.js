/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'squareslinked.json', function() {
    console.log('callback - particles.js config loaded');
  });

$(window).scroll(function () {
  var scrollPos = $(window).scrollTop(),
      docHeight = $(document).height(),
      viewportHeight = window.innerHeight;
      scrollPercent = (scrollPos / (docHeight - viewportHeight)) * 100;
  $("#progressbar").height(scrollPercent + "%");
});