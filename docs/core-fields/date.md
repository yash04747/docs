# Date

The Date field displays the popup jQuery datebox when clicking on the text input.

<span style="display:block;text-align:center">![](./img/date.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`date`|Value identifying the field type.|
|placeholder|string||The default text to display in the text input when no value is present.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::


## Example Declaration
<script>
import builder from './date.json';
export default {
    data () {
        return {
            builder: builder,
            defaults: {
                'color'       : '#333', 
                'font-style'  : '700', 
                'font-family' : 'Abel', 
                'google'      : true,
                'font-size'   : '33px', 
                'line-height' : '40'
            }
        };
    }
}
</script>
<builder :builder_json="builder" :builder_defaults="defaults" />

## Example Declaration
```php
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id'          => 'opt-date',
    'type'        => 'date',
    'title'       => __('Date Option', 'redux-framework-demo'), 
    'subtitle'    => __('No validation can be done on this field type', 'redux-framework-demo'),
    'desc'        => __('This is the description field, again good for additional info.', 'redux-framework-demo'),
    'placeholder' => 'Click to enter a date'
) );
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>

```php
global $redux_demo;

echo '' . $redux_demo['opt-date'];
```

