---
title: "Attributes" 
sidebarDepth: 2
---

# Using the `attributes` Argument

For fields that support it, the attributes key offers the ability to set any type of arguments to the field's HTML. This
is extremely useful if you wish to customize a field for a purpose. Such as using a HTML attribute not supported by Redux.
You can change a text field into a password field, or even add a custom attribute for use by your own javascript.

## Example Usage

```php
Redux::setField( 'redux_demo', 'SECTION_ID', array(
    'id'   => 'field_id',
    'type' => 'text',
    'attributes'       => array(
        'type'         => 'password',
        'readonly'     => 'readonly',
        'autocomplete' => 'off',
        'data-json' => array(
            'example' => 'json'
        )
    )
) );
```

The attributes of this field will be as follows:
```html
<input 
    class="regular-text" 
    readonly="readonly" 
    autocomplete="off" 
    type="password" 
    data-json="{&quot;example&quot;:&quot;json&quot;}" 
    id="field_id" 
    name="redux_demo[field_id]">
```

::: tip
If you pass an array to the attributes argument, JSON will be stored and escaped so you may access the values via JavaScript.
:::