# Textarea

The Textarea field accepts any form of multi-line string input, including custom HTML.

<span style="display:block;text-align:center">![](./img/textarea.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`textarea`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|rows|int|6|Numbers of text rows to display.|
|autocomplete|boolean||If set to `false`, the autocomplete attribute will be set to `off`.|
|readonly|string||If set to `true`, the readonly attribute will be set to `readonly`.|

::: tip Also See
- [Default Field Object Arguments](../configuration/object-field.md#default-arguments)
- [Using the `attributes` Argument](../configuration/argument-attributes.md)
- [Using the `compiler` Argument](../configuration/argument-compiler.md)
- [Using the `hints` Argument](../configuration/argument-hints.md)
- [Using the `permissions` Argument](../configuration/argument-permissions.md)
- [Using the `required` Argument](../configuration/argument-required.md)
- [Using the `validate` Argument](../configuration/argument-validate.md)
:::

## Example Declaration
```php
$fields = array(
    'id'       =>'opt-textarea',
    'type'     => 'textarea',
    'title'    => __('Textarea Option - HTML Validated Custom', 'redux-framework-demo'), 
    'subtitle' => __('Custom HTML Allowed (wp_kses)', 'redux-framework-demo'),
    'desc'     => __('This is the description field, again good for additional info.', 'redux-framework-demo'),
    'default'  => '<br />Some HTML is allowed in here.<br />',
);
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in 
your [opt_name](../configuration/arguments-global.md#opt-name) argument.

```php
// Using the Redux API
echo Redux::get_option( 'OPT_NAME', 'FIELD_ID', 'DEFAULT_VALUE' );

// Using the global argment
global $redux_demo; // Same as your opt_name
echo $redux_demo['FIELD_ID'];
```

