# Multi Text

Multi-Text field supports as many fields as one might need.  Adding and removing them is as simple as point and click.

<span style="display:block;text-align:center">![](./img/multi_text.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`multi_text`|Value identifying the field type.|
|add_text|string|`Add More`|Text to display on the `Add` button|
|show_empty|bool|`true`|Flag that permits the display of empty text boxes.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
- [Using the `validate` Argument](../configuration/fields/validate.md)
:::



## Example Declaration
<script>
import builder from './multi-text.json';
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
    'id'=>'multi-text',
    'type' => 'multi_text',
    'title' => __('Multi Text Option - Color Validated', 'redux-framework-demo'),
    'validate' => 'color',
    'subtitle' => __('If you enter an invalid color it will be removed. Try using the text "blue" as a color.  ;)', 'redux-framework-demo'),
    'desc' => __('This is the description field, again good for additional info.', 'redux-framework-demo')
    ),
) );
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>

```php
global $redux_demo;

echo 'First Text Entry: ' . $redux_demo['multi-text'][0];
// The array number of additional entries will increase by one.
```

