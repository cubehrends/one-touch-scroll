<?php
function ots_enqueue() {
    if( is_page_template( 'page-templates/custom-one-touch-scroll.php' ) ) {
      wp_enqueue_script( 'ots-js', get_stylesheet_directory_uri() . '/js/one-touch-scroll.js', array('jquery'), '1.0', true);
    }
}
add_action( 'wp_enqueue_scripts', 'ots_enqueue' );
?>
