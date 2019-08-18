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

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

::: warning Tip
When using the Divide field with `required`, the divider cannot be hidden by default.  It's best only to use the `required` argument with this field when the fold is shown by default.
:::

## Example Declaration
```php
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id'   =>'divider_1',
    'desc' => __('This is the description field.', 'redux-framework-demo'),
    'type' => 'divide'
) );
```

