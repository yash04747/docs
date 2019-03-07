---
title: "Advanced: Increasing the WordPress Memory Limit"
---

# Increasing the WordPress Memory Limit

Edit your `wp-config.php` file and enter something similar to the following:

```php
define( 'WP_MEMORY_LIMIT', '96M' );
```

::: tip
WordPress memory can be different to the server – you need to set this regardless of server memory settings
:::

[http://codex.wordpress.org/Editing_wp-config.php#Increasing_memory_allocated_to_PHP](http://codex.wordpress.org/Editing_wp-config.php#Increasing_memory_allocated_to_PHP)


If you have access to your PHP.ini file, change the line in PHP.ini

If your line shows 32M try 64M:

```text
memory_limit = 64M ; Maximum amount of memory a script may consume (64MB)
```

If you don’t have access to PHP.ini try adding this to an .htaccess file:

```text
php_value memory_limit 64M
```

If none of the above works then talk to your host.