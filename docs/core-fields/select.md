# Select

The Select field displays information in a drop-down field in both single and multi-select formats.

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`select`|Value identifying the field type.|
|options|array||Array of options in key pair format.  The key represents the ID of the option.  The value represents the text to appear in the selector.|
|width|string|40%|Value to set the width of the selector.|
|multi|bool|`false`|Flag to set the multi-select variation of the field.|
|placeholder|string||Text to display in the selector when no value is present.|
|sortable|bool|`false`|Flag to enable data sorting.|
|select2|array||Array of select2 arguments.  For more information see the 'Constructor' section of the Select2 docs.|
|ajax|bool|`false`|Set to true to use ajax to fetch options when the [data](../configuration/fields/data.md) argument is used. **Requires Redux 4.x**|
|min-input-length|integer|`1`|For use when the `ajax` flag is set to true. This controls how many charactrs must be typed before an ajax request is performed. **Requires Redux 4.x**|


::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `data` Argument](../configuration/fields/data.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

## Standard Select
![](https://f.cloud.github.com/assets/3412363/1569797/d77655e8-50d4-11e3-8580-cf1eba05ea7e.png)

```php
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
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
) );
```

## Multi Select
![](https://f.cloud.github.com/assets/3412363/1569753/520e4200-50d2-11e3-85e4-7807855811a0.png)

```php
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
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
) );
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>

```php
global $redux_demo;

echo 'Single Select value: ' . $redux_demo['opt-select'];
echo 'Multi Select value: '  . $redux_demo['opt-multi-select'][0];
echo 'Multi Select value: '  . $redux_demo['opt-multi-select'][1];
```

