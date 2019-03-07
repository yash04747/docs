# Spinner

The Spinner field returns the value entered in its input box or via clicks on its arrow buttons.

<span style="display:block;text-align:center">![](./img/spinner.png)</span>

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`spinner`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the option.|
|subtitle|string||Subtitle display of the option, situated beneath the title.|
|desc|string||Description of the option, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|compiler|bool/array||Flag to run the compiler hook or array of CSS selectors to pass dynamic CSS to the compiler hook.  More info|
|required|array||Provide the parent, comparison operator, and value which affects the field's visibility.  More info|
|default|string||Value setting the spinner default.|
|min|string/int|0|Value to set the minimum spinner value.|
|max|string/int|1|Value to set the maximum spinner value.|
|step|string/int|1|Value to set the spinner step value.|
|permissions|string||String specifying the capability required to view the section.   More info.|
|hint|array||Array containing the `content` and optional `title` arguments for the hint tooltip.  More info|

::: tip Also See
- [Using the `compiler` Arguments`](../guide/the-compiler-argument.md)
- [Using the `hints` Argument](../guide/the-hints-argument.md)
- [Using the `permissions` Argument](../guide/the-permissions-argument.md)
- [Using the `required` Argument](../guide/using-the-required-argument.md)
:::

## Example Declaration
```php
$fields = array(
    'id'       => 'opt-spinner',
    'type'     => 'spinner', 
    'title'    => __('JQuery UI Spinner Example 1', 'redux-framework-demo'),
    'subtitle' => __('No validation can be done on this field type','redux-framework-demo'),
    'desc'     => __('JQuery UI spinner description. Min:20, max: 100, step:20, default value: 40', 'redux-framework-demo'),
    'default'  => '40',
    'min'      => '20',
    'step'     => '20',
    'max'      => '100',
);
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>

```php
global $redux_demo;

echo 'Spinner value: ' . $redux_demo['opt-spinner'];
```

