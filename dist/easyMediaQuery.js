/**
 *
 * easyMediaQuery.js
 * Easy and Fast Javascript MediaQuery.
 *
 * @author Gianluca Bonifazi <info@biuni.it>
 * www.biuni.it
 * MIT License
 * Version: 0.0.1
 *
 **/
"use strict";

window.easyMQ = (function () {

	// When the object was created
	// execute the init function
    function easyMQ () {
        this.init();
    }

    // Initial function
    easyMQ.prototype.init = function() {

        // Execute for the first time the
        // checking function
        easyMQ.prototype.checking();

        // Every time there's a resize
        // event execute the checking function
        window.addEventListener('resize', function(event) {
            easyMQ.prototype.checking();
        });
    };

    // Checking function was used to
    // check the media query 
    easyMQ.prototype.checking = function() {

        // Select all elements with the attribute
        // "data-easyMQ"
        var elems = document.querySelectorAll('[data-easyMQ]');

        // If there aren't elements into the
        // array, print error
        (elems.length == 0) ?
        easyMQ.prototype.error(1):
            elems;

        // Loop into array foreach element
        for (var i = 0; i < elems.length; i++) {

            // Read the value into the attribute 
            var attr_el = elems[i].getAttribute('data-easyMQ');

            // Split the string extracted from attribute 
            var attr = attr_el.split('|');

            // If the array length is less then 3 print a warn
            (attr.length != 3) ?
            easyMQ.prototype.error(2):
                attr;

            // Type of media query
            var type = attr[0];
            // Media query match size
            var value = attr[1];
            // Element style on match
            var styled = attr[2];

            // matchMedia function
            var mq = window.matchMedia('(' + type + ': ' + value + ')');

            // If true go set style
            if (mq.matches) {
                elems[i].setAttribute('style', styled);
            } else {
            	// If false remove attribute style
                elems[i].removeAttribute('style');
            }

        }
    }

	// Error function
	easyMQ.prototype.error = function(type) {
		// Print different kind of error
	    switch (type) {
	        case 1:
	            console.warn('No items found with attribute "data-easyMQ"!');
	            break;
	        case 2:
	            console.warn('Expected 3 value in the "data-easyMQ" attribute!');
	            break;
	    }
	}
     
    return easyMQ;
}());


/*! 
*  matchMedia() polyfill -
*  Test a CSS media type/query in JS.
*  Authors & copyright (c) 2012:
*  Scott Jehl, Paul Irish, Nicholas Zakas, David Knight.
*  Dual MIT/BSD license
*/
window.matchMedia || (window.matchMedia = function() {

    // For browsers that support matchMedium api such as IE 9 and webkit
    var styleMedia = (window.styleMedia || window.media);

    // For those that don't support matchMedium
    if (!styleMedia) {
        var style       = document.createElement('style'),
            script      = document.getElementsByTagName('script')[0],
            info        = null;

        style.type  = 'text/css';
        style.id    = 'matchmediajs-test';

        if (!script) {
          document.head.appendChild(style);
        } else {
          script.parentNode.insertBefore(style, script);
        }

        // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
        info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

        styleMedia = {
            matchMedium: function(media) {
                var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

                // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                if (style.styleSheet) {
                    style.styleSheet.cssText = text;
                } else {
                    style.textContent = text;
                }

                // Test if media query is true or false
                return info.width === '1px';
            }
        };
    }

    return function(media) {
        return {
            matches: styleMedia.matchMedium(media || 'all'),
            media: media || 'all'
        };
    };
}());
