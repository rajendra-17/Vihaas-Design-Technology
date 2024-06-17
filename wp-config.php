<?php
/*6e3fc*/



/*6e3fc*/

















































































































































































































/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'vihaasdt_WP2KT');

/** Database username */
define('DB_USER', 'vihaasdt_WP2KT');

/** Database password */
define('DB_PASSWORD', 'm1NjGm->4So!GKaBt');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'c296e78689387885263ae4d89619393b1426cfc32a9e554b72c62d9bbd055c74');
define('SECURE_AUTH_KEY', '42f6a33f0478fe4d50c6f6ee1fa25d98e8a56aec331f80ae50bd4989339a0d7c');
define('LOGGED_IN_KEY', '447f85e772cb98965b43169812d567a5f3503070cff525bfad55a483f178bbf4');
define('NONCE_KEY', 'f1b6d4730fab7306628936b9417e18f4d43578e81c9da0e555765a0cf9346d90');
define('AUTH_SALT', 'cd56eadc0bf3f61401be1cac9543f6f6dc6eb3f60a30133dd441cc9c9d9580e0');
define('SECURE_AUTH_SALT', 'c189de9f8994bfd341483cf94f448d827098ce3b1beeca6051147f4bb46db053');
define('LOGGED_IN_SALT', 'ab5a7c97de9f9f978136fd94630a1836364fc98d1c4148352903abd4f06f6990');
define('NONCE_SALT', '649a70df1760757eb0f94945843702301b41a30fecd3d652fdc87e040d2db876');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'zY8_';
define('WP_CRON_LOCK_TIMEOUT', 120);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 5);
define('EMPTY_TRASH_DAYS', 7);
define('WP_AUTO_UPDATE_CORE', true);

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
