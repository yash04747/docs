# Icon Select <Badge text="field" type="warn"/>

The entire purpose of the icon_select field is to reduce your effort as a developer. You feed it a web font CSS file via 
path or URL, and it automatically parses the class names. Then you specify a font prefix and it auto-appends that as well. 
What you get in the end is a fully functional class that you can use on any field to get the icon you desire. Oh, did we 
mention it auto-enqueues your font file for you as well?   ;)

<span style="display:block;text-align:center">![](./img/icon_select.png)</span>

::: warning Table of Contents
[[toc]]
:::

::: tip Getting Started
To understand how to use extensions, you should read this article on [Using Extensions](../guides/basics/using-extensions.md).
 To shortcut the process, you can use the [Redux Build](http://build.redux.io/) site. Please be aware that a working 
 knowledge of PHP and CSS is required to properly use this extension. Should you not be familiar with one or the other 
 (or both), please refer to the following guides to get you started: 
 [Getting Started with PHP](http://www.php.net/manual/en/tutorial.php), 
 [CSS Introduction](http://www.w3schools.com/css/css_intro.asp).
:::

## Arguments
By default, if you do not specify any of the special argument icon_select will auto-parse the elusive-icons font already 
embedded within Redux. It will also enqueue this font in the front-end, so you can begin working with icons instantly. 
Alternatively, you can provide any of the arguments below for a more customized experience.

|Name|Type|Default|Description|
|--- |--- |--- |--- |
|default|string|Specify a full font class name with the prefix as well|
|options|array|Prefer to just do everything by hand? Just send us the font names in a key=>value pair and we’ll do the rest. Know that enqueuing cannot work when you do this.|
|prefix|string|Some font frameworks append a class prefix to denote their class. This is used here. An example of this would be fa, a class used by font-awesome to tell you this is a font-awesome font.|
|selector|string|Icon Select parses the classes from a CSS file by denoting a selector. Let’s take a look at a typical font class name for elusive fonts: el-icon-youtube. The selector would be el- or el-icon-, and we would need to pass this into the selector argument to parse the class file appropriately.|
|height|string|250px|Change the height of the area displaying the icons. This area will always be scrollable. You may pass any unit you choose.|
|enqueue|boolen|`true`|You can disable the enqueing of this font in the admin panel, but I don’t know why anyone would want to do that.|
|enqueue_frontend|bool|`true`|Use this to disable the enqueuing of your font in the front-end if you’ve already done so in your own code.|
|compiler|bool|`false`|Flag to run the compiler hook.|
|required|array|Provide the parent, comparison operator, and value which affects the field's visibility.|
|hint|array|Array containing the `content` and optional `title` arguments for the hint tooltip.|

::: tip Also See
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `hints` Argument](../configuration/fields/hints.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

## Example Config

```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'=>'icon_select_field',
    'type' => 'icon_select', 
    //'required' => array('switch-fold','equals','0'),	
    'title' => __('Icon Select', 'redux-framework-demo'),
    'subtitle'	=> __('Select an icon.', 'redux-framework-demo'),
    //'default' 	=> '',
    //'options' => array(), // key/value pair, value is the title
    //'enqueue' => false, // Disable auto-enqueue of stylesheet if present in the panel
    //'enqueue_frontend' => false, // Disable auto-enqueue of stylesheet on the front-end
    //'stylesheet' => 'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css', // full path OR url to stylesheet
    //'prefix' => 'fa', // If needed to initialize the icon
    //'selector' => 'fa-', // How each icons begins for this given font
    //'height' => 300 // Change the height of the container. defaults to 300px;
) );
```

### Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in 
your [opt_name](../configuration/global_arguments.md#opt-name) argument.

```php
global $redux_demo;

echo '<i class="' . $redux_demo['icon_select_field'] . '"></i>';
```

