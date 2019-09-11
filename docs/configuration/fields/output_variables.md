---

title: "Output Variables" 

---

# Using the `output_variables` Argument

The `output_variables` argument is related to the output argument, but has a slightly different focus. This feature 
allows the use of more modern design aspects to append a name variable to the body of the page. By so doing, developers 
need not be limited to only a named class name, as previously. Instead they can use and reuse a variable over and over 
again throughout their design. Essentially creating a CSS variable like had in LESS and CSS.

::: danger 
Requires Redux v4.0.3+
:::

In order for a field to support this feature, they must have a method attached to the main class of that field named  
`output_variables`. Even if a field does not support dynamic output, should the field have this method the value of this
field will be added to a root variable.

::: warning Table of Contents
[[toc]]
:::

## Supported Arguments
|<div style="width:200px;">Name</div>|Type|Default|Description|
|--- |--- |--- |--- |
|`output_variables`|boolean|`false`|Can be set at the section or field object levels. When set to true, values will be appended to generated CSS.|
|`ouput_variables_prefix`|string|`--`|Can be set at the global args, section, or field object levels.|
|`compiler_ouput_variables_prefix`|string|`@`|For use with the compiler hook. An array of output variables is passed to the compiler hook.|

## Example Use

For this example, we'll use the border field, found in the 
<a href="https://github.com/ReduxFramework/redux-framework/blob/master/sample/sample-config.php">sample-config.php</a>. 
To pass only a CSS selector and have Redux generate the CSS, use the [output](output.md) argument instead.
```php
array(
    'id'        => 'opt-header-border',
    'type'      => 'border',
    'title'     => __('Header Border Option', 'redux-framework-demo'),
    'subtitle'  => __('Subtitle goes here', 'redux-framework-demo'),
    'output_variables' => true,
    'desc'      => __('This is the description field.', 'redux-framework-demo'),
    'default'   => array(
        'border-color'  => '#1e73be', 
        'border-style'  => 'solid', 
        'border-top'    => '3px', 
        'border-right'  => '3px', 
        'border-bottom' => '3px', 
        'border-left'   => '3px'
    )
),
```

### Example Output

::: tip 
Redux will output the CSS in a single line. The example below is expanded for display purposes only.
:::

```css
:root {
    --site-header-border-top: 3px solid #1e73be;
    --site-header-border-right: 3px solid #1e73be;
    --site-header-border-bottom: 3px solid #1e73be;
    --site-header-border-left: 3px solid #1e73be;
}
```

## Using with the Compiler Hook
To further enhance this feature, we have added a new corresponding argument to the compiler hook. As such, the compiler hook has been updated accordingly.
```php
do_action( 'redux/options/' . $core->args['opt_name'] . '/compiler', $core->options, $compiler_css, $core->transients['changed_values'], $core->output_variables );
```

If you properly use an add_action, you can be passed the output_variables array which will contain key-value pairs that you can then use within a compiler.

```php
Array(
    '@opt-typography-body-color' => '#dd9933',
    '@opt-typography-body-font-size' => '30px'
    '@opt-typography-body-font-family' => 'Arial, Helvetica, sans-serif'
    '@opt-typography-body-font-weight' => 'Normal'
)
```

This enables the use of the variables within your SCSS. In order to output them all within your file, you need only join to a single string and output, joined by semi-colon. 

```php
$variables = join( ";\n", $output_variables );
```
