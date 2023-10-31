 <?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );// Enregistrement du style du thème parent
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );// Chargement du style du thème parent 'parent-style'
}

//Récupération des options de personnalisation du thème parent
if ( get_stylesheet() !== get_template() ) {
    //Mise à jour des options de personnalisation du thème enfant
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        // Copie des options du thème enfant vers le thème parent
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; //Eempêche la mise à jour des options du thème enfant
    }, 10, 2 );
    // Récupération des options de personnalisation du thème enfant
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        // Remplacement des options du thème enfant par celles du thème parent lors de la récupération
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}