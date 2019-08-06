# Sortable

The Sortable field allows for an unlimited array of drag-and-drop text box inputs or check boxes.

<span style="display:block;text-align:center">![](./img/sortable.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`sortable`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the option.|
|subtitle|string||Subtitle display of the option, situated beneath the title.|
|desc|string||Description of the option, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|compiler|bool||Flag to run the compiler hook.  More info|
|required|array||Provide the parent, comparison operator, and value which affects the field's visibility.  More info|
|options|array||Array of key pair data defining the input objects.  The key represents the object's ID.  The second the display text.  See the example.|
|default|array||Default value in key pair format to match the selected option.|
|label|bool|false|Flag to display values before text areas when mode is not checkbox.|
|mode|string|`text`|Sets the mode of the input objects text or checkbox.|
|permissions|string||String specifying the capability required to view the section.   More info.|
|hint|array||Array containing the content and optional title arguments for the hint tooltip.  More info|

::: tip Also See
- [Using the `compiler` Argument](../configuration/arguments/compiler.md)
- [Using the `hints` Argument](../configuration/arguments/hints.md)
- [Using the `permissions` Argument](../configuration/arguments/permissions.md)
- [Using the `required` Argument](../configuration/arguments/required.md)
:::

## Example Declaration
```php
// Checkbox mode
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id'       => 'text-sortable',
    'type'     => 'sortable',
    'title'    => __('Sortable Text Option', 'redux-framework-demo'),
    'subtitle' => __('Define and reorder these however you want.', 'redux-framework-demo'),
    'desc'     => __('This is the description field, again good for additional info.', 'redux-framework-demo'),
    'mode'     => 'checkbox',
    'options'  => array(
        '1'     => 'Item 1',
        '2'     => 'Item 2',
        '3'     => 'Item 3',
    ),
    // For checkbox mode
    'default' => array(
        '1' => false,
        '2' => true,
        '3' => false
    ),
) );
```

#### Text mode
```php

Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id'       => 'text-sortable',
    'type'     => 'sortable',
    'title'    => __('Sortable Text Option', 'redux-framework-demo'),
    'subtitle' => __('Define and reorder these however you want.', 'redux-framework-demo'),
    'desc'     => __('This is the description field, again good for additional info.', 'redux-framework-demo'),
    'mode'     => 'text',
    'options' => array(
         '1' => 'Item number one',
         '2' => 'Number two here',
         '3' => 'Three strikes, yer out!',
    ),
) );
```
## Example Usage
This example in based on the example usage provided above. Be sure to change $redux_demo to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">opt_name argument.</a>

```php
global $redux_demo;

echo 'Text 1 value' . $redux_demo['text-sortable']['1'];
echo 'Text 2 value' . $redux_demo['text-sortable']['2'];
echo 'Text 3 value' . $redux_demo['text-sortable']['3'];
```

