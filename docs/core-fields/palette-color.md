# Palette Color

The Palette Color field allows you to display a set of color palettes that a theme or plugin might use throughout, giving your users a choice of UI colors.

<span style="display:block;text-align:center">![](./img/palette_color.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`palette`|Value identifying the field type.|
|palettes|array||An array of individual arrays defining the color palettes.  See "Setting Palettes" below.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

## Setting Palettes
Each palette in the palettes argument is a key/pair array that defines each individual palette.  The key of the array is the palette name.  Assigned to the key is an array of hex colors to be displayed in the palette entry.  See the example below for a complete breakdown.


## Example Declaration
<script>
import builder from './palette-color.json';
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
Redux::setSection( 'OPT_NAME', array(
    'title'      => __( 'Palette Colors', 'redux-framework-demo' ),
    'desc'       => __( 'For full documentation on this field, visit: ', 'redux-framework-demo' ) . '<a href="//docs.reduxframework.com/core/fields/palette-color/" target="_blank">docs.reduxframework.com/core/fields/palette-color/</a>',
    'id'         => 'color-palette',
    'subsection' => true,
    'fields'     => array(
        array(
            'id'       => 'opt-palette-color',
            'type'     => 'palette',
            'title'    => __( 'Palette Color Option', 'redux-framework-demo' ),
            'subtitle' => __( 'Only color validation can be done on this field type', 'redux-framework-demo' ),
            'desc'     => __( 'This is the description field, again good for additional info.', 'redux-framework-demo' ),
            'default'  => 'red',
            'palettes' => array(
                'red'  => array(
                    '#ef9a9a',
                    '#f44336',
                    '#ff1744',
                ),
                'pink' => array(
                    '#fce4ec',
                    '#f06292',
                    '#e91e63',
                    '#ad1457',
                    '#f50057',
                ),
                'cyan' => array(
                    '#e0f7fa',
                    '#80deea',
                    '#26c6da',
                    '#0097a7',
                    '#00e5ff',
                ),
            )
        ),
    )
) );
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.  </a>

This field does NOT return the palette array.  It returns the name of the selected palette.  Ideally, the developer will have set the palette colors in their CSS, using the palette key name as the CSS selector.

```php
global $redux_demo;

echo 'Selected palette: ' . $redux_demo['opt-palette-color'];

// Outputs: Selected palette: red 
```
