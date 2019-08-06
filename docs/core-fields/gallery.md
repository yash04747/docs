# Gallery

With the Gallery field, create a new gallery of images by selecting existing images or uploading new ones with the WordPress uploader.

<span style="display:block;text-align:center">![](./img/gallery.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`gallery`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the option.|
|subtitle|string||Subtitle display of the option, situated beneath the title.|
|desc|string||Description of the option, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|compiler|bool||Flag to run the compiler hook.  More info|
|required|array||Provide the parent, comparison operator, and value which affects the field's visibility.   More info|
|permissions|string||String specifying the capability required to view the section.   More info.|
|hint|array||Array containing the `content` and optional `title` arguments for the hint tooltip.  More info|

::: tip Also See
- [Using the `compiler` Argument](../configuration/arguments/compiler.md)
- [Using the `hints` Argument](../configuration/arguments/hints.md)
- [Using the `permissions` Argument](../configuration/arguments/permissions.md)
- [Using the `required` Argument](../configuration/arguments/required.md)
:::

## Example Declaration
```php
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id'       => 'opt-gallery',
    'type'     => 'gallery',
    'title'    => __('Add/Edit Gallery', 'redux-framework-demo'),
    'subtitle' => __('Create a new Gallery by selecting existing or uploading new images using the WordPress native uploader', 'redux-framework-demo'),
    'desc'     => __('This is the description field, again good for additional info.', 'redux-framework-demo'),
) );
```
## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>

The gallery field returns a comma separated value of the attachment IDs of the selected images.
```php
global $redux_demo;

echo '' . $redux_demo['opt-gallery'];
```
