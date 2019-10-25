# Repeater <Badge text="field" type="warn"/>

The Redux Repeater extension easily allows developers to group like fields in a dynamic manner, or static number. 
Allowing values to be grouped (nested) under a single key, or under each individual key. All values will be returned 
as an array.

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

## Incompatible Fields
Due to the complexities of this extension, the following Redux fields **WILL NOT** (at this time) function within a 
repeater.

|Field|Issue|
|--|--|
|[Checkbox](../core-fields/checkbox.md#multi-checkbox) (Multi)|Multi-check (options array) not functioning, single check is fine|
|[Sorter](../core-fields/sorter.md)|Not functioning|
|[Typography](../core-fields/typography.md)|Will crash the panel, don't try it yet.|
|[Editor](../core-fields/typography.md)|Works fine, but CSS styling is messed up. (jQuery UI stuff)|

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`repeater`|Value identifying the field type.|
|id|string|Unique ID identifying the field. Must be different from all other field IDs.|
|title|string|Displays title of the repeatable block of fields.|
|subtitle|string|Subtitle display of the repeatable block of fields, situated beneath the title.|
|desc|string|Description of the repeatable block of fields, appearing beneath the field control.|
|class|string|Appends any number of classes to the field's class attribute.|
|fields|array|Array of fields to be within each repeater block.|
|group_values|boolen|`false`|Argument to group all fields within the repeater ID.|
|item_name|string|`true`|String added after Add/Delete to denote the name of the items you are adding to or deleting. Example: `Delete Fields`, Fields being the item_name.|
|bind_title|string|`true`|By default the first field will be used as the title for each repeater block. You may also pass in a string denoting an ID to use as the title for each repeater block.|
|static|int|Number of static repeater groups to display. This will also disable the add/remove buttons next to each repeater block.|
|sortable|boolean|`true`|Allow your users to drag/drop repeater blocks and by so doing reorder the results.|
|limit|int|10|If `static` is false, this will limit the number of repeater blocks that can be created.|

::: tip Also See
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `hints` Argument](../configuration/fields/hints.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

## Extended Argument Details

#### The `static` Argument
By default repeater is a dynamic field, however it can act with a predefined  number of static repeater blocks. This allows developers to specifically set the number of repeater blocks they desire to use.

#### The `bind_title` Argument
By default the first field passed within a repeater is bound as the title. As the values selected or modified change, the title for that given repeater block will update. Developers may set this to false to disable all titles, or set it to an ID had within the repeater field and the title will update accordingly for each repeater block.

#### The `limit` Argument
Provided the `static` argument is not used, this will limit the number of dynamic repeater blocks that users can create. By default this is set to 10.

#### The `group_values` Argument
The group values allows you to store all values within the repeater id value inside your global variable. For example, say you had a repeater as denoted below and you set this to true. To access all the field values within the repeater field, you would need to follow the Example Usage - Grouped Values example denoted below. This, by default, is turned off.

#### The `sortable` Argument
By default each repeater block is sortable and the values will be returned to the developer in the order of which they are saved. However, should a developer like to disable this feature, they may set this to false and sorting will be enabled to the user.

## Example Config
```php
Redux::setSection( 'OPT_NAME',  array(
    'title' => __('Repeater Field', 'redux-framework-demo' ),
    'icon' => 'el-icon-thumbs-up',
    'fields' => array(
        array(
            'id'             => 'repeater-field-id',
            'type'           => 'repeater',
            'title'          => __( 'Title', 'redux-framework-demo' ),
            'subtitle'       => __( '', 'redux-framework-demo' ),
            'desc'           => __( '', 'redux-framework-demo' ),
            //'group_values' => true, // Group all fields below within the repeater ID
            //'item_name'    => '', // Add a repeater block name to the Add and Delete buttons
            //'bind_title'   => '', // Bind the repeater block title to this field ID
            //'static'       => 2, // Set the number of repeater blocks to be output
            //'limit'        => 2, // Limit the number of repeater blocks a user can create
            //'sortable'     => false, // Allow the users to sort the repeater blocks or not
            'fields'         => array(
                array(
                    'id'          => 'title_field',
                    'type'        => 'text',
                    'placeholder' => __( 'Title', 'redux-framework-demo' ),
                ),
                array(
                    'id'          => 'text_field',
                    'type'        => 'text',
                    'placeholder' => __( 'Text Field', 'redux-framework-demo' ),
                ),
                array(
                    'id'      => 'select_field',
                    'type'    => 'select',
                    'title'   => __( 'Select Field', 'redux-framework-demo' ),
                    'options' => array(
                        '1'      => __( 'Option 1', 'redux-framework-demo' ),
                        '2'      => __( 'Option 2', 'redux-framework-demo' ),
                        '3'      => __( 'Option 3', 'redux-framework-demo' ),
                    ),
                    'placeholder' => __( 'Listing Field', 'redux-framework-demo' ),
                ),
            )
        )
    )
) );
```

## Example Usage
 
### Non-Grouped Values
```php
// Please remember to replace '$redux_demo' with your project's global variable name, usually your opt_name.
global $redux_demo;
print_r( $redux_demo['title_field'] );
echo '<hr>';
print_r( $redux_demo['text_field'] );
echo '<hr>';
print_r( $redux_demo['select_field'] );
```

### Grouped Values
```php
// Please remember to replace '$redux_demo' with your project's global variable name, usually your opt_name.
// This example assumes you set 'group_values' to true within your repeater field declaration.
global $redux_demo;
print_r( $redux_demo['repeater-field-id']['title_field'] );
echo '<hr>';
print_r( $redux_demo['repeater-field-id']['text_field'] );
echo '<hr>';
print_r( $redux_demo['repeater-field-id']['select_field'] );
```
