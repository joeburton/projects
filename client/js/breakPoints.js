define([
    'jquery'
], function($) {
    
    var breakPoints = {

        init: function () {

            var self = this;

            $(window).resize(function () {
                self.getBreakPoints();
            });

            this.getBreakPoints();

        },

        getBreakPoints: function () {

            var pseudo,
                win,
                doc,
                el;

            win = window;
            doc = win.document;
            el = doc.body;

            // Less than ie9 remove the mobile view class xs from the body and exit
            if ($('html').hasClass('lt-ie9')) {

                // IE 8 and less by default don't get custom view styling
                $(el).removeClass('xs').addClass('lg').attr('data-size', 'lg');

            } else {

                try {

                    pseudo = this.getPseudoClass(win, el);

                    $(el).removeClass('xs sm md lg').attr('data-size', '');

                    // Remove double quotes from string.
                    pseudo = pseudo.replace(/["']/g, '');

                    $(el).addClass(pseudo).attr('data-size', pseudo);
                } catch (e) {
                    alert(e);
                }

            }
        },

        getPseudoClass: function (win, el) {

            var pseudo = win.getComputedStyle(el, ':after'),
                breakPointClass = pseudo.getPropertyValue('content');

            return breakPointClass;

        }

    };

    return breakPoints;
    
});