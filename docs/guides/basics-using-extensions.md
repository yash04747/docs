---
title: "Basics: Using Extensions"
---

# Using and Creating Extensions

Extensions are one of the most powerful features of Redux. Any part of Redux can be overloaded to do virtually
__***anything***__ with extensions. 

::: warning Table of Contents
[[toc]]
:::

::: danger WARNING: Extensions must be loaded BEFORE you use them
For the best result, always load your extension before you try using it in a config. Some extensions have custom APIs that
will not be included, and thus results can be poor. Always load extensions, **then** use them.
:::

## Loading an Extension

Using the Redux API, loading a single extension or a folder of extensions is trivial.

```php
Redux::load_extensions( 'OPT_NAME', 'RELATIVE_PATH_TO_DIRECTORY' );
```

That's it! Redux will recognize your extension(s) for your instance and you can use the added functionality in your declaration.

::: tip
Make sure if you're including multiple extensions they are all in their own named folders within the directory you specify
in order to load them all.

```text
extensions/
├── metaboxes/
├── customizer/
├── custom_field/
    ├── extension_custom_field.php
    ├── custom_field/
        ├── field_custom_field.css
        ├── field_custom_field.js
        ├── field_custom_field.php
```
:::

## Fetching Extensions

Sometimes you need to fetch the existing extensions to identify what is being used. 

### Redux::getExtensions()

This method requires one or two parameters depending on the desired return value.

#### Fetching all Extensions

```php
Redux::getExtensions( $opt_name );
```
The return value will be an array of loaded extensions containing key/pair information of `path` (the path to the extension) and `class` (the classname of the extension). On failure, false is returned.

#### Fetching a Single Extension

To fetch the path of a single extension, use the following:

```php
Redux::getExtensions( $opt_name, 'EXTENSION_NAME' );
```

## Creating a Custom Extension

Creating your own extension is very simple. In fact, if you want to change the way a Redux field works, you should
**always** use an extension instead of modifying the core. 

To really dig in, try it yourself using out [extension boilerplate](https://github.com/ReduxFramework/extension-boilerplate).

### Extension Folder Structure
All extensions must follow a similar structure. 

```text
├── custom_field/
    ├── extension_custom_field.php
    ├── custom_field/
        ├── field_custom_field.css
        ├── field_custom_field.js
        ├── field_custom_field.php
        ├── field_custom_field.php
```



