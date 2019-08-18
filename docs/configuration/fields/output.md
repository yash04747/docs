---

title: "Output" 

---

# Using the `output` Argument

Using the output argument in fields that support it is a great way to generate dynamic CSS for those fields on the 
front-end of your WordPress site.  Redux will take the values for those fields, generate the appropriate CSS selectors, 
elements, and values and place them at the bottom of the page's `<HEAD>` section. This ensures your CSS will take 
priority over any other CSS used in your theme.

::: warning Table of Contents
[[toc]]
:::

## Fields Supporting `output`

|Field|CSS property output|
|--- |--- |
|[background](../../core-fields/background.md)|background-color, background-umage:url, background-repeat, background-size, background-attachment, background-position|
|[border](../../core-fields/border.md)|border, border-left, border-right, border-top, border-bottom|
|[color](../../core-fields/color.md)|Default: color.  CSS Property may be manually set.  See [setting color properties](#setting-color-properties) below.|
|[color_rgba](../../core-fields/color-rgba.md)|Default: color.  CSS Property may be manually set.  See [setting color properties](#setting-color-properties) below.|
|[dimensions](../../core-fields/dimensions.md)|height, width|
|[image_select](../../core-fields/image-select.md)|background-image|
|[link_color](../../core-fields/link-color.md)|color|
|[spacing](../../core-fields/spacing.md)|top, bottom, left, right in absolute mode.  padding and margin modes append *-top, *-bottom, *-left, *-right.|
|[typography](../../core-fields/typography.md)|font-family, font-weight, font-style, font-size, line-height, color, text-align, word-spacing, letter-spacing|


Before adding the output argument to one of the indicated fields, you will need to know which <a href="http://www.w3schools.com/cssref/css_selectors.asp">CSS selectors</a> in which to apply to the field's value.  These will be selectors from your theme's CSS you wish to change dynamically via values from fields that offer output.  All that now need be done is assign them to the output argument in an array without the chosen field array, as shown below.  Multiple selectors are permitted.

For this example, we'll use the border field, found in the <a href="https://github.com/ReduxFramework/redux-framework/blob/master/sample/sample-config.php">sample-config.php</a>
```php
array(
    'id'        => 'opt-header-border',
    'type'      => 'border',
    'title'     => __('Header Border Option', 'redux-framework-demo'),
    'subtitle'  => __('Subtitle goes here', 'redux-framework-demo'),
    'output'    => array('.site-header'), // An array of CSS selectors
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

Redux will then output the following CSS into your WordPress pages (formatted in one single line, the formatting below is for the benefit of display on this page).

[css]
.site-header{
    border-top    :3px solid #1e73be;
    border-right  :3px solid #1e73be;
    border-bottom :3px solid #1e73be;
    border-left   :3px solid #1e73be;
}
[/css]

## Setting Color Properties
The color and color_rgba fields can be used exactly as shown above for the default CSS element of color.  If you wish to choose a different element (or mode), it can be specified in the output array value as a key/pair.  For example, let suppose you want to output a color field as background-color, instead of color.  The following output array in key/pair format would accomplish this:

```php
array(
    'id'        => 'opt-color-demo',
    'type'      => 'color',
    'title'     => __('Background Color', 'redux-framework-demo'),
    'subtitle'  => __('Pick a background color.', 'redux-framework-demo'),
    'default'   => '#dd9933',
    'output'    => array('background-color' => '.site-header')
),
```

Alternatively, multiple elements could be specified for different selectors.

```php
array(
    'id'        => 'opt-color-demo',
    'type'      => 'color',
    'title'     => __('Background Color', 'redux-framework-demo'),
    'subtitle'  => __('Pick a background color.', 'redux-framework-demo'),
    'default'   => '#dd9933',
    'output'    => array(
        'background-color' => '.site-header', 
        'color'            => '.site-footer'
    )
),
```

Multiple selectors are also supported.  Separate them with commas.

```php
array(
    'id'        => 'opt-color-demo',
    'type'      => 'color',
    'title'     => __('Background Color', 'redux-framework-demo'),
    'subtitle'  => __('Pick a background color.', 'redux-framework-demo'),
    'default'   => '#dd9933',
    'output'    => array('background-color' => '.site-header, .site-footer')
),
```