# A PHP login script (MINIMAL VERSION)

A simple, but secure PHP login script. Uses the ultra-modern & future-proof PHP 5.5.
BLOWFISH hashing/salting functions (includes the official PHP 5.3 & PHP 5.4 compatibility pack, which makes those
functions available in those versions too). Follow the project on **[Twitter](https://twitter.com/simplephplogin)** or 
**[Facebook](https://www.facebook.com/pages/PHP-Login-Script/461306677235868)**. Also have a look on my blog if you 
like (lots of related stuff there): **[Dev Metal](http://www.dev-metal.com)**.

**This script is part of the php-login project, a collection of 4 different login scripts**.
See [php-login.net](http://www.php-login.net) for more info.

[![Support php-login-minimal](_support/banner-host1plus.png)](https://affiliates.host1plus.com/ref/devmetal/36f4d828.html)

1. **One-file version:** Full login script in one file. Uses a one-file SQLite database (no MySQL needed) and PDO.
   Features: Register, login, logout.
   https://github.com/panique/php-login-one-file
2. **Minimal version** All the basic functions in a clean file structure, uses MySQL and mysqli.
   Register, login, logout.
   https://github.com/panique/php-login-minimal
3. **Advanced version** Similar to the minimal version, but full of features.
   Uses PDO, Captchas, mail sending via SMTP and much more.
   https://github.com/panique/php-login-advanced
3. **HUGE (professional version)** Everything comes with a professional MVC framework structure, perfect for building
   real applications. Additional features like: URL rewriting, professional usage of controllers and actions, PDO, MySQL,
   mail sending via PHPMailer (SMTP or PHP's mail() function/linux sendmail), user profile pages, public user profiles,
   gravatars and local avatars, account upgrade/downgrade etc., login via Facebook, Composer integration, etc.
   https://github.com/panique/huge

## Live-demo

Live demo **[here](http://php-login.net/demo2.html)**, live demo's phpinfo() **[here](http://phpinfo.php-login.net/)**

## Requirements

- PHP 5.3.7+
- MySQL 5 database (please use a modern version of MySQL (5.5, 5.6, 5.7) as very old versions have a exotic bug that
[makes PDO injections possible](http://stackoverflow.com/q/134099/1114320).
- activated mysqli (last letter is an "i") extension (activated by default on most server setups)

## Installation (quick setup)

Create a database *login* and the table *users* via the SQL statements in the `_install` folder.
Change mySQL database user and password in `config/db.php` (*DB_USER* and *DB_PASS*).

## Installation (detailed setup tutorials)

- [Detailed tutorial for installation on Ubuntu 12.04 LTS](http://www.dev-metal.com/install-php-login-nets-1-minimal-login-script-ubuntu/)
- [Detailed tutorial for installation on Windows 7 and 8 (useful for development)](http://www.dev-metal.com/how-to-install-php-login-minimal-on-windows-7-8/)

## Security notice

This script comes with a handy .htaccess in the views folder that denies direct access to the files within the folder
(so that people cannot render the views directly). However, these .htaccess files only work if you have set
`AllowOverride` to `All` in your apache vhost configs. There are lots of tutorials on the web on how to do this.

## Useful links

- [A little guideline on how to use the PHP 5.5 password hashing functions and its "library plugin" based PHP 5.3 & 5.4 implementation](http://www.dev-metal.com/use-php-5-5-password-hashing-functions/)
- [How to setup latest version of PHP 5.5 on Ubuntu 12.04 LTS](http://www.dev-metal.com/how-to-setup-latest-version-of-php-5-5-on-ubuntu-12-04-lts/). Same for Debian 7.0 / 7.1:
- [How to setup latest version of PHP 5.5 on Debian Wheezy 7.0/7.1 (and how to fix the GPG key error)](http://www.dev-metal.com/setup-latest-version-php-5-5-debian-wheezy-7-07-1-fix-gpg-key-error/)
- [Notes on password & hashing salting in upcoming PHP versions (PHP 5.5.x & 5.6 etc.)](https://github.com/panique/php-login/wiki/Notes-on-password-&-hashing-salting-in-upcoming-PHP-versions-%28PHP-5.5.x-&-5.6-etc.%29)
- [Some basic "benchmarks" of all PHP hash/salt algorithms](https://github.com/panique/php-login/wiki/Which-hashing-&-salting-algorithm-should-be-used-%3F)

## Themes / User Interfaces / Styles

Bookmark the highly related partner-project "[php-login-styles](https://github.com/panique/php-login-styles)" which
will host beautiful themes for all the php-login versions. Currently this is only a placeholder,
the project starts in early 2014.

## License

Licensed under [MIT](http://www.opensource.org/licenses/mit-license.php). You can use this script for free for any
private or commercial projects.

## Contribute

Please commit only in *develop* branch. The *master* branch will always contain the stable version.

## Support

If you think this script is useful and saves you a lot of work, then think about supporting the project by renting
a server at [HOST1PLUS](https://affiliates.host1plus.com/ref/devmetal/36f4d828.html).
