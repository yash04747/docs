# CSS Layout

The CSS Layout extension is a new way to set margins, padding and borders (including radius) all from one field.  

## Getting Started
To understand how to use extensions, you should read this article on <a href="/redux-framework/advanced/loading-extensions/">Loading Extensions</a>. To shortcut the process, you should use the <a href="http://generate.reduxframework.com/" target="_blank">Redux Generator</a>. Please be aware that a working knowledge of PHP and CSS is required to properly use this field. Should you not be familiar with one or the other (or both), please refer to the basic guides to get you started: <a href="http://www.php.net/manual/en/tutorial.php">Getting Started with PHP</a>, <a href="http://www.w3schools.com/css/css_intro.asp">CSS Introduction</a>.

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`css_layout`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the field.|
|subtitle|string||Subtitle display of the field, situated beneath the title.|
|desc|string||Description of the field, appearing beneath the field control.|
|class|string||Appends any number of classes to the field`s class attribute.|
|compiler|bool/array|false|Flag to run the compiler hook or array of CSS selectors to pass dynamic CSS to the compiler hook.  More info|
|output|array||Array of CSS selectors to dynamically generate CSS.  More info|
|output-shorthand|bool|false|Flag to set whether or not outputted CSS for `margin`, `border`, and `padding` is in shorthand format.|
|units|array|`%`, `px`, `in`, `cm`, `mm`, `em`, `rem`, `ex`, `pt`, `pc`|Array of permissible units to be used in the CSS layout field.  Units not specified in this array will be rejected and replaced with the default.|
|margin-unit|string|`px`|Default unit for the margin layout.|
|border-unit|string|`px`|Default unit for the border layout.|
|radius-unit|string|`px`|Default unit for the border radius.|
|padding-unit|string|`px`|Default unit for the padding layout.|
|required|array||Provide the parent, comparison operator, and value which affects the field`s visibility.  More info|
|default|array||Array of default values to appear inside the CSS layout field.  See `CSS Layout Defaults` below.|
|options|array||Array of options defining the CSS Layout field.  See `CSS Layout Options` below.|
|placeholder|string|-|Text to display in the input fields when no value is present.|
|hint|array||Array containing the `content` and optional `title` arguments for the hint tooltip. More info|


## CSS Layout Defaults
Margin, border, and padding values may set be in one of two ways.  Via shorthand properties using the `margin`, `border`, and `padding` arguments, or individually using the `*-top`, `*-right`, `*-bottom` and `*-left` arguments.  While it's possible to set both, it's best to use one or the other, not both.  Individual arguments will override the shorthand arguments.

A shorthand property is expressed using up to four values to set the four value in the following order: <strong>top, right, bottom, left</strong>.  Settings a single value using the shorthand method will fill out all inputs for that level.

Arguments may be set with or without a unit value.  Values without a unit value will automatically be assigned it's default value, set in the `margin-unit`, `border-unit`, `padding-unit` and `radius-unit` arguments (see above).  Unit values set in the default will override the default unit value.

|Name|Type|Default|Description|
|--- |--- |--- |--- |
|margin|string||String of margin shorthand properties setting the margin values.|
|margin-top|string/int||Margin-top value.  If the unit value is omitted, the margin-unit default will be used.|
|margin-right|string/int||Margin-right value.  If the unit value is omitted, the margin-unit default will be used.|
|margin-bottom|string/int||Margin-bottom value.  If the unit value is omitted, the margin-unit default will be used.|
|margin-left|string/int||Margin-left value.  If the unit value is omitted, the margin-unit default will be used.|
|border|string||String of border shorthand properties setting the border values.|
|border-top|string/int||Border-top value.  If the unit value is omitted, the border-unit default will be used.|
|border-right|string/int||Border-right value.  If the unit value is omitted, the border-unit default will be used.|
|border-bottom|string/int||Border-bottom value.  If the unit value is omitted, the border-unit default will be used.|
|border-left|string/int||Border-left value.  If the unit value is omitted, the border-unit default will be used.|
|padding|string||String of padding shorthand properties setting padding values.|
|padding-top|string/int||Padding-top value.  If the unit value is omitted, the padding-unit default will be used.|
|padding-right|string/int||Padding-right value.  If the unit value is omitted, the padding-unit default will be used.|
|padding-bottom|string/int||Padding-bottom value.  If the unit value is omitted, the padding-unit default will be used.|
|padding-left|string/int||Padding-left value.  If the unit value is omitted, the padding-unit default will be used.|
|border-radius|string/int||Border-radius value.  If the unit value is omitted, the radius-unit default will be used.|
|border-color|string|'#ffffff'|Hex string value settings the border color value.|
|border-style|string|'solid'|Border style.  Accepted values:  `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`, `none`.|

::: tip
The `border-color`, `border-radius` and `border-style` properties CANNOT be set using shorthand via the `border` argument.  They must be set via their own arguments.
:::



## CSS Layout Options
The margin, border, and padding levels of the CSS layout field may be enabled or disabled, depending on your particular needs.  When a level is disabled, default values (if set) will be displayed, although the user will be unable to edit them.

The radius inputs for value, color and style may also be independently enabled or disabled.

|Name|Type|Default|Description|
|--- |--- |--- |--- |
|margin_enabled|bool|true|Flag to enable or disable margin inputs.|
|border_enabled|bool|true|Flag to enable or disable border inputs.|
|padding_enabled|bool|true|Flag to enable or disable padding inputs.|
|radius_enabled|bool|true|Flag to enable or disable the radius value input.|
|color_enabled|bool|true|Flag to enable or disable the radius color selector.|
|style_enabled|bool|true|Flag to enable or disable the radius style selector.|


## Example Declaration

```php
array(
    'id'        => 'opt-css-layout',
    'type'      => 'css_layout',
    'title'     => 'CSS Layout',
    'subtitle'  => 'CSS layouts',

    // Any CSS selector set here will have all values indicated
    // in the CSS layout field applied to it.
    'output'    => array('.navbar'),

    // Default unit values.
    'margin-unit'  => 'px',
    'border-unit'  => 'px',
    'padding-unit' => 'px',
    'radius-unit'  => 'px',

    // Default values
    'default'   => array(

        // Shorthand method to assign values to the margin level.
        // Unit values are not required, however, when unit values
        // are set here, they will override the default values
        // indicated above.
        'margin'        => '5em 10em 20em 3em',

        // Alternative method to set layout values for the margin level.
        // Again, unit values are not required, and will be assigned the
        // default values indicated above.
        // 'margin-top' => 5,
        // 'margin-top' => 10,
        // 'margin-top' => 20,
        // 'margin-top' => 3,

        // Because we indicated a single value, all border inputs will
        // be set to 2.
        'border'        => '2',
        'border-color'  => '#ff0000',
        'border-style'  => 'solid',
        'border-radius' => '12px'
    ),

    // CSS Layout options
    // For this example, we are disabling the padding field.
    'options'        => array(
        'margin_enabled'    => true,
        'border_enabled'    => true,
        'radius_enabled'    => true,
        'padding_enabled'   => false,
        'radius_enabled'    => true,
        'color_enabled'     => true,
        'style_enabled'     => true,
    )
),
```

## Example Usage
This example in based on the example usage provided above. Be sure to change $redux_demo to the value you specified in your <a href="/redux-framework/arguments/opt_name/" title="opt_name">opt_name</a> argument.

```php
global $redux_demo;

echo 'Margin: ' . $redux_demo['opt-css-layout']['margin'];
// Output: 5em 10em 20em 3em

echo 'Margin top: ' . $redux_demo['opt-css-layout']['margin-top'];
// Output: 5em

echo 'Margin right: ' . $redux_demo['opt-css-layout']['margin-right'];
// Output: 10em

echo 'Margin bottom: ' . $redux_demo['opt-css-layout']['margin-bottom'];
// Output: 20em

echo 'Margin left: ' . $redux_demo['opt-css-layout']['margin-left'];
// Output: 3em

echo 'Border radius: ' . $redux_demo['opt-css-layout']['border-radius'];
// Output: 12px

echo 'Border color: ' . $redux_demo['opt-css-layout']['border-color'];
// Output: #ff0000

echo 'Border style: ' . $redux_demo['opt-css-layout']['border-style'];
// Output: solid

```
## CSS Output
The CSS output from the above example would appear as thus:
```css
.navbar {
    margin-top:    5em;
    margin-bottom: 1em;
    margin-left:   3em;
    margin-right:  4em;

    /* If the output_shorthand argument is set, the above
       would appear as the following shorthand:

       margin: 5em 1em 3em 4em; */

    border-top:    2px;
    border-radius: 12px;
    border-color:  #ff0000;
    border-style:  solid;
}
```
