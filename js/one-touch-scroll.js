(function() {

  var delay = false;

  jQuery( document ).on( 'mousewheel DOMMouseScroll', function( event ) {

    if ( jQuery( '.et_pb_side_nav' ).length === 0 ) return;

    event.preventDefault();

    if( delay ) return;
    delay = true;
    setTimeout( function() {delay = false}, 200 );

    var direction = event.originalEvent.wheelDelta || -event.originalEvent.detail;
    var $position = jQuery( '.et_pb_side_nav' ).find( '.active' );
    var $target;

    if( direction < 0 ) {
      $target = jQuery( $position ).parent().next();
    } else {
      $target = jQuery( $position ).parent().prev();
    }
    if ( jQuery( $target.length ) !== 0 ) {
      jQuery( $target ).children( 'a' ).trigger( "click" );
    }
  } );
} )();
