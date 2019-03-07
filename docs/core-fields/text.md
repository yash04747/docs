# Text

The Text field accepts any form of text and optionally validates the text before saving the value.

<span style="display:block;text-align:center">![](./img/text.png)</span>

|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`text`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the option.|
|subtitle|string||Subtitle display of the option, situated beneath the title.|
|desc|string||Description of the option, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|compiler|bool||Flag to run the compiler hook.  More info|
|required|array||Provide the parent, comparison operator, and value which affects the field's visibility.  More info|
|validate|string||String value of accepted validation flags.  More info.|
|default|string||String that appears in the text input.|
|readonly|boolean|`false`|Sets the input field to be readonly or not.|
|placeholder|string||Text to display in the input when n value is present.|
|msg|string||Custom message to display upon failure of validation.|
|permissions|string||String specifying the capability required to view the section.   More info.|
|hint|array||Array containing the `content` and optional `title` arguments for the hint tooltip. More info|


::: tip Also See
- [Using the `compiler` Arguments`](../guide/the-compiler-argument.md)
- [Using the `hints` Argument](../guide/the-hints-argument.md)
- [Using the `output` Argument](../guide/the-output-argument.md)
- [Using the `permissions` Argument](../guide/the-permissions-argument.md)
- [Using the `required` Argument](../guide/using-the-required-argument.md)
- [Using the `validate` Argument](../guide/using-the-validate-argument.md)
:::

## Example Declaration
```php
    $fields = array(
        'id'       => 'opt-text',
        'type'     => 'text',
        'title'    => __('Text Option - Email Validated', 'redux-framework-demo'),
        'subtitle' => __('This is a little space under the Field Title in the Options table, additional info is good in here.', 'redux-framework-demo'),
        'desc'     => __('This is the description field, again good for additional info.', 'redux-framework-demo'),
        'validate' => 'email',
        'msg'      => 'custom error message',
        'default'  => 'test@test.com'
    );
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>

```php
global $redux_demo;

echo 'Text value: ' . $redux_demo['opt-text'];
```

