# Select

The Select field displays information in a drop-down field in both single and multi-select formats.

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`select`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the option.|
|subtitle|string||Subtitle display of the option, situated beneath the title.|
|desc|string||Description of the option, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|compiler|bool||Flag to run the compiler hook.  More info|
|required|array||Provide the parent, comparison operator, and value which affects the field's visibility.  More info|
|options|array||Array of options in key pair format.  The key represents the ID of the option.  The value represents the text to appear in the selector.|
|default|string|string|Key value from the `options` array to set as default.|
|data|string||Value to populate the selector with WordPress values.  Accepts:  `category` `categories` `menu` `menus` `menu_location` `menu_locations` `page` `pages` `post` `posts` `post_type` `post_types` `tag` `tags` `taxonomy` `taxonomies` `roles` `sidebar` `sidebars` `capabilities`. To list icons, specify `elusive-icons`  More info|
|args|array||WordPress arguments for the specific data to be retrieved.|
|width|string|40%|Value to set the width of the selector.|
|multi|bool|false|Flag to set the multi-select variation of the field.|
|placeholder|string||Text to display in the selector when no value is present.|
|sortable|bool|false|Flag to enable data sorting.|
|select2|array||Array of select2 arguments.  For more information see the 'Constructor' section of the Select2 docs.|
|permissions|string||String specifying the capability required to view the section.   More info.|
|hint|array||Array containing the `content` and optional `title` arguments for the hint tooltip.  More info|

::: tip Also See
- [Using the `compiler` Arguments`](../guide/the-compiler-argument.md)
- [Using the `hints` Argument](../guide/the-hints-argument.md)
- [Using the `permissions` Argument](../guide/the-permissions-argument.md)
- [Using the `required` Argument](../guide/using-the-required-argument.md)
:::

## Standard Select
![](https://f.cloud.github.com/assets/3412363/1569797/d77655e8-50d4-11e3-8580-cf1eba05ea7e.png)

```php
    $fields = array(
        'id'       => 'opt-select',
        'type'     => 'select',
        'title'    => __('Select Option', 'redux-framework-demo'), 
        'subtitle' => __('No validation can be done on this field type', 'redux-framework-demo'),
        'desc'     => __('This is the description field, again good for additional info.', 'redux-framework-demo'),
        // Must provide key => value pairs for select options
        'options'  => array(
            '1' => 'Opt 1',
            '2' => 'Opt 2',
            '3' => 'Opt 3'
        ),
        'default'  => '2',
    );
```

## Multi Select
![](https://f.cloud.github.com/assets/3412363/1569753/520e4200-50d2-11e3-85e4-7807855811a0.png)

```php
$fields = array(
    'id'       => 'opt-multi-select',
    'type'     => 'select',
    'multi'    => true,
    'title'    => __('Multi Select Option', 'redux-framework-demo'), 
    'subtitle' => __('No validation can be done on this field type', 'redux-framework-demo'),
    'desc'     => __('This is the description field, again good for additional info.', 'redux-framework-demo'),
    //Must provide key => value pairs for radio options
    'options'  => array(
        '1' => 'Opt 1',
        '2' => 'Opt 2',
        '3' => 'Opt 3'),
    'default'  => array('2','3')
);
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>

```php
global $redux_demo;

echo 'Single Select value: ' . $redux_demo['opt-select'];
echo 'Multi Select value: '  . $redux_demo['opt-multi-select'][0];
echo 'Multi Select value: '  . $redux_demo['opt-multi-select'][1];
```

