/**
 *
 * @module package/quiqqer/bricks/bin/Controls/ContentSwitcher
 *
 * @require qui/controls/elements/FormList
 */
define('package/quiqqer/recipes/bin/Recipes', [

    'qui/controls/Control',
    'Locale',
    'Mustache',

    'text!package/quiqqer/recipes/bin/Recipes.Settings.html'

], function (QUIControl, QUILocale, Mustache, templateSiteSettings)
{
    "use strict";

    var group = 'quiqqer/recipes';

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
        create: function ()
        {
            this.$Elm = new Element('div', {
                'class': 'qui-recipes',
                html   : Mustache.render(templateSiteSettings, {
                    RecipesSettingsTitle : QUILocale.get(group, 'site.table.settings.title'),
                    RecipesTitle         : QUILocale.get(group, 'site.table.settings.recipes.title'),
                    RecipesSubtitle      : QUILocale.get(group, 'site.table.settings.recipes.subtitle'),
                    RecipesImg           : QUILocale.get(group, 'site.table.settings.recipes.img'),
                    RecipesPersonsNumber : QUILocale.get(group, 'site.table.settings.recipes.personsNumber'),
                    RecipesComponents    : QUILocale.get(group, 'site.table.settings.recipes.components'),
                    RecipesComponentsDesc: QUILocale.get(group, 'site.table.settings.recipes.components.desc'),
                    RecipesPreparation   : QUILocale.get(group, 'site.table.settings.recipes.preparation')
                })
            });

            return this.$Elm;
        }
    });
});

