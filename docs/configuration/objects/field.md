---
title: "Fields" 
---

# Fields Object

Fields are the lowest level object within Redux. They constitute the [type of fields](../core-fields/) that appear in 
any given [section](section.md). Though individual fields may have custom arguments, they all share a common set of
default arguments.

::: warning Table of Contents
[[toc]]
:::

## Default Arguments
|Name|Type|Required|Description.|
|--- |--- |--- |--- |
|id|string|True|The unique identifier of a field. MUST be unique to the [opt_name](../arguments/arguments_reference.md#opt-name) except when used by the [metaboxes API](./metaboxes.md).|
|type|string|True|Denotes the [field type](../core-fields/). If the field type does not exist a warning will be displayed.|
|title|string||The title of the field that will be displayed.|
|subtitle|string||Subtitle of the option placed beneath the title.|
|desc|string||Text to appear under the field title. HTML is permitted.|
|default|string||Default value for the field.|
|class|string||Appends any number of classes to the field's class attribute.|
|customizer_only|bool||A flag to set this field to [customizer_only](field.md#customizer-only) display. This argument will override the [customizer_only](field.md#customizer-only) setting at the [sections](section.md) level as well as the [global arguments](../arguments/01-global.md#customizer-only) level.|
|output|bool||A flag to set all [enable CSS output](../arguments/output.md) for any fields that support this argument.|
|compiler|bool||A flag to set the [compiler hook](../arguments/compiler.md) to fire if this field's value is changed. This can override the [compiler](../arguments/compiler.md) setting at the [sections](section.md) level.|
|hints|bool||A flag to set the [hints](../arguments/hints.md) object that displays a animated window with more details about this field.|

::: tip Also See
- [Using the `compiler` Argument](../arguments/compiler.md)
- [Using the `hints` Argument](../arguments/hints.md)
- [Using the `permissions` Argument](../arguments/permissions.md)
- [Using the `required` Argument](../arguments/required.md)
- [Using the `validate` Argument](../arguments/validate.md)
:::

Fields are blocks of arrays that represent the individual options within a specific options panel, set via a [section](section.md) array. The [section](section.md) array contains an argument titled fields, which accepts an array, or several blocks of arrays, separated by commas.  This is where all field arrays are place.  A basic example is shown below. For specific examples, please consult the [sample-config.php](https://github.com/ReduxFramework/redux-framework/blob/master/sample/sample-config.php) file that comes with the Redux package.


## Setting Fields(s)

There are two methods to set a field in Redux. The only difference between these two declarations is one is singular
while the other is plural.

::: warning
If the section you are attaching to doesn't exist, that field will never show. It's much easier to use [Redux::setSection()](section.md#set-section) instead
to define a [section](section.md) with embedded fields all at once.
:::

### Redux::setField()

Used to declare a single field and attach to an existing [section](section.md).

*Arguments to pass in order of declaration*
|Name|Type|Description|
|--- |--- |--- |
|`opt_name`|string|Your unique [opt_name](../arguments/01-global.md#opt-name)|
|field|array|A singular field array|
|section_id|string|Section ID to add this field to. Must previously exist.|

```php
Redux::setField( 'OPT_NAME', 'SECTION_ID', array(
    'id'    => 'opt-text',   
    'type'  => 'text',
    'title' => 'A sample text box',
) );
```

### Redux::setFields()

Similar to [::set_field()](#set-field), but used to set an unlimited number of fields at once.

*Arguments to pass in order of declaration*
|Name|Type|Description|
|--- |--- |--- |
|`opt_name`|string|Your unique [opt_name](../arguments/01-global.md#opt-name)|
|fields|array|Array of fields arrays|
|section_id|string|Section ID to add this field to|

This method allows for multiple sections to be added at once. Keep in mind that you can still set a single section, as
seen below, but you should remember to wrap the section in an array.

```php
Redux::setFields( 'OPT_NAME', 'SECTION_ID', array(
    array(
        'id'    => 'opt-text1',   
        'type'  => 'text',
        'title' => 'A sample text box1'
    ),
    array(
        'id'    => 'opt-text2',   
        'type'  => 'text',
        'title' => 'A sample text box2'
    )
) );
```

## Field Helper Functions

A number of helper functions have been baked into the Redux API to support modifying a field before it gets rendered.
These functions have specific use cases and are not often employed by the typical developer, but they are useful when
needed.

::: tip
Execution order is important here. If you try to fetch a field before it has been called within your code, it will
not exist. If you believe a field should exist, make sure you're not in an early loading hook when working with that field.
:::

### Redux::get_section()

*Arguments to pass in order of declaration*
|Name|Type|Description|
|--- |--- |--- |
|`opt_name`|string|Your unique [opt_name](../arguments/01-global.md#opt-name)|
|`section_id`|string|Unique id of the section you wish to retrieve|

Say you want to fetch a section object, you can easily do that. This may be useful if you wanted to check the section 
array by ID. Returns `false` if the section cannot be identified.

```php
$section = Redux::get_section( 'OPT_NAME', 'SECTION_ID' );
```



### Redux::get_sections()
Now let's say you want to grab all sections for a given opt_name, you can do that too.

*Arguments to pass in order of declaration:*
|Name|Type|Description|
|--- |--- |--- |
|`opt_name`|string|Your unique [opt_name](../arguments/01-global.md#opt-name)|

```php
$sections = Redux::get_sections( 'OPT_NAME' );
```

### Redux::remove_section()

*Arguments to pass in order of declaration*
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`opt_name`|string||Your unique [opt_name](../arguments/01-global.md#opt-name)|
|`section_id`|string||Unique id of the section you wish to retrieve|
|`delete_fields`|bool|`false`|If set to true, all fields below will be deleted as well|

This method allows you to remove a section by ID from Redux. It can be useful to update a field as follows:

```php
$section = Redux::get_section( 'OPT_NAME', 'SECTION_ID' );
$section['title'] = __( 'A New Section Title', 'redux-framework' );
Redux::setSection( 'OPT_NAME', $section );
```

