# svginline
Loads svg included as src of an img tag an puts the svg-XML to the DOM. This is the base of fixing a lot of frontend issues in IE9, IE10, IE11

##
This jQuery plugin provides a solution for displaying SVG included as source of an <img /> in the document in the Internet Explorer.
It is not possible to style SVGs in Internet Explorer Edge and earlier by css3 as it is in Chrome, FF and other modern Browsers.
This plugin reads out the source of the image file and writes the svg-xml to the DOM replacing the image tag. So you can style the SVG even in MSIE.

## Install
Install svginline.jquery.js in your application. 
Requires jQuery.
 
## Use Example

```javascript
(function($) {
  var $inline = $('html.msie img.svg-icon').svginline();
  $inline.addClass('svg-container');
})(jQuery);
```

The function svginline returns a div container sized equal to the former image with the svg-xml included. 
You can add a class as base class for further changes in css3.

