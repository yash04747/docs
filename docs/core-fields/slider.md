# Slider

The Redux Slider Field offers a great array features for just about every need.  We offer dual handles, floating point values, text/label/select output and theme responsiveness!

<span style="display:block;text-align:center">![](./img/slider.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`slider`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the option.|
|subtitle|string||Subtitle display of the option, situated beneath the title.|
|desc|string||Description of the option, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|compiler|bool||Flag to run the compiler hook.  More info|
|output|array||Array of CSS selectors to dynamically generate CSS.  More info|
|required|array||Provide the parent, comparison operator, and value which affects the field's visibility.  More info|
|default|string||Value setting the default slider value.|
|min|int/float|0|Value setting the minimum slider value.|
|max|int/float|1|Value setting the maximum slider value.|
|step|int/float|1|Value setting the slider step value.|
|handles|int|1|Sets the number of slider handles, either `1` or `2`. Any other value will default to `1`|
|display_value|string|`text`|Sets output mode for the slider value. Accepted values include `none` for no output, `label` for a printed value, `text` for an editable text box, or `select` for a select box of values. Any other or incorrect values will default to `text`.|
|resolution|int/float|1|Sets the value's decimal significance. Acceptable values are: `1`, `0.1`, `0.01`, `0.001`, `0.0001`, `0.00001`. Any improper value will default to `1`.|
|float_mark|string|(decimal)|Sets the floating point marker to either `.` (decimal) or `,` (comma). Any other value will default to the decimal value.|
|permissions|string||String specifying the capability required to view the section.   More info.|
|select2|array||Array of select2 arguments. For more information see the 'Constructor' section of the Select2 docs.  Only applies when `display_value` is set to `select`.|
|hint|array||Array containing the `content` and optional `title` arguments for the hint tooltip.  More info|

::: tip Also See
- [Using the `compiler` Argument](../configuration/argument-compiler.md)
- [Using the `hints` Argument](../configuration/argument-hints.md)
- [Using the `permissions` Argument](../configuration/argument-permissions.md)
- [Using the `required` Argument](../configuration/argument-required.md)
:::

::: warning NOTE
When setting the `resolution` argument to a floating point value, it will also be necessary to set the `step` argument to a floating point for values after the decimal point to change value. Not doing so will result in the value to the left of the decimal changing value upon slide.
:::

## Example Declaration
```php
$fields = array(
    array(
        'id'        => 'opt-slider-label',
        'type'      => 'slider',
        'title'     => __('Slider Example 1', 'redux-framework-demo'),
        'subtitle'  => __('This slider displays the value as a label.', 'redux-framework-demo'),
        'desc'      => __('Slider description. Min: 1, max: 500, step: 1, default value: 250', 'redux-framework-demo'),
        "default"   => 250,
        "min"       => 1,
        "step"      => 1,
        "max"       => 500,
        'display_value' => 'label'
    ),
    array(
        'id' => 'opt-slider-text',
        'type' => 'slider',
        'title' => __('Slider Example 2 with Steps (5)', 'redux-framework-demo'),
        'subtitle' => __('This example displays the value in a text box', 'redux-framework-demo'),
        'desc' => __('Slider description. Min: 0, max: 300, step: 5, default value: 75', 'redux-framework-demo'),
        "default" => 75,
        "min" => 0,
        "step" => 5,
        "max" => 300,
        'display_value' => 'text'
    ),
    array(
        'id' => 'opt-slider-select',
        'type' => 'slider',
        'title' => __('Slider Example 3 with two sliders', 'redux-framework-demo'),
        'subtitle' => __('This example displays the values in select boxes', 'redux-framework-demo'),
        'desc' => __('Slider description. Min: 0, max: 500, step: 5, slider 1 default value: 100, slider 2 default value: 300', 'redux-framework-demo'),
        "default" => array(
            1 => 100,
            2 => 300,
        ),
        "min" => 0,
        "step" => 5,
        "max" => "500",
        'display_value' => 'select',
        'handles' => 2,
    ),
    array(
        'id' => 'opt-slider-float',
        'type' => 'slider',
        'title' => __('Slider Example 4 with float values', 'redux-framework-demo'),
        'subtitle' => __('This example displays float values', 'redux-framework-demo'),
        'desc' => __('Slider description. Min: 0, max: 1, step: .1, default value: .5', 'redux-framework-demo'),
        "default" => .5,
        "min" => 0,
        "step" => .1,
        "max" => 1,
        'resolution' => 0.1,
        'display_value' => 'text'
    )
);
```

### Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>

```php
global $redux_demo;

echo 'Slider label value: '  . $redux_demo['opt-slider-label'];
echo 'Slider text value: '   . $redux_demo['opt-slider-text'];
echo 'Slider select value: ' . $redux_demo['opt-slider-select'];
echo 'Slider float value: '  . $redux_demo['opt-slider-float'];
```

