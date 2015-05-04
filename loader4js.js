/*
 * The MIT License
 *
 * Copyright 2015 Sacha Cochin <sacha.cochin@gmail.com>.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

;(function ( $, window, document, undefined ) {

    "use strict";

        var pluginName = "Loader4Js",
            defaults = {
                state: "hidden",
                theme: "default",
                text : "A moment please"
            };

        function Plugin ( element, options ) {
            this.element = element;
            this.settings = $.extend( {}, defaults, options );
            this._defaults = defaults;
            this._name = pluginName;
            this.init();
        }

        $.extend(Plugin.prototype, {
            setHTMLContent: function() {
                $(this.element).html('<div class="loader4jsoverlay"><div class="loader4js-container"><div class="loader4js-logo"><span id="loader4js-top-dot"><!-- empty --></span><span id="loader4js-left-dot"><!-- empty --></span><span id="loader4js-right-dot"><!-- empty --></span><span id="loader4js-bottom-dot"><!-- empty --></span></div><div class="loader4js-text"><h1><!-- empty --></h1><span id="loader4js-first-point">.</span><span id="loader4js-second-point">.</span><span id="loader4js-third-point">.</span></div></div></div>');
            },
            init: function () {
                ///////////////
                //// HTML /////
                ///////////////
                this.setHTMLContent();

                ///////////////
                //// State ////
                ///////////////
                (this.settings.state === "shown") ? this.show() : this.hide();

                ////////////////
                ///// Text /////
                ////////////////
                if(this.settings.text !== "") {
                    this.setText(this.settings.text);
                }

                ///////////////
                //// Theme ////
                ///////////////
                if(this.settings.theme === 'none') {
                    $(this.element).find('.loader4js-logo').attr('class', 'loader4js-logo');
                } else if(this.settings.theme === "default" || this.settings.theme === "popandturn" ) {
                    $(this.element).find('.loader4js-logo').attr('class', 'loader4js-logo loader4js-popandturn');
                }
            },
            pauseAnimations: function() {
                var elem = $(this.element);
                elem.find('.loader4js-logo').css('animation-play-state', 'paused');
                elem.find('#loader4js-top-dot').css('animation-play-state', 'paused');
                elem.find('#loader4js-left-dot').css('animation-play-state', 'paused');
                elem.find('#loader4js-right-dot').css('animation-play-state', 'paused');
                elem.find('#loader4js-bottom-dot').css('animation-play-state', 'paused');
                elem.find('#loader4js-first-point').css('animation-play-state', 'paused');
                elem.find('#loader4js-second-point').css('animation-play-state', 'paused');
                elem.find('#loader4js-third-point').css('animation-play-state', 'paused');
            },
            resumeAnimations: function() {
                var elem = $(this.element);
                elem.find('.loader4js-logo').css('animation-play-state', 'running');
                elem.find('#loader4js-top-dot').css('animation-play-state', 'running');
                elem.find('#loader4js-left-dot').css('animation-play-state', 'running');
                elem.find('#loader4js-right-dot').css('animation-play-state', 'running');
                elem.find('#loader4js-bottom-dot').css('animation-play-state', 'running');
                elem.find('#loader4js-first-point').css('animation-play-state', 'running');
                elem.find('#loader4js-second-point').css('animation-play-state', 'running');
                elem.find('#loader4js-third-point').css('animation-play-state', 'running');
            },
            hide: function () {
                $(this.element).hide();
                this.pauseAnimations();
            },
            show: function() {
                this.resumeAnimations();
                $(this.element).show();
            },
            setText: function(text) {
                var elem = $(this.element).find('.loader4js-container .loader4js-text').detach();
                elem.find('h1').html(text);
                $('.loader4js-container').append(elem);
            }
        });

        /*
         * Plugin wrapper, preventing against multiple instantiations and
         * return plugin instance.
         */
        $.fn[pluginName] = function (options) {
            var plugin = this.data("plugin_" + pluginName);
            if (plugin instanceof Plugin) {
                if (typeof options !== 'undefined') {
                    plugin.init(options);
                }
            } else {
                plugin = new Plugin(this, options);
                this.data("plugin_" + pluginName, plugin);
            }
            return plugin;
        };
})( jQuery, window, document );