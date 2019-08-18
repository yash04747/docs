# Select Image

The Select Image field offers the ability to populate a drop-down field with an array of images names.  When selected, a preview of the image appears underneath.

<span style="display:block;text-align:center">![](./img/select_image.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`select_image`|Value identifying the field type.|
|options|array||Any array of options in key pair format. For example `'img_name' => 'img_path'`.|
|default|string||Full url to the default image.|
|placeholder|string|`Select an item`|Text to display in the selector when no value is present.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

## Example Declaration
```php
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id'       => 'opt-select-image',
    'type'     => 'select_image',
    'title'    => __('Select Image', 'redux-framework-demo'),
    'subtitle' => __('A preview of the selected image will appear underneath the select box.', 'redux-framework-demo'),
    'desc'     => __('This is the description field, again good for additional info.', 'redux-framework-demo'),
    'options'  => Array(
        Array (
             'alt'  => 'Image Name 1',
             'img'  => path_to_img_1,
        ),
        Array (
             'alt'  => 'Image Name 2',
             'img'  => path_to_img_2,
        )
    ),
    'default'  => path_to_img_1,
) );
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>

```php
global $redux_demo;

echo '' . $redux_demo['opt-select-image'];
```
