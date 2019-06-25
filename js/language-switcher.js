function updateLanguage () {
  'use strict'
  let availableLanguage = [ 'vi', 'en', 'cn' ]
  let defaultLanguage = 'en'
  let i18n = $.i18n(), language

  language = url('?lang')

  if (!language) {
    History.pushState(null, null, '?lang=' + defaultLanguage)
    language = defaultLanguage
  }

  if (language && availableLanguage.indexOf(language) === -1) {
    language = defaultLanguage
  }

  i18n.locale = language
  i18n.load('i18n/' + i18n.locale + '.json', i18n.locale).done(
    function () {
      $('html *').i18n()
    })
}

( function ($) {
  'use strict'
  updateLanguage()
} )(jQuery)
