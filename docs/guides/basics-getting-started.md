---
title: "Basics: Getting Started" 
---

# Getting Started

Redux has a few easy ways to quickly get started, each one appealing to a different skill level and use case. Read 
through to see what suits your particular needs.

::: warning Table of Contents
[[toc]]
:::

## Installing
To even start playing with Redux, you have to install it. The quickest approach is to install the WordPress.org plugin,
but there are many other approaches. [Read more in our install docs](basics-install.md).

## Core Concepts
Another great guide to read is our core concepts. Without understanding how Redux is structured you might get a little
confused. [Read more in our core concepts docs](basics-core-concepts.md)

## Basic Config

Once installed, you can start digging in. Let's start with a basic config. You can also modify the [barebones example](https://github.com/reduxframework/redux-framework/blob/master/sample/barebones-config.php)
or the more extensive [sample config](https://github.com/reduxframework/redux-framework/blob/master/sample/sample-config.php) 
files. We hope that you'll customize our examples, adapting them to suit your needs.

```php
<?php
    if ( ! class_exists( 'Redux' ) ) {
        return;
    }

    $opt_name = "redux_demo";

    $theme = wp_get_theme(); // For use with some settings. Not necessary.

    $args = array(
        'display_name'         => $theme->get( 'Name' ),
        'display_version'      => $theme->get( 'Version' ),
        'menu_title'           => __( 'Sample Options', 'redux-framework-demo' ),
        'customizer'           => true,
    );

    Redux::set_args( $opt_name, $args );

    Redux::set_section( $opt_name, array(
        'title'  => __( 'Basic Field', 'redux-framework-demo' ),
        'id'     => 'basic',
        'desc'   => __( 'Basic field with no subsections.', 'redux-framework-demo' ),
        'icon'   => 'el el-home',
        'fields' => array(
            array(
                'id'       => 'opt-text',
                'type'     => 'text',
                'title'    => __( 'Example Text', 'redux-framework-demo' ),
                'desc'     => __( 'Example description.', 'redux-framework-demo' ),
                'subtitle' => __( 'Example subtitle.', 'redux-framework-demo' ),
                'hint'     => array(
                    'content' => 'This is a <b>hint</b> tool-tip for the text field.<br/><br/>Add any HTML based text you like here.',
                )
            )
        )
    ) );
```

## Community

We have an increadibly active community with thousands of developers world wide. Stay up to date on the development of 
Redux and reach out to our community with these helpful resources.

- Chat with fellow Redux users on our [slack channel](http://slack.redux.io/).
- For help using Redux, ask on StackOverflow using the tag [redux-framework](https://stackoverflow.com/search?q=%23redux-framework).
- Find inspiring examples of people building with Redux at the [Redux Showcase](https://redux.io/showcase/envato-market/).
- Submit bug issues and pull-requests on our [issue tracker](https://github.com/reduxframework/redux-framework/issues). Be sure to read our [contributing guidelines](https://github.com/reduxframework/redux-framework/blob/master/CONTRIBUTING.md) before posting, or we'll just point you to that document to get the information we need. :)
