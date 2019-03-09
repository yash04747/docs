---
title: "Advanced: Typography Preview w/ Local Fonts"
---

# Typography Preview with Local Fonts
When specifying fonts used locally in your theme in the typography field's `fonts` argument, the will not render in the 
preview field. We've included an undocumented workaround in the typography field to fix this minor oversight. For the 
record, 'undocumented' is another way of saying the functionality is offered as a courtesy. Officially, the feature is 
unsupported. If it works for you, great! If not, you'll have to wait until font uploading is officially supported (in 
the future we will offer a custom font uploading feature for the typography field, which will solve this particular issue).

::: warning Table of Contents
[[toc]]
:::

## The Problem
Many theme developers use custom fonts for their themes. This is typically accomplished by specifying the font-face in 
the theme's CSS. For this example, we will be using the 'Open Sans' font. (Yes, we're aware it's part of the Google 
font's package. This is for example purposes only.)

Let's suppose a theme developer wants to use their own version of Open Sans in their theme. They would add the following 
lines to the theme's CSS:

```css
@font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
    src: local("Open Sans Light"), local("OpenSans-Light"), url("http://themes.googleusercontent.com/static/fonts/opensans/v6/DXI1ORHCpsQm3Vp6mXoaTXhCUOGz7vYGh680lGh-uXM.woff") format("woff");
}

@font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    src: local("Open Sans Bold"), local("OpenSans-Bold"), url("http://themes.googleusercontent.com/static/fonts/opensans/v6/k3k702ZOKiLJc3WVjuplzHhCUOGz7vYGh680lGh-uXM.woff") format("woff");
}

@font-face {
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 400;
    src: local("Open Sans Italic"), local("OpenSans-Italic"), url("http://themes.googleusercontent.com/static/fonts/opensans/v6/xjAJXh38I15wypJXxuGMBobN6UDyHWBl620a-IRfuBk.woff") format("woff");
}
```

Let's also suppose this theme developer - in their typography field fonts argument specifies the following array.

```php
$fonts = array (
    'Open Sans,arial,helvatica'             => 'Open Sans',
    'Arial,helvetica,sans-serif'            => 'Arial',
    'helvetica,sans-serif,arial'            => 'Helvatica',
    'sans-serif,arial,helvatica'            => 'Sans Serif',
    'verdana,san-serif,helvatica'           => 'Verdana'
);
```

When one selects Open Sans in the typography font family field, Open Sans will not render in the preview area. This is 
because the theme's CSS file is not loaded on the admin side of WordPress. Because of this, no reference to the theme's 
CSS specified fonts are available for Redux to render a proper preview. 

One might then say, 'well, can't I just pass a reference to my theme's CSS to the typography field, so it'll be included 
in the admin page's HTML?' The answer is an emphatic <strong>NO!</strong> The theme's CSS, in most - if not all - cases 
will cause the admin area to render improperly, creating a great big mess.

So how then can we coerce the typography field to render locally specified fonts?

## The Solution
This is where our undocumented typography argument comes into play. It's called `ext-font-css`, 'eternal font CSS' for 
short. This argument may be used to pass a font specific CSS file to the typography field for proper reference and font 
rendering. Some additional steps are involved in successfully implementing this argument.

- First, it will be necessary to create a new CSS file, which we'll call `fonts.css`. You can place this new CSS file 
wherever you like, as long as you remember where it's specified for a later step in this example. For our purposes, 
we'll place it in the root folder of the theme. Inside this file, you will specific any and all local fonts you wish to 
use with your theme, and that's all that goes into this file. Font declarations, and nothing else, like the font-face 
example indicated above.
- In the Redux config file for the typography field, add the following line into your typography arguments array: 
`'ext-font-css' => $theme_url . 'css/fonts.css'`. In this example, `$theme_url` is a variable that holds the specific 
URL to your theme's folder. Specify this information however you see fit, as long as the value for this argument is a 
valid path to your font.css file. Redux will take the URL to the CSS file, register and enqueue it into the Redux 
options panel.

### Pretty simple, eh?
If you choose to go this route, it's recommended to **not** repeat the font declarations in the theme's CSS file. Rather, 
register and enqueue the font.css with the theme CSS. This gives the benefit of having any local fonts in the theme 
available on both the front end and back end of your theme.

