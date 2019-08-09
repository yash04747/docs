# Text

The Text field accepts any form of text and optionally validates the text before saving the value.

<span style="display:block;text-align:center">![](./img/text.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments

|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`text`|Value identifying the field type.|
|placeholder|string or array||Text to display inside the input when a value is not present.|
|data|string|| See [`data` Argument below](#data-argument).|
|autocomplete|boolean||If set to `false`, the autocomplete attribute will be set to `off`.|
|readonly|string||If set to `true`, the readonly attribute will be set to `readonly`.|

::: tip Also See
- [Default Field Object Arguments](../configuration/objects/field.md#default-arguments)
- [Using the `attributes` Argument](../configuration/arguments/attributes.md)
- [Using the `data` Argument](../configuration/arguments/data.md)
- [Using the `compiler` Argument](../configuration/arguments/compiler.md)
- [Using the `hints` Argument](../configuration/arguments/hints.md)
- [Using the `permissions` Argument](../configuration/arguments/permissions.md)
- [Using the `required` Argument](../configuration/arguments/required.md)
- [Using the `validate` Argument](../configuration/arguments/validate.md)
:::

## `data` Argument
This argument serves two purposes with the text field. First, it works like any other [data](../configuration/arguments/data.md) argument.
Meaning it can populate with WordPress data. Second, it allows a user to pass single array or a multi-dimensional array 
to output a number of text fields.

::: danger TAKE NOTE
The "value" portion of the data array will also be set as the default value if the field has no value stored. The key 
portion will become the ID by which it is stored under the field ID.
:::


::: tip USING WITH the <code>placeholder</code> Arg
When defined with an array, the placeholder argument can also be used as long as the IDs match between the `data` and `placeholder` arrays.
:::

#### Simple `data` Array

<span style="display:block;text-align:center">![](./img/text-simple.png)</span>

```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array( 
    'id' => 'text_field',
    'title' => 'Field Title',
    'type' => 'text',
    'data' => array(
        'box1',
        'box2',
    )
) );
```

**Example Output**
```php
array(
    'box1',
    'box2'
)
```

#### Multi-Dimensional Array
<span style="display:block;text-align:center">![](./img/text-multidimensional.png)</span>
```php
Redux::setField( 'OPT_NAME', 'SECTION_ID', array( 
    'id' => 'text_field',
    'title' => 'Field Title',
    'type' => 'text',
    'data' => array(
        'box1' => 'Box 1 Title',
        'box2' => 'Box 2 Title',
    )
) );
```

**Example Output**
```php
array(
    'box1' => 'Box 1 Title',
    'box2' => 'Box 2 Title' 
)
```

## Example Declaration
<builder field="text">
{
    "type": "text",
    "name": "Text",
    "description": null,
    "icon": null,
    "fields": {
        "compiler": {
            "name": "compiler",
            "title": "Compiler",
            "type": "bool",
            "description": "Should the field be sent to the compiler",
            "default": false,
            "order": 60,
            "required": false
        },
        "required": {
            "name": "required",
            "title": "Required",
            "type": "array",
            "description": "Should the field be required",
            "default": null,
            "order": 60
        },
        "readonly": {
            "name": "readonly",
            "title": "Readonly",
            "type": "bool",
            "description": "Should the field be readonly",
            "default": false,
            "order": 60,
            "required": false
        },
        "class": {
            "name": "class",
            "title": "Class",
            "type": "text",
            "description": "",
            "default": null,
            "order": 3,
            "required": false
        },
        "desc": {
            "name": "desc",
            "title": "Description",
            "type": "text",
            "description": "",
            "default": null,
            "order": 3,
            "required": false
        },
        "subtitle": {
            "name": "subtitle",
            "title": "Subtitle",
            "type": "text",
            "description": "",
            "default": null,
            "order": 2,
            "required": false
        },
        "title": {
            "name": "title",
            "title": "Title",
            "type": "text",
            "description": "",
            "default": null,
            "order": 1,
            "required": false
        },
        "id": {
            "name": "id",
            "title": "ID",
            "type": "text",
            "description": "",
            "default": null,
            "order": 0,
            "required": false
        }
    },
    "model": {
        "title": "Text Field"
    }
}
</builder>

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in 
your [opt_name](../configuration/arguments/arguments_reference.md#opt-name) argument.

```php
// Using the Redux API
echo Redux::get_option( 'OPT_NAME', 'FIELD_ID', 'DEFAULT_VALUE' );

// Using the global argment
global $redux_demo; // Same as your opt_name
echo $redux_demo['FIELD_ID'];
```
