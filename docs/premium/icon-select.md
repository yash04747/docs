# Icon Select

The entire purpose of the icon_select field is to reduce your effort as a developer. You feed it a web font CSS file via path or URL and it automatically parses the class names. Then you specify a font prefix and it auto-appends that as well. What you get in the end is a fully functional class that you can use on any field to get the icon you desire. Oh, did I mention it auto-enqueues your font file for you as well?   ;)

<a href="http://docs.reduxframework.com/wp-content/uploads/sites/4/2015/03/Screen-Shot-2014-02-01-at-8.58.10-AM.png"><img src="http://docs.reduxframework.com/wp-content/uploads/sites/4/2015/03/Screen-Shot-2014-02-01-at-8.58.10-AM.png" alt="Screen-Shot-2014-02-01-at-8.58.10-AM" width="1325" height="276" class="alignnone size-full wp-image-885" /></a>

## Getting Started
To understand how to use extensions, you should read this article on <a href="/redux-framework/advanced/loading-extensions/">Loading Extensions</a>.  To shortcut the process, you should use the <a href="http://generate.reduxframework.com/" target="_blank">Redux Generator</a>.  Please be aware that a working knowledge of PHP and CSS is required to properly use this field. Should you not be familiar with one or the other (or both), please refer to the basic guides to get you started: <a href="http://www.php.net/manual/en/tutorial.php">Getting Started with PHP</a>, <a href="http://www.w3schools.com/css/css_intro.asp">CSS Introduction</a>.

## Arguments
By default, if you do not specify any of the special argument icon_select will auto-parse the elusive-icons font already embedded within Redux. It will also enqueue this font in the front-end so you can begin working with icons instantly. Alternatively, you can provide any of the arguments below for a more customized experience.

<table border="0">
<tbody>
<tr>
<td style="text-align: center;"><strong>Name</strong></td>
<td style="text-align: center;"><strong>Type</strong></td>
<td style="text-align: center;"><strong>Default</strong></td>
<td style="text-align: center;"><strong>Description</strong></td>
</tr>
<tr>
<td>default</td>
<td>string</td>
<td></td>
<td>Specify a full font class name with the prefix as well</td>
</tr>
<tr>
<td>options</td>
<td>array</td>
<td></td>
<td>Prefer to just do everything by hand? Just send us the font names in a key=>value pair and we’ll do the rest. Know that enqueuing cannot work when you do this.</td>
</tr>
<tr>
<td>prefix</td>
<td>string</td>
<td></td>
<td>Some font frameworks append a class prefix to denote their class. This is used here. An example of this would be fa, a class used by font-awesome to tell you this is a font-awesome font.</td>
</tr>
<tr>
<td>selector</td>
<td>string</td>
<td></td>
<td>Icon Select parses the classes from a CSS file by denoting a selector. Let’s take a look at a typical font class name for elusive fonts: el-icon-youtube. The selector would be el- or el-icon-, and we would need to pass this into the selector argument to parse the class file appropriately.</td>
</tr>
<tr>
<td>height</td>
<td>string</td>
<td>250px</td>
<td>Change the height of the area displaying the icons. This area will always be scrollable. You may pass any unit you choose.</td>
</tr>
<tr>
<td>enqueue</td>
<td>boolen</td>
<td>true</td>
<td>You can disable the enqueing of this font in the admin panel, but I don’t know why anyone would want to do that.</td>
</tr>
<tr>
<td>enqueue_frontend</td>
<td>bool</td>
<td>true</td>
<td>Use this to disable the enqueuing of your font in the front-end if you’ve already done so in your own code.</td>
</tr>
<tr>
<td>compiler</td>
<td>bool</td>
<td>false</td>
<td>Flag to run the compiler hook. <a title="Integrating a Compiler" href="/redux-framework/advanced/integrating-a-compiler/"> More info</a></td>
</tr>
<tr>
<td>required</td>
<td>array</td>
<td></td>
<td>Provide the parent, comparison operator, and value which affects the field's visibility. <a class="more_info" href="/redux-framework/the-basics/the-required-argument/"><i class="el-icon-circle-arrow-right"></i> More info</a></td>
</tr>
<tr>
<td>hint</td>
<td>array</td>
<td></td>
<td>Array containing the `content` and optional `title` arguments for the hint tooltip. <a class="more_info" title="Using Hints in Fields" href="/redux-framework/the-basics/using-hints-in-fields/"><i class="el-icon-circle-arrow-right"></i>More info</a></td>
</tr>
</tbody>
</table>

## Example Declaration
```php
array(
    'id'=>'icon_select_field',
    'type' => 'icon_select', 
    //'required' => array('switch-fold','equals','0'),	
    'title' => __('Icon Select', 'redux-framework-demo'),
    'subtitle'	=> __('Select an icon.', 'redux-framework-demo'),
    //'default' 	=> '',
    //'options' => array(), // key/value pair, value is the title
    //'enqueue' => false, // Disable auto-enqueue of stylesheet if present in the panel
    //'enqueue_frontend' => false, // Disable auto-enqueue of stylesheet on the front-end
    //'stylesheet' => 'http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css', // full path OR url to stylesheet
    //'prefix' => 'fa', // If needed to initialize the icon
    //'selector' => 'fa-', // How each icons begins for this given font
    //'height' => 300 // Change the height of the container. defaults to 300px;
),
```

### Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your `<a href="/redux-framework/arguments/opt_name/" title="opt_name">opt_name</a>` argument.

```php
global $redux_demo;

echo '<i class="' . $redux_demo['icon_select_field'] . '"></i>';
```

