/**
 *
 * @module package/quiqqer/bricks/bin/Controls/ContentSwitcher
 *
 * @require qui/controls/elements/FormList
 */
define('package/quiqqer/recipes/bin/Recipes', [

    'qui/controls/Control',
    'qui/controls/elements/FormList'

], function (QUIControl, QUIFormList)
{
    "use strict";

    return new Class({

        Extends: QUIControl,
        Type   : 'package/quiqqer/recipes/bin/Recipes',

        Binds: [
            ''
        ],

        initialize: function (options)
        {
            this.parent(options);



        },

        /**
         * create the dom node element
         *
         * @return {HTMLElement}
         */
        create: function () {
            this.$Elm = new Element('div', {
                'class': 'qui-recipes',
                html   : '<div>super div!</div>'
            });

            return this.$Elm;
        }
    });
});

