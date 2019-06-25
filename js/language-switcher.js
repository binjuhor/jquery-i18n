function updateText () {
  'use strict'
  let i18n = $.i18n(), language

  language = url('?lang')

  if (!language) {
    History.pushState(null, null, "?lang=en" )
    language = 'en'
  }

  i18n.locale = language
  i18n.load('i18n/' + i18n.locale + '.json', i18n.locale).done(
    function () {
      $('html *').i18n()
    })
}

( function ($) {
  'use strict'
  updateText()
} )(jQuery)
