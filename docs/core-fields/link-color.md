# Link Color

With the Link Color field, setting the hyperlink properties in a project is as east as selecting the desired colors.

<span style="display:block;text-align:center">![](./img/link_color.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`link_color`|Value identifying the field type.|
|regular|bool|`true`|Flag to display the regular hyperlink color picker.|
|hover|bool|`true`|Flag to display the hover hyperlink color picker.|
|visited|bool|`true`|Flag to display the visited hyperlink color picker.|
|active|bool|`true`|Flag to display the active hyperlink color picker.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `output` Argument](../configuration/fields/output.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
- [Using the `validate` Argument](../configuration/fields/validate.md)
:::


## Default Options
|Name|Type|Description|
|--- |--- |--- |
|regular|string|Hex string for the default regular hyperlink color.|
|hover|string|Hex string for the default hover hyperlink color.|
|active|string|Hex string for the default active hyperlink color.|
|visited|string|Hex string for the default visited hyperlink color.|


## Example Declaration
<script>
import builder from './link-color.json';
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
    'id'       => 'opt-link-color',
    'type'     => 'link_color',
    'title'    => __('Links Color Option', 'redux-framework-demo'),
    'subtitle' => __('Only color validation can be done on this field type', 'redux-framework-demo'),
    'desc'     => __('This is the description field, again good for additional info.', 'redux-framework-demo'),
    'default'  => array(
        'regular'  => '#1e73be', // blue
        'hover'    => '#dd3333', // red
        'active'   => '#8224e3',  // purple
        'visited'  => '#8224e3',  // purple
    )
) );
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your [opt_name](../configuration/global_arguments.md#opt_name) argument.

```php
global $redux_demo;

echo 'Regular color value: ' . $redux_demo['opt-link-color']['regular'];
echo 'Hover color value: '   . $redux_demo['opt-link-color']['hover'];
echo 'Active color value: '  . $redux_demo['opt-link-color']['active'];
echo 'Visited color value: ' . $redux_demo['opt-link-color']['visited'];
```

