# Textarea

The Textarea field accepts any form of multi-line string input, including custom HTML.

<span style="display:block;text-align:center">![](./img/textarea.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`textarea`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the option.|
|subtitle|string||Subtitle display of the option, situated beneath the title.|
|desc|string||Description of the option, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|compiler|bool||Flag to run the compiler hook.  More info|
|required|array||Provide the parent, comparison operator, and value which affects the field's visibility.  More info|
|validate|string||String value of `color` to validate the chosen color.  More info.|
|default|string||Default text to display inside the textarea field.|
|placeholder|string||Message to display when no text is present.|
|rows|int|6|Numbers of text rows to display.|
|allowed_html|array||Array of allowed HTML tags. See http://codex.wordpress.org/Function_Reference/wp_kses for more information.|
|permissions|string||String specifying the capability required to view the section.   More info.|
|hint|array||Array containing the `content` and optional `title` arguments for the hint tooltip.  More info|

::: tip Also See
- [Using the `compiler` Arguments`](../guide/the-compiler-argument.md)
- [Using the `hints` Argument](../guide/the-hints-argument.md)
- [Using the `permissions` Argument](../guide/the-permissions-argument.md)
- [Using the `required` Argument](../guide/using-the-required-argument.md)
- [Using the `validate` Argument](../guide/using-the-validate-argument.md)
:::

::: warning Note
For the `allowed_html` array to apply, the `validate` argument must be set to `html_custom`.
:::

## Example Declaration
```php
$fields = array(
    'id'=>'opt-textarea',
    'type' => 'textarea',
    'title' => __('Textarea Option - HTML Validated Custom', 'redux-framework-demo'), 
    'subtitle' => __('Custom HTML Allowed (wp_kses)', 'redux-framework-demo'),
    'desc' => __('This is the description field, again good for additional info.', 'redux-framework-demo'),
    'validate' => 'html_custom',
    'default' => '<br />Some HTML is allowed in here.<br />',
    'allowed_html' => array(
        'a' => array(
            'href' => array(),
            'title' => array()
        ),
        'br' => array(),
        'em' => array(),
        'strong' => array()
    )
);
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>

```php
global $redux_demo;

echo '' . $redux_demo['opt-textarea'];
```

