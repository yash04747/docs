# Color Gradient

The Color Gradient controls allows for the selection of two separate colors, for use in any situation that requires gradient colors (i.e. Header, footer, sidebar, etc...).

<span style="display:block;text-align:center">![](./img/color_gradient.png)</span>

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`color_gradient`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the option.|
|subtitle|string||Subtitle display of the option, situated beneath the title.|
|desc|string||Description of the option, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|compiler|bool||Flag to run the compiler hook.  More info|
|required|array||Provide the parent, comparison operator, and value which affects the field's visibility.  More info|
|default|string||Array of default values. See 'Default Values' below.|
|validate|string||String value of `color` to validate the chosen color.  More info.|
|transparent|bool|true|Flag to set the visibility of the transparency checkbox.|
|permissions|string||String specifying the capability required to view the section.   More info.|
|hint|array||Array containing the `content` and optional `title` arguments for the hint tooltip. More info|

::: tip Also See
- [Using the `compiler` Arguments`](../guide/the-compiler-argument.md)
- [Using the `hints` Argument](../guide/the-hints-argument.md)
- [Using the `output` Argument](../guide/the-output-argument.md)
- [Using the `permissions` Argument](../guide/the-permissions-argument.md)
- [Using the `required` Argument](../guide/using-the-required-argument.md)
:::

## Default Values
|Name|Type|Description|
|--- |--- |--- |
|to|string|Hex string value for the left gradient color.|
|from|string|Hex string value for the right gradient color.|

::: warning Transparency
To set the transparency checkbox by default, use the string `transparent` in place of a string hex value in either the `to` or `from` argument.
:::

## Example Declaration
```php
$field = array(
    'id'       => 'opt-color-gradient',
    'type'     => 'color_gradient',
    'title'    => __('Header Gradient Color Option', 'redux-framework-demo'),
    'subtitle' => __('Only color validation can be done on this field type', 'redux-framework-demo'),
    'desc'     => __('This is the description field, again good for additional info.', 'redux-framework-demo'),
    'validate' => 'color',
    'default'  => array(
        'from' => '#1e73be',
        'to'   => '#00897e', 
    ),
);
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>

```php
global $redux_demo;

echo 'From color: ' . $redux_demo['opt-color-gradient']['from'];
echo 'To color: '   . $redux_demo['opt-color-gradient']['to'];
```