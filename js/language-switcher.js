function updateText() {
	'use strict'
	var i18n = $.i18n(), language

	language = $( '.language option:selected' ).val()

	i18n.locale = language;
	i18n.load( 'i18n/' + i18n.locale + '.json', i18n.locale ).done(
		function () {
			$('html *').i18n()
		} );
}
// Enable debug
$.i18n.debug = true

$( document ).ready( function ( $ ) {
	'use strict'
	updateText()

	//Action for change the text
	$( '.language' ).on( 'change keyup', updateText )
} );
