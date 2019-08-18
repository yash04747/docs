# Section

The Section field provides the ability to set any field below it with an indent.

::: warning Table of Contents
[[toc]]
:::

<span style="display:block;text-align:center">![](./img/section.png)</span>

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|'section'|Value identifying the field type.|
|indent|bool|`true`|Flag to set the indentation for all fields that follow. ALWAYS use this. `true` for a starting section field, `false` for a closing section field.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

::: tip
When using `required` with the section field, the required statement <strong>must</strong> be included in both the beginning and end section arrays.   Also, the section field cannot be hidden by default.  It’s best only to use the `required` argument with this field when the fold is shown by default.
:::

## Example Declaration
```php
// Begin the section
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
   'id' => 'section-start',
   'type' => 'section',
   'title' => __('Indented Options', 'redux-framework-demo'),
   'subtitle' => __('With the "section" field you can create indent option sections.', 'redux-framework-demo'),
   'indent' => true 
);

// Other field arrays go here.
Redux::addField( 'OPT_NAME', 'SECTION_ID', array() );

// End the section
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id'     => 'section-end',
    'type'   => 'section',
    'indent' => false,
) );
```

