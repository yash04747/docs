# Custom Fonts

The Custom Fonts extensions is for users to upload a .ttf, .woff, .otf, or .zip containing any of the afore mentioned fonts. It will then generate whatever fonts it may need, and make the font accessible via the typography field within Redux. A custom font CSS file will be enqueued to the panel as well as the frontend.

## Getting Started
To understand how to use extensions, you should read this article on [Loading Extensions](../guide/loading-extensions.md). To shortcut the process, you should use the [Builder](http://build.reduxframework.com/). Please be aware that a working knowledge of PHP and CSS is required to properly use this field. Should you not be familiar with one or the other (or both), please refer to the basic guides to get you started: [Getting Started with PHP](http://www.php.net/manual/en/tutorial.php), [CSS Introduction](http://www.w3schools.com/css/css_intro.asp).

## Placement of the Custom Fonts Field
By default the custom fonts field is added to a dynamic section at the end of your panel called Font Control. Once you load the extension it does all the heavy lifting.

Now with Custom Fonts 1.0.2, you can now move the field to any section you desire. You need only include one field of type `custom_fonts`, and custom fonts will be added wherever you specify. The dynamic section called Font Control will be removed. This new feature requires Custom Fonts 1.0.2+ as well as Redux 3.4.1+.