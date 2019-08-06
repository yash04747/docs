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
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the option.|
|subtitle|string||Subtitle display of the option, situated beneath the title.|
|desc|string||Description of the option, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|compiler|bool||Flag to run the compiler hook.   More info|
|output|array||Array of CSS selectors to dynamically generate CSS.   More info|
|required|array||Provide the parent, comparison operator, and value which affects the field's visibility.   More info|
|validate|string||String value of `color` to validate the chosen color.  More info.|
|default|array||Array of default values to provide for multiple text boxes.|
|add_text|string|`Add More`|Text to display on the `Add` button|
|show_empty|bool|true|Flag that permits the display of empty text boxes.|
|permissions|string||String specifying the capability required to view the section.   More info.|
|hint|array||Array containing the `content` and optional `title` arguments for the hint tooltip.  More info|


::: tip Also See
- [Using the `compiler` Argument](../configuration/arguments/compiler.md)
- [Using the `hints` Argument](../configuration/arguments/hints.md)
- [Using the `permissions` Argument](../configuration/arguments/permissions.md)
- [Using the `required` Argument](../configuration/arguments/required.md)
- [Using the `validate` Argument](../configuration/arguments/validate.md)
:::

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

