# Password

The Password field, which can be used as a login with password could be used as a POP or SMTP login for other site functions.

<span style="display:block;text-align:center">![](./img/password.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`password`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the option.|
|subtitle|string||Subtitle display of the option, situated beneath the title.|
|desc|string||Description of the option, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|compiler|bool/array||Flag to run the compiler hook or array of CSS selectors to pass dynamic CSS to the compiler hook.  More info|
|required|array||Provide the parent, comparison operator, and value which affects the field's visibility.  More info|
|default|string||Array of default values. See 'Default Options' below.|
|username|bool|true|Enable/Disable the username field along side the password field.|
|permissions|string||String specifying the capability required to view the section.   More info.|
|hint|array||Array containing the `content` and optional `title` arguments for the hint tooltip.  More info|

::: tip Also See
- [Using the `compiler` Argument](../configuration/argument-compiler.md)
- [Using the `hints` Argument](../configuration/argument-hints.md)
- [Using the `permissions` Argument](../configuration/argument-permissions.md)
- [Using the `required` Argument](../configuration/argument-required.md)
:::

## Default Options
|Name|Type|Description|
|--- |--- |--- |
|username|string|Default text to appear in the username field.|
|password|string|Default text to appear in the password field.|
|placeholder|array|An array of values holding the placeholder text for both fields.|


## Placeholder Options
|Name|Type|Description|
|--- |--- |--- |
|username|string|Placeholder text for the username field.|
|password|string|Placeholder text for the password field.|

## Example Declaration
```php
Redux::addField( 'OPT_NAME', 'SECTION_ID', array(
    'id'          => 'opt-password',
    'type'        => 'password',
    'username'    => true,
    'title'       => 'SMTP Account',
    'placeholder' => array(
        'username'   => 'Enter your Username'
        'password'   => 'Enter your Password'
    )
) );
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your <a title="opt_name" href="/redux-framework/arguments/opt_name/">`opt_name` argument.</a>

```php
global $redux_demo;

echo 'Username value:' . $redux_demo['opt-password']['username'];
echo 'Password value:' . $redux_demo['opt-password']['password'];
```

