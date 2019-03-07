---
title: "Advanced: Updating a CSS File Dynamically"
---

# Updating a CSS File Dynamically

One of Redux's most underrated features is the ability to update a CSS file on your server dynamically using compiler 
output. In other words, it's possible to update a single CSS's file contents when a user changes any given option. It's 
one step above using Redux's `output` feature which updates the CSS within the actual page. Yes, we give you *both* 
options! This article covers the compiler output option.

::: warning Table of Contents
[[toc]]
:::

## Setting up the `compiler_action` function
For purposes of this article, we're going to use the sample-config.php file that comes with the Redux installation. If 
you are using a different config file, you'll need to update it as needed. First, in the `initSettings` function of the 
sample-config is a commented out line that reads:

```php
add_filter('redux/options/'.$this->args['opt_name'].'/compiler', array( $this, 'compiler_action' ), 10, 3);
```

Uncomment this line. If you do not see this line, add it.

Next, included with the sample-config is a function titled `compiler_action`. The contents of this function are 
commented out by default. They will need to be uncommented so it looks like the following:

```php
function compiler_action($options, $css, $changed_values) {
    global $wp_filesystem;

    $filename = dirname(__FILE__) . '/style.css';

    if( empty( $wp_filesystem ) ) {
        require_once( ABSPATH .'/wp-admin/includes/file.php' );
        WP_Filesystem();
    }

    if( $wp_filesystem ) {
        $wp_filesystem->put_contents(
            $filename,
            $css,
            FS_CHMOD_FILE // predefined mode settings for WP files
        );
    }
}
```

The `compiler_action` function passes two variables. The first is `$options` which in an array of the option values. The 
second is `$css`, which are the CSS selectors passed via the compiler argument, which is discussed later on.

Please note the second line of the code block that sets the `$filename` variable. It's the path (not URL) to a file 
called `style.css` which is assumed is in the same directory as your config file. If the CSS file you wish to update is 
located someplace else or named something different, you'll need to update the path statement on that line accordingly. 
Nothing else in the provided code block needs to (or should) be changed. Of course, if addition code is required to 
manipulate the CSS output, it should be added in the function as well.

## The compiler argument
All that left to do at this point is to include a `'compiler' => array()` key/pair argument in the field array you'd 
like to pass CSS selectors. For this example, we'll use the `color` field. The following could be placed in the `fields` 
argument in any [Getting Started with Sections](../configuration/object-section.md) array.

```php
array(
    'id'       => 'color-background',
    'type'     => 'color',
    'compiler' => array('body'),
    'title'    => __('Body Background Color', 'redux-framework-demo'),
    'subtitle' => __('Pick a background color for the theme (default: #fff).', 'redux-framework-demo'),
    'default'  => '#FFFFFF',
    'validate' => 'color',
)
```
When the option is updated, the CSS file is also updated with the newly chosen color. By default, Redux assign the new 
value to the `color:` selector. If you'd prefer to assign the value to a different selector, specify it via the field's 
`mode` argument (i.e. - `'mode' => 'background-color'`). Since the value of the compiler argument is an array, selectors 
may be chained should you want to update multiple selector values. For example this chain would update multiple CSS 
selectors:

```php
'compiler' => array( 'body', '.site-title', '.site-footer' )
```

Any [field](../configuration/object-field.md) that supports `output` also supports compiler output. To verify if a 
[field](../configuration/object-field.md) you'd like to use is output ready, please review the list of 
[available fields](../core-fields).

