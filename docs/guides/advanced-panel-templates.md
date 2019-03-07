---
title: "Advanced: Panel Templates"
---

# Panel Templates

As of Redux <strong>3.4.2.9+</strong>, the Redux templates have been decoupled from the core. That means that ANY 
developer can take the template files, and override them for their own customized Redux panel.

::: warning Table of Contents
[[toc]]
:::

## How's it done?
To do this is trivial. First, copy the templates from `~/ReduxCore/templates/panel` to a different location.

::: danger
Never, ever, **EVER** modify ReduxCore. Always move things out of the core to make modifications.
:::

Tell Redux where these new new files are, via the `templates_path` argument. That's it!

#### What if you change something?
Our templates use the same versioning of other products. If your panel is in `dev_mode`, and a template file has been 
updated in the core, a notice will be displayed in the panel.

## Won't this Change All Panels?
We built it so each panel can have it's own set of templates. It's all powered by the `opt_name` key. As long as you don't share keys with another panel, your customizations are yours and yours alone.

## Template Files

|Template File|Description|
|--|--|
|[container.tpl.php](https://github.com/reduxframework/redux-framework/blob/master/ReduxCore/templates/panel/container.tpl.php)|The template for the main panel container.|
|[content.tpl.php](https://github.com/reduxframework/redux-framework/blob/master/ReduxCore/templates/panel/content.tpl.php)|The template for the main content of the panel.|
|[footer.tpl.php](https://github.com/reduxframework/redux-framework/blob/master/ReduxCore/templates/panel/footer.tpl.php)|The template for the panel footer area.|
|[header.tpl.php](https://github.com/reduxframework/redux-framework/blob/master/ReduxCore/templates/panel/header.tpl.php)|The template for the panel header area.|
|[header_stickybar.tpl.php](https://github.com/reduxframework/redux-framework/blob/master/ReduxCore/templates/panel/header_stickybar.tpl.php)|The template for the header sticky bar.|
|[menu_container.tpl.php](https://github.com/reduxframework/redux-framework/blob/master/ReduxCore/templates/panel/menu_container.tpl.php)|The template for the menu container of the panel.|
