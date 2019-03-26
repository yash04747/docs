# Divide

The Divide field acts as a divider between other fields.

<span style="display:block;text-align:center">![](./img/divide.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`divide`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|desc|string||Description of the option, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|required|array||Provide the parent, comparison operator, and value which affects the field's visibility.  More info|


::: tip Also See
- [Using the `required` Argument](../configuration/argument-required.md)
:::

::: warning Tip
When using the Divide field with `required`, the divider cannot be hidden by default.  It's best only to use the `required` argument with this field when the fold is shown by default.
:::

## Example Declaration
```php
$fields = array(
    'id'   =>'divider_1',
    'desc' => __('This is the description field.', 'redux-framework-demo'),
    'type' => 'divide'
);
```

