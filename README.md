# svginline
Loads svg included as src of an img tag an puts the svg-XML to the DOM. This is the base of fixing frontend issues with SVGs in IE9, IE10, IE11.

##
This jQuery plugin provides a solution for displaying **styled** SVG in the Internet Explorer included as source of an img-Tag.
It is not possible to style SVGs in Internet Explorer Edge and earlier by css3 (with fill, stroke and other properties) as it is in Chrome, FF and other modern Browsers.
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

### Source code (before)

```html
<figure>
    <img src="/images/logo.svg" alt="" class="svg-icon" width="120" height="80"/>
</figure>
```


### Modified DOM (after)

```html
<figure>
  <div id="svg-container-2" class="svg-container" style="width:120px;height:80px;">
    <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    	 viewBox="0 0 68 68" style="enable-background:new 0 0 68 68;" xml:space="preserve">
    <g>
    	<polygon class="st0" points="0,0 68,0 68,68 0,68 0,0 	"/>
    	<path class="st1" d="..."/>
    </g>
    </svg>
  </div>
</figure>
```

