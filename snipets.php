function main_menu() {
if ( has_nav_menu( 'main_menu') ) {
wp_nav_menu(
array(
'theme_location'    => 'Main Menu',
'container'            => 'nav',
'container_id'        => 'bs-navbar',
'container_class'    => 'collapse navbar-collapse',
'menu_class'        =>  'nav navbar-nav',
'depth'                =>  3,
'fallback_cb'        =>    '',
)
)
}
}