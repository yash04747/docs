# Media

The media field is an adaption for a core WordPress feature.

<span style="display:block;text-align:center">![](./img/media.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Video Tutorial

[embed width="800" height="400"]http://youtu.be/kEZYIWSk1Tk[/embed]

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`media`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the option.|
|subtitle|string||Subtitle display of the option, situated beneath the title.|
|desc|string||Description of the option, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|compiler|bool||Flag to run the compiler hook.  More info|
|required|array||Provide the parent, comparison operator, and value which affects the field's visibility.  More info|
|validate|string||String value of `color` to validate the chosen color.  More info.|
|default|array||Array of default values.  See 'Default Options' below.|
|width|string||Sets the width of the image.|
|height|string||Sets the height of the image.|
|url|bool|false|Flag to display the image of the URL.|
|preview|bool|true|Flag to display a preview of the image.|
|placeholder|string|`No media selected`|Sets the text that appears in the URL input box when no value is present.|
|readonly|bool|true|Flag to set the readonly attribute of the media text field.|
|permissions|string||String specifying the capability required to view the section.   More info.|
|mode|string||String specifying either the file type or mime type of files to accept from the media library.|
|library_filter|array||Array of file type values (NOT mime) the media library should only display.|
|hint|array||Array containing the `content` and optional `title` arguments for the hint tooltip.  More info|

::: tip Also See
- [Using the `compiler` Argument](../configuration/argument-compiler.md)
- [Using the `hints` Argument](../configuration/argument-hints.md)
- [Using the `permissions` Argument](../configuration/argument-permissions.md)
- [Using the `required` Argument](../configuration/argument-required.md)
:::

## Default Options

|Name|Type|Description|
|--- |--- |--- |
|id|string|Unique ID for the media type.|
|url|string|Full URL to the default media.|
|width|string|Sets the width of the media.|
|height|string|Sets the height of the media.|
|thumbnail|string|URL to the media thumbnail, if any.|

## Example Declaration
```php
$fields = array(
    'id'       => 'opt-media',
    'type'     => 'media', 
    'url'      => true,
    'title'    => __('Media w/ URL', 'redux-framework-demo'),
    'desc'     => __('Basic media uploader with disabled URL input field.', 'redux-framework-demo'),
    'subtitle' => __('Upload any media using the WordPress native uploader', 'redux-framework-demo'),
    'default'  => array(
        'url'=>'http://s.wordpress.org/style/images/codeispoetry.png'
    ),
);
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>

```php
global $redux_demo;

echo 'URL value: '       . $redux_demo['opt-media']['url'];
echo 'Height value: '    . $redux_demo['opt-media']['height'];
echo 'Width value: '     . $redux_demo['opt-media']['width'];
echo 'Thumbnail value: ' . $redux_demo['opt-media']['thumbnail'];
```

