---
title: "Basics: Installing" 
---

# Installing

Redux has a few easy ways to quickly get started, each one appealing to a different skill level and use case. Read 
through to see what suits your particular needs.

::: warning Table of Contents
[[toc]]
:::

## Downloading
  
### WordPress.org Plugin
By using the Redux plugin, you can ensure your users will always be up to date with the most stable release. And believe 
us, we're obsessed with backwards compatability!

[WordPress.org Plugin](https://wordpress.org/plugins/redux-framework)

### [GitHub Repository](https://github.com/reduxframework/redux-framework/)
If stability isn't enough for you, why not work with the cutting edge? Our [repo](https://github.com/reduxframework/redux-framework/) is highly active and we work with the 
community to vet any changes or improvements to the Redux core.

[GitHub Repository](https://github.com/reduxframework/redux-framework/)

### Custom Bundle
Looking for a custom build? Want to customize Redux for your needs, or want to have a solid example of where to begin? 
Try the [builder](https://build.redux.io) and you'll be developing in no time at all.

[Redux Builder](https://build.redux.io)

## Using Composer
You're not a developer, you're a code jedi. You laugh at copy and paste! Why not try Composer and Redux. It will make 
your develop that much easier.

### WP Packagist
The most stable of releases reside on WordPress.org. Only those releases that have been tested by the masses. For the 
ultimate in stability, use this configuration.

```json
{
    "repositories": [
        {
            "type": "composer",
            "url": "https://wpackagist.org"
        }
    ],
    "require": {
        "wpackagist-plugin/redux-framework": "*"
    }
}
```

### Repo Stable Release
Though stable, these releases are often pre-release to WordPress.org. Stable, but not fully tested by the masses yet.

```json
{
    "require": {
        "reduxframework/redux-framework": "*"
    }
}
```

### Repo Master Branch
Go forth young padawan. Do not underestimate the potential bugs of the master branch. :)

```json
{
    "require": {
        "reduxframework/redux-framework": "dev-master"
    }
}
```

## File Structure
Redux comes in two forms. The first is a plugin form, and the second is the full repo of which you only need a subset 
to run Redux. In both of these packages, `ReduxCore` is the only folder that matters, as the rest of the files just add 
additional features.

### Plugin Structure
Once downloaded, unzip the compressed folder to see the structure of (the compiled) Redux Framework plugin. You'll 
see something like this:

```text
redux-framework/
├── code-styles/
├── ReduxCore/
├── sample/
    ├── sample-config.php
    ├── barebones-config.php
```

You'll notice the sample config is present here. You can activate the Redux sample-config file by activating the Redux 
plugin, and clicking on the **Activate Demo Mode** on the plugins view within your WordPress admin.

### Repository or Composer Structure
Once downloaded, you will find many more files than the plugin. It should look something like this:

```text
redux-framework/
├── .tx/
├── bin/
├── code-styles/
├── ReduxCore/
├── sample/
    ├── sample-config.php
    ├── barebones-config.php
├── tests/
```

::: danger Embedding the Redux repo will not pass approval
Be warned that if you attempt to embed the entire Redux repo inside a theme or plugin it will not pass approval for many 
marketplaces including WordPress.org and [ThemeForest](https://themeforest.net?ref=TeamRedux).
:::