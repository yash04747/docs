# Social Profiles <Badge text="field" type="warn"/>

The Redux Social Profiles extension easily allows one to create and display links to their social media through code and/or an included widget.

::: warning Table of Contents
[[toc]]
:::

::: tip Getting Started
To understand how to use extensions, you should read this article on [Using Extensions](../guides/basics-using-extensions.md).
 To shortcut the process, you can use the [Redux Build](http://build.redux.io/) site. Please be aware that a working 
 knowledge of PHP and CSS is required to properly use this extension. Should you not be familiar with one or the other 
 (or both), please refer to the following guides to get you started: 
 [Getting Started with PHP](http://www.php.net/manual/en/tutorial.php), 
 [CSS Introduction](http://www.w3schools.com/css/css_intro.asp).
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`social_profiles`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the field.|
|subtitle|string||Subtitle display of the field, situated beneath the title.|
|desc|string||Description of the field, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|compiler|bool|`false`|Flag to run the compiler hook.  More info|
|widget_msg|string|Go to the Widgets page to add the Redux Social Widget to any active widget area.|Message to display at the top of the field to inform the user of the extensions widget option.  Use the %s variable to include a link to the widgets area.|
|show_widget_msg|bool|`true`|Flag to determine if the widget message is to displayed, or not.|
|include|array||Optional.  Array of default icons to show, instead of the entire default array.  See "The Include Argument" below.|
|icons|array||Optional.  Array of arrays specifying custom profiles not included in the default set, or to edit existing profiles.  See "Adding/Editing Additional Icons" below.|
|hint|array||Array containing the `content` and optional `title` arguments for the hint tooltip.  More info|

## The Include Argument
The Social Profile extension includes 82 default social profile icons.  The icons and their IDs are as follows.

|Icon Name|Shortcode|ID|
|--- |--- |--|
|ADN|`[icon name="adn" class="fa-2x"]`|adn|
|Android|`[icon name="android" class="fa-2x"]`|android|
|Apple|`[icon name="apple" class="fa-2x"]`|apple|
|behance|`[icon name="behance" class="fa-2x"]`|behance|
|behance|`[icon name="behance-square" class="fa-2x"]`  (square icon)|behance-square|
|Bitbucket|`[icon name="bitbucket" class="fa-2x"]`|bitbucket|
|Bitbucket (square icon)|`[icon name="bitbucket-square" class="fa-2x"]`|bitbucket-square|
|Bitcoin|`[icon name="btc" class="fa-2x"]`|bitcoin|
|Codepen|`[icon name="codepen" class="fa-2x"]`|codepen|
|CSS3|`[icon name="css3" class="fa-2x"]`|css3|
|Delicious|`[icon name="delicious" class="fa-2x"]`|delicious|
|Deviantart|`[icon name="deviantart" class="fa-2x"]`|deviantart|
|Digg|`[icon name="digg" class="fa-2x"]`|digg|
|Dribbble|`[icon name="dribbble" class="fa-2x"]`|dribbble|
|Dropbox|`[icon name="dropbox" class="fa-2x"]`|dropbox|
|Drupal|`[icon name="drupal" class="fa-2x"]`|drupal|
|Empire|`[icon name="empire" class="fa-2x"]`|empire|
|Facebook|`[icon name="facebook" class="fa-2x"]`|facebook|
|Facebook|`[icon name="facebook-square" class="fa-2x"]`  (square icon)|facebook-square|
|Flickr|`[icon name="flickr" class="fa-2x"]`|flickr|
|FourSquare|`[icon name="foursquare" class="fa-2x"]`|foursquare|
|git|`[icon name="git" class="fa-2x"]`|git|
|git (square icon)|`[icon name="github-square" class="fa-2x"]`|git-square|
|github|`[icon name="github" class="fa-2x"]`|github|
|github alt|`[icon name="github-alt" class="fa-2x"]`|github-alt|
|github (square icon)|`[icon name="github-square" class="fa-2x"]`|github-square|
|git tip|`[icon name="gittip" class="fa-2x"]`|gittip|
|Google|`[icon name="google" class="fa-2x"]`|google|
|Google Plus|`[icon name="google-plus" class="fa-2x"]`|google-plus|
|Google Plus (square icon)|`[icon name="google-plus-square" class="fa-2x"]`|google-plus-square|
|Hacker News|`[icon name="hacker-news" class="fa-2x"]`|hacker-news|
|HTML5|`[icon name="html5" class="fa-2x"]`|html5|
|Instagram|`[icon name="instagram" class="fa-2x"]`|instagram|
|Joomla|`[icon name="joomla" class="fa-2x"]`|joomla|
|JS Fiddle|`[icon name="jsfiddle" class="fa-2x"]`|jsfiddle|
|LinkedIn|`[icon name="linkedin" class="fa-2x"]`|linkedin|
|LinkedIn|`[icon name="linkedin-square" class="fa-2x"]`  (square icon)|linkedin-square|
|Linux|`[icon name="linux" class="fa-2x"]`|linux|
|MaxCDN|`[icon name="maxcdn" class="fa-2x"]`|maxcdn|
|OpenID|`[icon name="openid" class="fa-2x"]`|openid|
|Page Lines|`[icon name="pagelines" class="fa-2x"]`|pagelines|
|Pied Piper|`[icon name="pied-piper" class="fa-2x"]`|pied-piper|
|Pied Piper alt|`[icon name="pied-piper-alt" class="fa-2x"]`|pied-piper-alt|
|Pinterest|`[icon name="pinterest" class="fa-2x"]`|pinterest|
|Pinterest (square icon)|`[icon name="pinterest-square" class="fa-2x"]`|pinterest-square|
|QQ|`[icon name="qq" class="fa-2x"]`|qq|
|Rebel|`[icon name="rebel" class="fa-2x"]`|rebel|
|Reddit|`[icon name="reddit" class="fa-2x"]`|reddit|
|Reddit (square icon)|`[icon name="reddit-square" class="fa-2x"]`|reddit-square|
|Ren Ren|`[icon name="renren" class="fa-2x"]`|renren|
|Share alt|`[icon name="share-alt" class="fa-2x"]`|share-alt|
|Share (square icon)|`[icon name="share-alt-square" class="fa-2x"]`|share-alt-square|
|Skype|`[icon name="skype" class="fa-2x"]`|skype|
|Slack|`[icon name="slack" class="fa-2x"]`|slack|
|Sound Cloud|`[icon name="soundcloud" class="fa-2x"]`|soundcloud|
|Spotify|`[icon name="spotify" class="fa-2x"]`|spotify|
|Stack Exchange|`[icon name="stack-exchange" class="fa-2x"]`|stack-exchange|
|Stack Overflow|`[icon name="stack-overflow" class="fa-2x"]`|stack-overflow|
|Steam|`[icon name="steam" class="fa-2x"]`|steam|
|Steam (square icon)|`[icon name="steam-square" class="fa-2x"]`|steam-square|
|Stumble Upon|`[icon name="stumbleupon" class="fa-2x"]`|stumbleupon|
|Stumble Upon (circle icon)|`[icon name="stumbleupon-circle" class="fa-2x"]`|stumbleupon-circle|
|Tencent Weibo|`[icon name="tencent-weibo" class="fa-2x"]`|tencent-weibo|
|Trello|`[icon name="trello" class="fa-2x"]`|trello|
|Tumblr|`[icon name="tumblr" class="fa-2x"]`|tumblr|
|Tumblr (square icon)|`[icon name="tumblr-square" class="fa-2x"]`|tumblr-square|
|Twitter|`[icon name="twitter" class="fa-2x"]`|twitter|
|Twitter (square icon)|`[icon name="twitter-square" class="fa-2x"]`|twitter-square|
|Vimeo (square icon)|`[icon name="vimeo-square" class="fa-2x"]`|vimeo-square|
|Vine|`[icon name="vine" class="fa-2x"]`|vine|
|VK|`[icon name="vk" class="fa-2x"]`|vk|
|Weibo|`[icon name="weibo" class="fa-2x"]`|weibo|
|Weixin|`[icon name="weixin" class="fa-2x"]`|weixin|
|Windows|`[icon name="windows" class="fa-2x"]`|windows|
|WordPress|`[icon name="wordpress" class="fa-2x"]`|wordpress|
|Xing|`[icon name="xing" class="fa-2x"]`|xing|
|Xing (square icon)|`[icon name="xing-square" class="fa-2x"]`|xing-square|
|Yahoo|`[icon name="yahoo" class="fa-2x"]`|yahoo|
|Yelp|`[icon name="yelp" class="fa-2x"]`|yelp|
|YouTube|`[icon name="youtube" class="fa-2x"]`|youtube|
|YouTube (play icon)|`[icon name="youtube-play" class="fa-2x"]`|youtube-play|
|YouTube (square icon)|`[icon name="youtube-square" class="fa-2x"]`|youtube-square|

By default, the extension offers all 82 to the user.  This doesn't mean you must offer each and every one.  Using the `include` argument, you may specify which profile icons you'd prefer to offer by assigning an array of existing icons IDs.  For example, let's say you'd like to offer only Facebook, Twitter, LinkedIn, and Google Plus.  The `include` argument would look as follows:

```php
array(
    'include' => array( 'facebook', 'twitter', 'linkedin', 'google-plus' )
)
```

## Adding/Editing Additional Icons

It's easy to add additional (or edit existing) social profile icons.  Each profile contains the following arguments:

|Name|Type|Default|Description|
|--- |--- |--- |--- |
|id|string||Unique id of the profile.|
|icon|string||Font Awesome icon class (cheatsheet) of the icon to display.  Icon classes from other sets may be used, provided the icon set is properly installed and enqueued.|
|enabled|bool|`false`|Flag to set the default state of the social profile.|
|name|string||Display name of the social profile|
|color|string||Hex or RGBA string of the icons color.|
|background|string||Hex or RGBA string of the icons backcolor.|
|label|string||Link URL|Optional.  Text to appear over the URL input box.  This is useful should you want to specify a user name instead of a full URL.|
|url|string||Optional. URL of the social profile.|


The following example would add a PayPal profile to the social profile icon set:

```php
'icons' => array(
    array (
        'id'         => 'paypal',
        'icon'       => 'fa-paypal',
        'enabled'    => false,
        'name'       => __ ( 'PayPal', 'redux-framework-demo' ),
        'background' => '',
        'color'      => '#1769ff',
        'url'        => '',
    )
)
```

The `icons` argument may also be used to edit profiles from the default set.  In this instance, you'd need only specify the argument you'd like to alter.  The following example would alter the Apple profile by changing the name (with apologies in advance to Mac fan boys), label, and default state.

```php
'icons' => array(
    array (
        'id'      => 'apple',
        'enabled' => true,
        'name'    => __( 'CrApple', 'redux-framework-demo' ),
        'label'   => 'Enter username:',
    )
)
```

## Example Declaration

The following sets up the basic social profile field without the additions or alterations specified above.

```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'        => 'opt-social-profiles',
    'type'      => 'social_profiles',
    'title'     => __( 'Social Profiles', 'redux-framework-demo' ),
    'subtitle'  => __( 'Click an icon to activate it, drag and drop to change the icon order.', 'redux-framework-demo' ),
) );
```

## Example Usage
### The Social Profiles Widget
Using the social profiles widget redefines easy.  In the widget area of WordPress, add the Redux Social Profiles widget 
to the sidebar of your choice, and set the desired title.  The only icons that will appear in the widget's frontend will 
be the enabled social profiles.

### Code
The extension's return value is an array of key/pair values. The key contains the profile's index key, while the value contains the array of the profiles arguments. It will be necessary to use a for/each loop to extract the values (Please remember to replace `redux_demo` with your own `<a href="/redux-framework/arguments/opt_name" title="opt_name">opt_name</a>` argument).  The following code returns only the saved values.  For this example to have any real value, you'll need to write the appropriate HTML, or use one of the helper functions below.

```php
global $redux_demo;

foreach ( $redux_demo['opt-social-profiles'] as $idx => $arr ) {
    echo 'Profile ID: ' . $arr['id'];
    echo 'Enabled: '    . $arr['enabled'];
    echo 'Icon: '       . $arr['icon'];
    echo 'Name: '       . $arr['name'];
    echo 'URL: '        . $arr['url'];
    echo 'Color: '      . $arr['color'];
    echo 'Background: ' . $arr['background'];
}

// Or do the following for full icon rendering
foreach ( $redux_demo['opt-social-profiles'] as $idx => $arr ) {
    if ( isset( $arr['enabled'] ) && !empty( $arr['enabled'] ) ) {
        $id     = $arr['id'];
        $url    = $arr['url'];
        $icons .= '';
        $icons .= '</pre><ul><li class="' . $id . '"><a href="' . esc_attr( esc_url( $url ) ) . '" target="_blank"><i class="' . esc_attr( $arr['icon'] ) . '"></i></a></li></ul><pre>';
    }

    $output = '</pre><ul class="icons">';
    $output .= $icons;
    $output .= '</ul><pre>';
}
```

## Helper Functions
The Social Profiles extension includes two helper functions.

### redux_render_icon_from_id()
This function, based on the echo parameter will either echo a fully rendered icon, or return the HTML for use with your 
own rendering purposes.

**Function Parameters in Order**

|Parameter|Type|Default|Description|
|--|--|--|--|
|[opt_name](../configuration/arguments-global.md#opt-name)|string||Required. The [opt_name](../configuration/arguments-global.md#opt-name) specified in your arguments|
|id|string||Required. ID of the social profile field whose information is to be rendered.|
|echo|bool|`true`|Optional. When set to true, the function automatically echos the rendered HTML. When set to false, the HTML is returned.|
|a_class|bool||Optional. Sets the passed class name to the a tag of the rendered icon HTML.|

::: tip
The rendered icon will be it's normal small size.  It's up to you, the developer, to style the 
icon via CSS as desired.
::: 

#### Usage

```php

// Please remember to replace 'redux_demo' with your project's unique opt_name.
// Example assumes Facebook social profile is enabled and URL properly filled out.
$html = redux_render_icon_from_id( 'OPT_NAME', 'facebook', false );

echo $html;

// Result:
// <a class="" href="http://www.facebook.com/my_facebook_name">
//     <i class="fa fa-facebook" style="color: #3b5998; background-color: transparent;" title=""></i>
// </a>
```

### redux_social_profile_value_from_id( )
This function returns the specified value data of the specified social profile ID.

**Function Parameters in Order**

|Parameter|Description|
|--|--|
|[opt_name](../configuration/arguments-global.md#opt-name)|Required. The [opt_name](../configuration/arguments-global.md#opt-name) specified in your arguments|
|id|Required. ID of the social profile field whose information is to be rendered.|
|value|Required. Value of the social profile for which whose data you would like returned.  Value options include `id`, `icon`, `enabled`, `name`, `color`, `background`, `label`, or `url`.|

#### Usage

```php
// Example assumes Facebook social profile is enabled and URL properly filled out.
$url = redux_social_profile_value_from_id( 'OPT_NAME', 'facebook', 'url');

echo 'Facebook URL: ' $url;

// Result:  
// Facebook URL: http://www.facebook.com/my_facebook_name
```

