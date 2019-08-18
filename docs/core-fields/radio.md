# Radio

The Radio field is an excellent way to present a set of choices for users to select from.

<span style="display:block;text-align:center">![](./img/radio.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`radio`|Value identifying the field type.|
|options|array||Array of key pair values representing the radio buttons.  The key value should be numbers in sequential order, beginning with `1`.  The value parameter accepts the text to display beside the radio button.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `data` Argument](../configuration/fields/data.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

### Example Declaration
```php
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id'       => 'opt-radio',
    'type'     => 'radio',
    'title'    => __('Radio Option', 'redux-framework-demo'), 
    'subtitle' => __('No validation can be done on this field type', 'redux-framework-demo'),
    'desc'     => __('This is the description field, again good for additional info.', 'redux-framework-demo'),
    //Must provide key => value pairs for radio options
    'options'  => array(
        '1' => 'Opt 1', 
        '2' => 'Opt 2', 
        '3' => 'Opt 3'
    ),
    'default' => '2'
) );
```

### Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a> Only the key of the select `options` array item will be returned.

```php
global $redux_demo;

echo 'Selected Radio value: ' . $redux_demo['opt-radio'];
```
