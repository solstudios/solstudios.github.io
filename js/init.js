(function($){
  $(function(){

    $('.sidenav').sidenav({
      edge: 'right',
    });

    $('.parallax').parallax();

    $('.scrollspy').scrollSpy({
      scrollOffset: 300,
    });

    // Pushpin Demo Init
    if ($('.pushpin-nav').length) {
      $('.pushpin-nav').each(function() {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
          top: $target.offset().top,
          bottom: $target.offset().top + $target.outerHeight() - $this.height()
        });
      });
    }

  }); // end of document ready
})(jQuery); // end of jQuery name space
