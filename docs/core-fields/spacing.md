# Spacing

The Spacing field allows the user to specify either padding or margin units to any HTML element or CSS selector that supports them.

<span style="display:block;text-align:center">![](./img/spacing.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`spacing`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the option.|
|subtitle|string||Subtitle display of the option, situated beneath the title.|
|desc|string||Description of the option, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|compiler|bool/array||Flag to run the compiler hook or array of CSS selectors to pass dynamic CSS to the compiler hook.  More info|
|output|array||Array of CSS selectors to dynamically generate CSS.  More info|
|required|array||Provide the parent, comparison operator, and value which affects the field's visibility.  More info|
|default|string||Array of default values. See 'Default Options' below.|
|units|array/string||String of a single unit or array of units.  Accepts: `px` `em` `%`.|
|units_extended|bool|false|Flag to allow users to select any type of unit.|
|display_units|bool|true|Flag to set the display of the units field when units are specified.|
|top|bool|true|Flag to display the top value input.|
|bottom|bool|true|Flag to display the bottom value input.|
|left|bool|true|Flag to display the left value input.|
|right|bool|true|Flag to display the right value input.|
|all|bool|false|Flag to display all position value inputs.|
|mode|string|'padding'|Accepts:  `absolute` `padding` or `margin`.|
|permissions|string||String specifying the capability required to view the section.   More info.|
|select2|array||Array of select2 arguments.  For more information see the 'Constructor' section of the Select2 docs.|
|hint|array||Array containing the `content` and optional `title` arguments for the hint tooltip.  More info|

::: tip Also See
- [Using the `compiler` Argument](../configuration/arguments/compiler.md)
- [Using the `hints` Argument](../configuration/arguments/hints.md)
- [Using the `output` Argument](../guide/the-output-argument.md)
- [Using the `permissions` Argument](../configuration/arguments/permissions.md)
- [Using the `required` Argument](../configuration/arguments/required.md)
:::

## Default Options
|Name|Type|Description|
|--- |--- |--- |
|*-top|string|Sets the top spacer value.|
|*-right|string|Sets the right spacer value.|
|*-bottom|string|Sets the bottom spacer value.|
|*-left|string|Sets the left spacer value.|
|units|string|Sets the default unit value in the unit selector.|

::: warning Notes
The asterisk at the beginning of these values is a wildcard value to be replaced with the `mode` name. For example, if the chosen `mode` is `margin`, the default names would be specified as `margin-top`, `margin-left`, etc. If the chosen `mode` is `padding`, the default names would be specified as `padding-top`, `padding-left`, etc.
When specifying your own units array, it will override the `units-extended` argument.
:::

## Example Declaration
```php
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id'             => 'opt-spacing',
    'type'           => 'spacing',
    'output'         => array('.site-header'),
    'mode'           => 'margin',
    'units'          => array('em', 'px'),
    'units_extended' => 'false',
    'title'          => __('Padding/Margin Option', 'redux-framework-demo'),
    'subtitle'       => __('Allow your users to choose the spacing or margin they want.', 'redux-framework-demo'),
    'desc'           => __('You can enable or disable any piece of this field. Top, Right, Bottom, Left, or Units.', 'redux-framework-demo'),
    'default'            => array(
        'margin-top'     => '1px', 
        'margin-right'   => '2px', 
        'margin-bottom'  => '3px', 
        'margin-left'    => '4px',
        'units'          => 'em', 
    )
) );
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>

```php
global $redux_demo;

echo 'Spacing top: '    . $redux_demo['opt-spacing']['margin-top'];
echo 'Spacing bottom: ' . $redux_demo['opt-spacing']['margin-bottom'];
echo 'Spacing left: '   . $redux_demo['opt-spacing']['margin-left'];
echo 'Spacing right: '  . $redux_demo['opt-spacing']['margin-right'];
```

