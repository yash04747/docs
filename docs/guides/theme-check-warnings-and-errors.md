# Theme Check Warnings and Errors

We take compliancy very serious here at Redux. Those who run Theme Check may get some warnings or errors. This document 
is to help you prepare your theme for submission to the WordPress.org directory or a marketplace such as Envato 
(ThemeForest/CodeCanyon). This article is primarily for users who are downloading from the GitHub Repo.

::: tip
Redux 4.x has been updated to solve a majority of the Warnings and Non-Errors. This doc has yet to be updated.
:::

## Deleting Un-needed Files
These files & directories are primarily for testing and development. If left, you will be denied on your submission.

- .tx/
- bin/
- tests/
- .gitignore
- .git/
- .travis.yml
- bootstrap_tests.php
- phpunit.xml
- node_modules/
- .ds_store
- codestyles/

## Warnings and Non-Errors

With those items removed, you will get a few more errors yet. We’ll go over each of these.

### INFO: The theme appears to use include or require

This is harmless and will not affect you. Disregard all of these messages.

### REQUIRED: Themes should use `add_theme_page()` for adding admin pages

FALSE! This is in regards to `add_submenu_page()`. That's how we add submenus to the panel menu. It will pass inspection. 
There's also a `add_dashboard_page()` reference. This also is harmless and will be incorporated at a later date.

### WARNING: Found PHP short tags in file `~/ReduxCore/inc/fields/raw/parsedown.php`

False again. This is a regular expression. Disregard.

### WARNING: `file_put_contents / file_get_contents / curl_init / curl_exec` was found...

We tried doing this, but it failed on several hosts. Now these items are primarily fallback for when the `WP_Filesystem` 
fails. And oh yes, it does fail on odd hosts. Again, these warning will not get you rejected. If they do, send the 
reviewer this page and you will make it through. You're feel to read our blog post about this whole ordeal entitled: 
[Sometimes Standards Don’t Always Work](https://reduxframework.com/2014/07/sometimes-standards-dont-always-work/). It's 
a real nail biter.  ;)

