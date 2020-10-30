(function() {
  var scrpt = document.createElement('script');
  scrpt.async = false;
  scrpt.type = 'text/javascript';
  scrpt.src = 'https://pool-demo.adhese.com/tag/adspreeconfig.js';
  var node = document.getElementsByTagName('script')[0];
  node.parentNode.insertBefore(scrpt, node);
})();

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function () {
    googletag.pubads().disableInitialLoad();
});



(function ($) {

  'use strict';

  /**
   * Provides the off-canvas menu.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for the off-canvas menu.
   */
  Drupal.behaviors.initGoogle = {

    attach: function (context) {
      if(document.cookie.includes("gdpr=2")) {
      $(context).find('div.inline-ad').once('initialized').each(function () {

        var $e = $(this);
        var data = {
          zone: $e.data('tag-zone'),
          code: $e.data('tag-code'),
          id: $e.attr('id')
        }
        if (typeof data.code != 'undefined' && typeof data.zone != 'undefined') {
          console.log(data);
          console.log('---- PROBLEM LOADING GOOGLETAG -----');
          googletag.cmd.push(function () {
            googletag.defineSlot(data.code + '/' + data.zone, [300, 250], data.id)
                .addService(googletag.pubads())
                .setCollapseEmptyDiv(true);
            googletag.enableServices();
            googletag.display(data.id);
          });
        }
      })
    }
  }
};



})(jQuery);
