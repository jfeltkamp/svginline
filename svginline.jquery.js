(function($){

  $.fn.svginline = function() {
    this.filter('img[src*=".svg"]').each(function(i, imgItem) {
      var source = $(imgItem).attr('src');

      $.ajax({
        type: 'GET',
        url: source,
        dataType: 'xml',
        beforeSend: function (xhr) {
          // Set document type for IE9-10
          try { xhr.responseType = "msxml-document"; } catch(err){}
        },
        success: function (xml, status, xhr) {
          // Parse the xml file and get data
          if (typeof xhr.responseText !== 'undefined' && xhr.responseText) {
            var $svg = $($.parseXML(xhr.responseText)).find('svg');
            var plain = $svg.get(0);
            if (typeof plain.outerHTML !== 'undefined') {
              plain = plain.outerHTML;
            }
            else {
              // IE does not support outerHTML so trick is needed.
              plain = $('<root />').append(plain).html();
            }
            // build container for svg.
            var containerId = 'svg-container-' + i;
            var container = $('<div>').attr('id', containerId).css({
              width: $(imgItem).width(),
              height: $(imgItem).height(),
              overflow: 'hidden'
            });

            $(imgItem).replaceWith(container);
            container.html(plain);
            return container;
          }
        }
      });
    });
  };

})(jQuery);
