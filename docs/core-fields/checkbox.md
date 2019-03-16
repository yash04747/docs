# Checkbox

The Checkbox field may be used to offer a single check option, or a group of multi-check options.

<span style="display:block;text-align:center">![](./img/checkbox.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`checkbox`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the option.|
|subtitle|string||Subtitle display of the option, situated beneath the title.|
|desc|string||Description of the option, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|compiler|bool||Flag to run the compiler hook.  More info|
|required|array||Provide the parent, comparison operator, and value which affects the field's visibility.  More info|
|options|array||Array of key pair values representing the individual check boxes.  They key represents the ID of the checkbox, the value is the text displayed next to the checkbox.|
|default|vari||String/int or array values depending on whether or not multiple check boxes are used.  See 'Default Option' below.|
|permissions|string||String specifying the capability required to view the section.   More info.|
|hint|array||Array containing the `content` and optional `title` arguments for the hint tooltip. More info|
|data|string||String value that populates the check boxes with WordPress values.  Accepts:  `category` `categories` `menu` `menus` `menu_location` `menu_locations` `page` `pages` `post` `posts` `post_type` `post_types` `tag` `tags`.  More info|
|args|array||Array of WordPress arguments for the specific data to be retrieved.|


::: tip Also See
- [Using the `compiler` Arguments`](../guide/the-compiler-argument.md)
- [Using the `hints` Argument](../guide/the-hints-argument.md)
- [Using the `permissions` Argument](../guide/the-permissions-argument.md)
:::

## Default Options

When using a single checkbox, the `default` argument accepts a string/int/bool representing with 0/false or 1/true.  When using multi-checkbox, the `default` argument accepts an array of key pair values.  They key represents the id of the checkbox, the value either a 0/false or 1/true value.

## Example Declaration
#### Single Checkbox
```php
$field = array(
    'id'       => 'opt_checkbox',
    'type'     => 'checkbox',
    'title'    => __('Checkbox Option', 'redux-framework-demo'), 
    'subtitle' => __('No validation can be done on this field type', 'redux-framework-demo'),
    'desc'     => __('This is the description field, again good for additional info.', 'redux-framework-demo'),
    'default'  => '1'// 1 = on | 0 = off
);
```

#### Multi Checkbox
```php
$field = array(
    'id'       => 'opt_multi_checkbox',
    'type'     => 'checkbox',
    'title'    => __('Multi Checkbox Option', 'redux-framework-demo'), 
    'subtitle' => __('No validation can be done on this field type', 'redux-framework-demo'),
    'desc'     => __('This is the description field, again good for additional info.', 'redux-framework-demo'),

    //Must provide key => value pairs for multi checkbox options
    'options'  => array(
        '1' => 'Opt 1',
        '2' => 'Opt 2',
        '3' => 'Opt 3'
    ),

    //See how default has changed? you also don't need to specify opts that are 0.
    'default' => array(
        '1' => '1', 
        '2' => '0', 
        '3' => '0'
    )
);
```


## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>

#### Single checkbox
```php
$global $redux_demo;

echo 'Checkbox value: ' . $redux_demo['opt_checkbox'];
```

#### Multi checkbox
```php
$global $redux_demo;

echo 'First checkbox value: '  . $redux_demo['opt_checkbox']['1'];
echo 'Second checkbox value: ' . $redux_demo['opt_checkbox']['2'];
echo 'Third checkbox value: '  . $redux_demo['opt_checkbox']['3'];

```