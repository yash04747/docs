# Taxonomy <Badge text="enhancement" type="warn"/>

If you are used the ReduxFramework declaration arrays, you know Redux Taxonomy. They're one and the same! The only difference is a parent array. We'll go through a few examples to get you up and running. Please know, you MUST have an options page for taxonomy to work. They're inter-connected. You can, however, make a fake options panel, and hide it from the admin menu. 

::: warning Table of Contents
[[toc]]
:::

::: tip Getting Started
To understand how to use extensions, you should read this article on [Using Extensions](../guides/basics/using-extensions.md).
 To shortcut the process, you can use the [Redux Build](http://build.redux.io/) site. Please be aware that a working 
 knowledge of PHP and CSS is required to properly use this extension. Should you not be familiar with one or the other 
 (or both), please refer to the following guides to get you started: 
 [Getting Started with PHP](http://www.php.net/manual/en/tutorial.php), 
 [CSS Introduction](http://www.w3schools.com/css/css_intro.asp).
:::

## Arguments

|Name|Type|Description|
|--- |--- |--- |
|id|string|You must provide an ID of some kind. This can be shared with your keys from your panel, and if so the values will be overridden for that given page in your global variable.|
|title|string|This is the title that appears on the box|
|taxonomy_types|array|Provide any number of taxonomy slugs for a given "term" box to appear.|
|add_visibility|boolean|All fields are by default hidden on the add term (edit-term.php) page. By specifying true to a "term" box, section, or field, it will be visible on this page.|
|style|string|`wp`, `wordpress` Removes the Redux box & sections styles to look like standard WordPress input fields. Must be used at the "box" level.|
|permissions|array|Just like standard Redux, you can set permission levels for "term" boxes, sections, or fields.|
|sections|array|Your sections array, the same style as a standard Redux config file.|

## Example Declaration
Since we've kept the structure exactly the same, start by constructing a section array like you normally would. We then 
add a level above called a "term" box, and away we go!

```php
Redux_Taxonomy::setTerm( $opt_name, array(
        'id'             => 'demo-taxonomy',
        'title'          => __( 'Cool Options', 'redux-framework-demo' ),
        'taxonomy_types' => array( 'category', 'post_tag' ),
        // Slug for every taxonomy you want
        'sidebar'        => false,
        // Sidebar with default Redux designs. If only one section is defined, this will be set to true.
        'style'       => 'wp',
        // Removes the Redux box/section styles. Makes Redux Taxonomy look like standard WP fields.
        //'add_visibility' => true, // Can bet set on term, section, or field level. Denotes what fields to be displayed on the add {TERM} pages.
        'sections'       => array(
            array(
                'title'  => __( 'Home Settings', 'redux-framework-demo' ),
                'icon'   => 'el-icon-home',
                'fields' => array(
                    array(
                        'id'             => 'text1',
                        'type'           => 'text',
                        'add_visibility' => true,
                        'title'          => __( 'Test Input', 'redux-framework-demo' ),
                    ),
                    array(
                        'id'    => 'text1',
                        'type'  => 'text',
                        'title' => __( 'Test Input2', 'redux-framework-demo' ),
                    ),
                )
            ),
            array(
                'title'  => __( 'Home Layout', 'redux-framework-demo' ),
                'desc'   => __( 'Redux Framework was created with the developer in mind. It allows for any theme developer to have an advanced theme panel with most of the features a developer would need. For more information check out the Github repo at: <a href="https://github.com/ReduxFramework/Redux-Framework">https://github.com/ReduxFramework/Redux-Framework</a>', 'redux-framework-demo' ),
                'icon'   => 'el-icon-home',
                'fields' => array(
                    array(
                        "id"             => "homepage_blocks",
                        "type"           => "sorter",
                        "title"          => "Homepage Layout Manager",
                        "desc"           => "Organize how you want the layout to appear on the homepage",
                        "compiler"       => 'true',
                        'add_visibility' => true,
                        'required'       => array( 'layout', '=', '1' ),
                        'options'        => array(
                            "enabled"  => array(
                                "placebo"    => "placebo", //REQUIRED!
                                "highlights" => "Highlights",
                                "slider"     => "Slider",
                                "staticpage" => "Static Page",
                                "services"   => "Services"
                            ),
                            "disabled" => array(
                                "placebo" => "placebo", //REQUIRED!
                            ),
                        ),
                    ),
                ),
            )
        )
    )
);
```

## Example Usage
Getting the data from a taxonomy term is as simple as using regular WordPress, and the `get_term_meta()` function. 
However, to keep things slim, Redux_Taxonomy never saves defaults to the database. If you want the default values, you 
need to use our custom function.

```php
    $data = Redux_Taxonomy::get_term_meta( 
        array( 
            'taxonomy' => $tag_id, // Taxonomy ID, also required
            'opt_name'=> $opt_name, // Required
            'key'=> false, // If you only want one value instead of the full array
        ) 
    );
```

This will return an array with all the meta for that taxonomy, as well as all the defaults. You will, however, have to 
know the ID of the term you wish to grab the defaults from.

### Missing Sidebar?!
For boxes with only one section, the sidebar is omitted when the HTML is output. If you want a side bar, use at least 
two sections within any given "term" box.

### How are the Redux Taxonomy Values Stored?
Redux Taxonomy stores each value as it's own key in the taxonomy meta using the new WordPress [update_term_meta()](https://developer.wordpress.org/reference/functions/update_term_meta/) 
and [delete_term_meta()](https://developer.wordpress.org/reference/functions/delete_term_meta/) functions. 
In this way, you can query against specific taxonomy values. If a value is default, our extension deletes it from the 
database to reduce on bloat, so be aware of this and use a default if nothing is returned.