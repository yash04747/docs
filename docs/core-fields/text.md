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
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the option.|
|subtitle|string||Subtitle display of the option, situated beneath the title.|
|desc|string||Description of the option, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|default|string||String that appears in the text input.|
|readonly|boolean|`false`|Sets the input field to be readonly or not.|
|placeholder|string||Text to display in the input when n value is present.|

::: tip Also See
- [Using the `compiler` Arguments`](../guide/the-compiler-argument.md)
- [Using the `hints` Argument](../guide/the-hints-argument.md)
- [Using the `permissions` Argument](../guide/the-permissions-argument.md)
- [Using the `required` Argument](../guide/using-the-required-argument.md)
- [Using the `validate` Argument](../guide/using-the-validate-argument.md)
:::

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
            "type": "bool",
            "description": "Should the field be required",
            "default": false,
            "order": 60,
            "required": false
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
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>

```php
global $redux_demo;

echo 'Text value: ' . $redux_demo['opt-text'];
```