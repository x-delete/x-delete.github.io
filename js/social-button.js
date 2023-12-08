
/*--------------------------------------------------------------------------
	
	Script Name : Social Button Script
	Author      : FIRSTSTEP - Motohiro Tani
	Author URL  : https://www.1-firststep.com
	Create Date : 2015/11/24
	Version     : 3.0.1
	Last Update : 2020/12/11
	
--------------------------------------------------------------------------*/


function social_button() {
	
	var url   = encodeURI( location.href );
	var title = encodeURI( document.title );
	
	
	var social_button = document.querySelectorAll( '.social-button' );
	
	
	if ( social_button.length == 0 ) {
		return;
	}
	
	
	social_button.forEach(function( li ) {
		
		if ( li.querySelector( '.twitter-tweet a' ) != null ) {
			li.querySelector( '.twitter-tweet a' ).setAttribute( 'href', '//twitter.com/share?text=' + title + '&url=' + url );
		}
		
		if ( li.querySelector( '.facebook-share a' ) != null ) {
			li.querySelector( '.facebook-share a' ).setAttribute( 'href', '//www.facebook.com/sharer.php?t=' + title + '&u=' + url );
		}
		
		if ( li.querySelector( '.hatena-bookmark a' ) != null ) {
			li.querySelector( '.hatena-bookmark a' ).setAttribute( 'href', '//b.hatena.ne.jp/add?mode=confirm&title=' + title + '&url=' + url );
		}
		
		if ( li.querySelector( '.pocket-save a' ) != null ) {
			li.querySelector( '.pocket-save a' ).setAttribute( 'href', 'http://getpocket.com/edit?title=' + title + '&url=' + url );
		}
		
		if ( li.querySelector( '.line-send a' ) != null ) {
			li.querySelector( '.line-send a' ).setAttribute( 'href', '//social-plugins.line.me/lineit/share?url=' + url );
		}
		
	});
	
}




if ( document.readyState == 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', function() {
		social_button();
	}, false );
} else {
	social_button();
}