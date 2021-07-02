# Media

The media field is an adaption for a core WordPress feature.

<span style="display:block;text-align:center">![](./img/media.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Video Tutorial

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/kEZYIWSk1Tk" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

## Arguments
|Name|Type|<div style="width:160px;">Default</div>|Description|
|--- |--- |--- |--- |
|type|string|`media`|Value identifying the field type.|
|width|string||Sets the width of the image.|
|height|string||Sets the height of the image.|
|url|bool|`false`|Flag to display the image of the URL.|
|preview|bool|`true`|Flag to display a preview of the image.|
|placeholder|string|`No media selected`|Sets the text that appears in the URL input box when no value is present.|
|readonly|bool|`true`|Flag to set the readonly attribute of the media text field.|
|mode|string||String specifying either the file type or mime type of files to accept from the media library. IE, the file selector will not let you add any other types.|
|library_filter|array||Accepts an array of strings which correspond to the second part of a [mime type](https://codex.wordpress.org/Function_Reference/get_allowed_mime_types#Default_allowed_mime_types) (i.e. video/mp4 would be “mp4”). Only files that match one of the items in the array will appear in the media library.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

## Default Options

|Name|Type|Description|
|--- |--- |--- |
|id|string|Unique ID for the media type.|
|url|string|Full URL to the default media.|
|width|string|Sets the width of the media.|
|height|string|Sets the height of the media.|
|thumbnail|string|URL to the media thumbnail, if any.|



## Build Config
<script>
import builder from './media.json';
export default {
    data () {
        return {
            builder: builder,
            defaults: {}
        };
    }
}
</script>
<builder :builder_json="builder" :builder_defaults="defaults" />

## Example Config
```php
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id'       => 'opt-media',
    'type'     => 'media', 
    'url'      => true,
    'title'    => __('Media w/ URL', 'redux-framework-demo'),
    'desc'     => __('Basic media uploader with disabled URL input field.', 'redux-framework-demo'),
    'subtitle' => __('Upload any media using the WordPress native uploader', 'redux-framework-demo'),
    'default'  => array(
        'url'=>'https://s.wordpress.org/style/images/codeispoetry.png'
    ),
) );
```

### Example Config w/ `library_filter`
This example will produce a media field that can only find files with the extension denoted. This is useful when you only want specific file types specified for a given field.

```php
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id'       => 'opt-media',
    'type'     => 'media', 
    'title'    => __('Media w/ Library Filter', 'redux-framework-demo'),
    'library_filter' => array(
        'jpg'
    )
) );
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your [opt_name](../configuration/global_arguments.md#opt_name) argument.

```php
global $redux_demo;

echo 'URL value: '       . $redux_demo['opt-media']['url'];
echo 'Height value: '    . $redux_demo['opt-media']['height'];
echo 'Width value: '     . $redux_demo['opt-media']['width'];
echo 'Thumbnail value: ' . $redux_demo['opt-media']['thumbnail'];
```

## Allowed File Types in WordPress
WordPress allows you to upload many of the most common image files, audio/video, PDF, Microsoft Office and OpenOffice 
documents. The WordPress codex has a full list of allowed 
[file types](https://codex.wordpress.org/Function_Reference/get_allowed_mime_types#Default_allowed_mime_types) and 
extensions.

To find out which mime types are enabled in your instance, you can run the following code:
```php
print_r( get_allowed_mime_types() );
```

### Adding Additional File Types

Security is the main reason behind the limitation on file types that users can upload. You can, however, get around this
with a bit of code. Add this code to your theme or plugin to allow SVG files to be uploaded:

```php
function my_myme_types( $mime_types = array() ){
    $mime_types['svg'] = 'image/svg+xml'; // Adding svg extension
    return $mime_types;
}
add_filter('upload_mimes', 'my_myme_types', 1, 1);
```

Notice that the file extension goes as the key in `$mime_types` associated array and the mime type goes as its value. In 
this example, SVG file extension represents files with the mime type image/svg+xml. You can find out mime types of 
several common file extensions [on this page](http://www.freeformatter.com/mime-types-list.html).

You can also add multiple file types in one code snippet, like this:

```php
function my_myme_types( $mime_types = array() ){
    $mime_types['svg'] = 'image/svg+xml'; // Adding svg extension
    $mime_types['psd'] = 'image/vnd.adobe.photoshop'; // Adding photoshop files
    return $mime_types;
}
add_filter('upload_mimes', 'my_myme_types', 1, 1);
```
