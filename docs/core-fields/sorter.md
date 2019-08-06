# Sorter

The Sorter field enabled the user to specify blocks that can be organized between the Enabled and Disabled columns via drag-and-drop.

<span style="display:block;text-align:center">![](./img/sorter.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`sorter`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the option.|
|subtitle|string||Subtitle display of the option, situated beneath the title.|
|desc|string||Description of the option, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|compiler|bool||Flag to run the compiler hook.  More info|
|required|array||Provide the parent, comparison operator, and value which affects the field's visibility.  More info|
|options|array||Array specifying the enabled or disables state for the individual blocks.  See 'Options Array' below.|
|data|string||String value that populates the check boxes with WordPress values.  Accepts:  `category` `categories` `menu` `menus` `menu_location` `menu_locations` `page` `pages` `post` `posts` `post_type` `post_types` `tag` `tags`.  More info|
|args|array||Array of WordPress arguments for the specific data to be retrieved.|
|permissions|string||String specifying the capability required to view the section.   More info.|
|hint|array||Array containing the `content` and optional `title` arguments for the hint tooltip.  More info|

::: tip Also See
- [Using the `compiler` Argument](../configuration/arguments/compiler.md)
- [Using the `hints` Argument](../configuration/arguments/hints.md)
- [Using the `permissions` Argument](../configuration/arguments/permissions.md)
- [Using the `required` Argument](../configuration/arguments/required.md)
:::

### Options Array
|Name|Type|Description|
|--- |--- |--- |
|disabled|array|key pair value for the disabled column.|
|enabled|array|key pair value for the enabled column.|

The first parameter of the value pair must be a string type representing a unique ID for the element.  The second parameter must be a string type representing the display name of the element. See the code below for an example.

::: tip IMPORTANT
The key pair of `'placebo' => 'placebo'` IS NO LONGER REQUIRED.
:::

## Example Declaration

```php
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id'      => 'homepage-blocks',
    'type'    => 'sorter',
    'title'   => 'Homepage Layout Manager',
    'desc'    => 'Organize how you want the layout to appear on the homepage',
    'options' => array(
        'enabled'  => array(
            'highlights' => 'Highlights',
            'slider'     => 'Slider',
            'staticpage' => 'Static Page',
            'services'   => 'Services'
        ),
        'disabled' => array(
        )
    ),
) );
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>
```php
global $redux_demo;

echo 'Enabled column' . '<br />'; 
print_r ($redux_demo['homepage-blocks']['enabled']);

echo 'Disabled column' . '<br />'; 
print_r ($redux_demo['homepage-blocks']['disabled']);
```

This example is a real-use example in case you were looking to include a template.

```php
global $redux_options;
$layout = $redux_options['home_blocks']['enabled'];

if ( $layout ): foreach ( $layout as $key => $value ) {
    switch($key) {
        case 'slider': get_template_part( 'templates/content', 'slider' );
        break;

        case 'highlights': get_template_part( 'templates/content', 'highlights' );
        break;

        case 'services': get_template_part( 'templates/content', 'services' );
        break;
        
        case 'staticpage': get_template_part( 'templates/content', 'staticpage' );    
        break;  
    }
}

endif;
```

