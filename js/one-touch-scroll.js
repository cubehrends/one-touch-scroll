( function( $ ) {

  $( document ).on( 'mousewheel DOMMouseScroll', function( event ) {

    if ( ( $( '.et_pb_side_nav' ).length === 0 ) || $( 'html, body' ).is( ':animated' ) ) return;

    event.preventDefault();

    var direction = event.originalEvent.wheelDelta || -event.originalEvent.detail;
    var $position = $( '.et_pb_side_nav' ).find( '.active' );
    var $target;

    if( direction < 0 ) {
      $target = $( $position ).parent().next();
    } else {
      $target = $( $position ).parent().prev();
    }
    if ( $( $target.length ) !== 0 ) {
      $( $target ).children( 'a' ).trigger( "click" );
    }
  } );
} )( jQuery );
