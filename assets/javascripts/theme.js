(function ($) {
  $(document).ready(function() {
    // Remove all default stylesheets.
    $("link[rel=stylesheet], style").each(function() {
      $(this).remove();
    });

    // Add required class for theming.
    $('body')
      .addClass('pes')
      .addClass('page-' + window.location.pathname.split("/")[1]);

    // Make some changes to the registration form.
    if ($('.login-box form [type="submit"]').text().toLowerCase() == 'register') {
      $(this).prev('.help').find('a').html('Already have an account? Sign in');
    }

    var lightningLogo = chrome.runtime.getURL("assets/images/logos/lightning.png");
    var pantheonLogo = chrome.runtime.getURL("assets/images/logos/pantheon.png");
    $('.login-box .header').css('backgroundImage', 'url(' + pantheonLogo + ')');

  });
})(jQuery);