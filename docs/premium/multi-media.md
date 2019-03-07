# Multi Media

The Redux Multi Media extension is an improved way to allow your users to upload and/or select multiple files from the WordPress media library, for use in the Redux Framework options panel.

## Getting Started
To understand how to use extensions, you should read this article on <a href="/redux-framework/advanced/loading-extensions/">Loading Extensions</a>. To shortcut the process, you should use the <a href="http://generate.reduxframework.com/" target="_blank">Redux Generator</a>. Please be aware that a working knowledge of PHP and CSS is required to properly use this field. Should you not be familiar with one or the other (or both), please refer to the basic guides to get you started: <a href="http://www.php.net/manual/en/tutorial.php">Getting Started with PHP</a>, <a href="http://www.w3schools.com/css/css_intro.asp">CSS Introduction</a>.
## Arguments
<table border="0">
<tbody>
<tr>
<td style="text-align: center;"><strong>Name</strong></td>
<td style="text-align: center;"><strong>Type</strong></td>
<td style="text-align: center;"><strong>Default</strong></td>
<td style="text-align: center;"><strong>Description</strong></td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>'multi_media'</td>
<td>Value identifying the field type.</td>
</tr>
<tr>
<td>id</td>
<td>string</td>
<td></td>
<td>Unique ID identifying the field. Must be different from all other field IDs.</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td></td>
<td>Displays title of the field.</td>
</tr>
<tr>
<td>subtitle</td>
<td>string</td>
<td></td>
<td>Subtitle display of the field, situated beneath the title.</td>
</tr>
<tr>
<td>desc</td>
<td>string</td>
<td></td>
<td>Description of the field, appearing beneath the field control.</td>
</tr>
<tr>
<td>class</td>
<td>string</td>
<td></td>
<td>Appends any number of classes to the field's class attribute.</td>
</tr>
<tr>
<td>labels</td>
<td>array</td>
<td></td>
<td>Array of key/pair values defining the text in labels used throughout the field. See 'Setting Labels' below.</td>
</tr>
<tr>
<td>library_filter</td><td>array</td><td></td><td>Array of comma separated string extensions (minus the dot prefix) which the media uploader/selector will allow/display. Omit this argument to use no filter and allow all file types.</td>
</tr>
<tr>
</tr><tr>
<td>max_file_upload</td><td>int</td><td></td><td>Integer value limiting the number of files to be uploaded or selected.  Set to `0` for unlimited.</td>
</tr>
<tr>
<td>hint</td>
<td>array</td>
<td></td>
<td>Array containing the `content` and optional `title` arguments for the hint tooltip. <a class="more_info" title="Using Hints in Fields" href="/redux-framework/the-basics/using-hints-in-fields/"><i class="el-icon-circle-arrow-right"></i>More info</a></td>
</tr>
</tbody>
</table>

## 
Setting LabelsThe `labels` argument gives the opportunity to set the caption for the following interfaces.  This is useful not only for localization purposes, but for flexibility reasons as well.

<table border="0">
<tbody>
<tr>
<td style="text-align: center;"><strong>Name</strong></td>
<td style="text-align: center;"><strong>Type</strong></td>
<td style="text-align: center;"><strong>Default</strong></td>
<td style="text-align: center;"><strong>Description</strong></td>
</tr>
<tr>
<td>upload_file</td>
<td>string</td>
<td>Select File(s)</td>
<td>Text that appears on the field's upload button.</td>
</tr>
<tr>
<td>remove_image</td>
<td>string</td>
<td>Remove Image</td>
<td>Alt text appearing over an image thumbnail's delete icon.</td>
</tr>
<tr>
<td>remove_file</td>
<td>string</td>
<td>Remove</td>
<td>Text appearing after a non-image file's listing</td>
</tr>

<tr>
<td>file</td>
<td>string</td>
<td>File:</td>
<td>Text appearing before a non-image file's listing.</td>
</tr>

<tr>
<td>download</td>
<td>string</td>
<td>Download</td>
<td>Text appearing after a non-image file's listing</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td>Field `title` argument</td>
<td>Text appearing in WordPress's media uploader/selector window.</td>
</tr>
<tr>
<td>button</td>
<td>string</td>
<td>Add or Upload File(s)</td>
<td>Text appearing in WordPress's media uploader/selector button.</td>
</tr>
<tr>
<td>duplicate</td>
<td>string</td>
<td>%s already exists in your file queue.</td>
<td>Message that appears when a duplicate file has been selected.  %s represents the duplicate file to be displayed and should not be modified.</td>
</tr>
<tr>
<td>max_limit</td>
<td>string</td>
<td>Maximum upload limit of %s reached/exceeded.</td>
<td>Message that appears when max_file_limit has been reached.  %s represents the max_file_upload number and should not be modified.</td>
</tr>

</tbody>
</table>

## Example Declaration

```php
array(
    'id'        => 'opt-multi-media',
    'type'      => 'multi_media',
    'title'     => 'Multi Media Selector',
    'subtitle'  => 'Multi file media selector',
    'labels'    => array(
        'upload_file'       => __('Select File(s)', 'redux-framework-demo'),
        'remove_image'      => __('Remove Image', 'redux-framework-demo'),
        'remove_file'       => __('Remove', 'redux-framework-demo'),
        'file'              => __('File: ', 'redux-framework-demo'),
        'download'          => __('Download', 'redux-framework-demo'),
        'title'             => __('Multi Media Selector', 'redux-framework-demo'),
        'button'            => __('Add or Upload File','redux-framework-demo')
    ),
    'library_filter'  => array('gif','jpg','png'),
    'max_file_upload' => 5
),
```

## Example Usage
The extension's return value is an array of key/pair values. The key contains the file's post ID, while the value contains the URL of the file itself. It will be necessary to use a for/each loop to extract the values (Please remember to replace `redux_demo` with your own `<a href="/redux-framework/arguments/opt_name" title="opt_name">opt_name</a>` argument).

```php
global $redux_demo;

foreach ($redux_demo['opt-multi-media'] as $id => &amp;url) {
    echo 'Post ID: ' . $id;
    echo 'URL: '     . $url;
}
```

## getExtendedData Helper Function
The Multi Media extension includes a helper function to extract a wide variety of data for any post ID passed to it. To take advantage of this function, use the following code (to obtain a post ID, use the code above in conjunction with the code below):

```php

// the $id variable assumes a valid post ID.
$ext_data = ReduxFramework_extension_multi_media::getExtendedData($id)
```

The return value will contain an array of the follow data in key/pair format:
<ul><li><tt>id</tt></li><li><tt>title</tt></li><li><tt>filename</tt></li><li><tt>url</tt></li><li><tt>link</tt></li><li><tt>alt</tt></li><li><tt>author</tt></li><li><tt>description</tt></li><li><tt>caption</tt></li><li><tt>name</tt></li><li><tt>status</tt></li><li><tt>uploadedTo</tt></li><li><tt>date</tt></li><li><tt>modified</tt></li><li><tt>menuOrder</tt></li><li><tt>mime</tt></li><li><tt>type</tt></li><li><tt>subtype</tt></li><li><tt>icon</tt></li><li><tt>dateFormatted</tt></li><li><tt>nonces</tt></li><li><tt>editLink</tt></li><li><tt>sizes</tt></li><li><tt>width</tt></li><li><tt>height</tt></li><li><tt>fileLength</tt></li><li><tt>compat</tt></li></ul>
