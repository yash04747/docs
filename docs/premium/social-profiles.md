# Social Profiles

The Redux Social Profiles extension easily allows one to create and display links to their social media through code and/or an included widget.

## Getting Started
To understand how to use extensions, you should read this article on <a href="/redux-framework/advanced/loading-extensions/">Loading Extensions</a>. To shortcut the process, you should use the <a href="http://generate.reduxframework.com/" target="_blank">Redux Generator</a>. Please be aware that a working knowledge of PHP and CSS is required to properly use this field. Should you not be familiar with one or the other (or both), please refer to the basic guides to get you started: <a href="http://www.php.net/manual/en/tutorial.php">Getting Started with PHP</a>, <a href="http://www.w3schools.com/css/css_intro.asp">CSS Introduction</a>.
## Arguments
<table border="0">
<tbody>
<tr>
<td style="text-align: center;"><strong>Name</strong></td>
<td style="text-align: center;"><strong>Type</strong></td>
<td style="text-align: center;"><strong>Default</strong></td>
<td style="text-align: center;"><strong>Description</strong></td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>'social_profiles'</td>
<td>Value identifying the field type.</td>
</tr>
<tr>
<td>id</td>
<td>string</td>
<td></td>
<td>Unique ID identifying the field. Must be different from all other field IDs.</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td></td>
<td>Displays title of the field.</td>
</tr>
<tr>
<td>subtitle</td>
<td>string</td>
<td></td>
<td>Subtitle display of the field, situated beneath the title.</td>
</tr>
<tr>
<td>desc</td>
<td>string</td>
<td></td>
<td>Description of the field, appearing beneath the field control.</td>
</tr>
<tr>
<td>class</td>
<td>string</td>
<td></td>
<td>Appends any number of classes to the field's class attribute.</td>
</tr>
<tr>
<td>compiler</td>
<td>bool</td>
<td>false</td>
<td>Flag to run the compiler hook. <a title="Integrating a Compiler" href="/redux-framework/advanced/integrating-a-compiler/"><i class="el-icon-circle-arrow-right"></i> More info</a></td>
</tr>
<tr>
<td>widget_msg</td>
<td>string</td>
<td>Go to the <a href="%s">Widgets</a> page to add the Redux Social Widget to any active widget area.</td>
<td>Message to display at the top of the field to inform the user of the extensions widget option.  Use the %s variable to include a link to the widgets area.</td>
</tr>
<tr>
<td>show_widget_msg</td><td>bool</td><td>true</td><td>Flag to determine if the widget message is to displayed, or not.</td>
</tr>
<tr>
</tr>
<tr>
<td>include</td><td>array</td><td></td><td>Optional.  Array of default icons to show, instead of the entire default array.  See "The Include Argument" below.</td>
</tr>
<tr>
<td>icons</td><td>array</td><td></td><td>Optional.  Array of arrays specifying custom profiles not included in the default set, or to edit existing profiles.  See "Adding/Editing Additional Icons" below.</td>
</tr>
<tr>
<td>hint</td>
<td>array</td>
<td></td>
<td>Array containing the `content` and optional `title` arguments for the hint tooltip. <a class="more_info" title="Using Hints in Fields" href="/redux-framework/the-basics/using-hints-in-fields/"><i class="el-icon-circle-arrow-right"></i> More info</a></td>
</tr>
</tbody>
</table>

## 
The Include ArgumentThe Social Profile extension includes 82 default social profile icons.  The icons and their IDs are as follows.

<table border="0">
<tbody>
<tr>
<td style="text-align: center;"><strong>Icon</strong></td>
<td style="text-align: center;"><strong>ID</strong></td>
</tr>
<tr>
<td>[icon name="adn" class="fa-2x"] ADN</td>
<td>adn</td>
</tr>
<tr>
<td>[icon name="android" class="fa-2x"] Android</td>
<td>android</td>
</tr>
<tr>
<td>[icon name="apple" class="fa-2x"] Apple</td>
<td>apple</td>
</tr>
<tr>
<td>[icon name="behance" class="fa-2x"] behance</td>
<td>behance</td>
</tr>
<tr>
<td>[icon name="behance-square" class="fa-2x"] behance (square icon)</td>
<td>behance-square</td>
</tr>
<tr>
<td>[icon name="bitbucket" class="fa-2x"] Bitbucket</td>
<td>bitbucket</td>
</tr>
<tr>
<td>[icon name="bitbucket-square" class="fa-2x"] Bitbucket (square icon)</td>
<td>bitbucket-square</td>
</tr>
<tr>
<td>[icon name="btc" class="fa-2x"] Bitcoin</td>
<td>bitcoin</td>
</tr>
<tr>
<td>[icon name="codepen" class="fa-2x"] Codepen</td>
<td>codepen</td>
</tr>
<tr>
<td>[icon name="css3" class="fa-2x"] CSS3</td>
<td>css3</td>
</tr>
<tr>
<td>[icon name="delicious" class="fa-2x"] Delicious</td>
<td>delicious</td>
</tr>
<tr>
<td>[icon name="deviantart" class="fa-2x"] Deviantart</td>
<td>deviantart</td>
</tr>
<tr>
<td>[icon name="digg" class="fa-2x"] Digg</td>
<td>digg</td>
</tr>
<tr>
<td>[icon name="dribbble" class="fa-2x"] Dribbble</td>
<td>dribbble</td>
</tr>
<tr>
<td>[icon name="dropbox" class="fa-2x"] Dropbox</td>
<td>dropbox</td>
</tr>
<tr>
<td>[icon name="drupal" class="fa-2x"] Drupal</td>
<td>drupal</td>
</tr>
<tr>
<td>[icon name="empire" class="fa-2x"] Empire</td>
<td>empire</td>
</tr>
<tr>
<td>[icon name="facebook" class="fa-2x"] Facebook</td>
<td>facebook</td>
</tr>
<tr>
<td>[icon name="facebook-square" class="fa-2x"] Facebook (square icon)</td>
<td>facebook-square</td>
</tr>
<tr>
<td>[icon name="flickr" class="fa-2x"] Flickr</td>
<td>flickr</td>
</tr>
<tr>
<td>[icon name="foursquare" class="fa-2x"] FourSquare</td>
<td>foursquare</td>
</tr>
<tr>
<td>[icon name="git" class="fa-2x"] git</td>
<td>git</td>
</tr>
<tr>
<td>[icon name="github-square" class="fa-2x"] git (square icon)</td>
<td>git-square</td>
</tr>
<tr>
<td>[icon name="github" class="fa-2x"] github</td>
<td>github</td>
</tr>
<tr>
<td>[icon name="github-alt" class="fa-2x"] github alt</td>
<td>github-alt</td>
</tr>
<tr>
<td>[icon name="github-square" class="fa-2x"] github (square icon)</td>
<td>github-square</td>
</tr>
<tr>
<td>[icon name="gittip" class="fa-2x"] git tip</td>
<td>gittip</td>
</tr>
<tr>
<td>[icon name="google" class="fa-2x"] Google</td>
<td>google</td>
</tr>
<tr>
<td>[icon name="google-plus" class="fa-2x"] Google Plus</td>
<td>google-plus</td>
</tr>
<tr>
<td>[icon name="google-plus-square" class="fa-2x"]Google Plus (square icon)</td>
<td>google-plus-square</td>
</tr>
<tr>
<td>[icon name="hacker-news" class="fa-2x"] Hacker News</td>
<td>hacker-news</td>
</tr>
<tr>
<td>[icon name="html5" class="fa-2x"] HTML5</td>
<td>html5</td>
</tr>
<tr>
<td>[icon name="instagram" class="fa-2x"] Instagram</td>
<td>instagram</td>
</tr>
<tr>
<td>[icon name="joomla" class="fa-2x"] Joomla</td>
<td>joomla</td>
</tr>
<tr>
<td>[icon name="jsfiddle" class="fa-2x"] JS Fiddle</td>
<td>jsfiddle</td>
</tr>
<tr>
<td>[icon name="linkedin" class="fa-2x"] LinkedIn</td>
<td>linkedin</td>
</tr>
<tr>
<td>[icon name="linkedin-square" class="fa-2x"] LinkedIn (square icon)</td>
<td>linkedin-square</td>
</tr>
<tr>
<td>[icon name="linux" class="fa-2x"] Linux</td>
<td>linux</td>
</tr>
<tr>
<td>[icon name="maxcdn" class="fa-2x"] MaxCDN</td>
<td>maxcdn</td>
</tr>
<tr>
<td>[icon name="openid" class="fa-2x"] OpenID</td>
<td>openid</td>
</tr>
<tr>
<td>[icon name="pagelines" class="fa-2x"] Page Lines</td>
<td>pagelines</td>
</tr>
<tr>
<td>[icon name="pied-piper" class="fa-2x"] Pied Piper</td>
<td>pied-piper</td>
</tr>
<tr>
<td>[icon name="pied-piper-alt" class="fa-2x"] Pied Piper alt</td>
<td>pied-piper-alt</td>
</tr>
<tr>
<td>[icon name="pinterest" class="fa-2x"] Pinterest</td>
<td>pinterest</td>
</tr>
<tr>
<td>[icon name="pinterest-square" class="fa-2x"] Pinterest (square icon)</td>
<td>pinterest-square</td>
</tr>
<tr>
<td>[icon name="qq" class="fa-2x"] QQ</td>
<td>qq</td>
</tr>
<tr>
<td>[icon name="rebel" class="fa-2x"] Rebel</td>
<td>rebel</td>
</tr>
<tr>
<td>[icon name="reddit" class="fa-2x"] Reddit</td>
<td>reddit</td>
</tr>
<tr>
<td>[icon name="reddit-square" class="fa-2x"] Reddit (square icon)</td>
<td>reddit-square</td>
</tr>
<tr>
<td>[icon name="renren" class="fa-2x"] Ren Ren</td>
<td>renren</td>
</tr>
<tr>
<td>[icon name="share-alt" class="fa-2x"] Share alt</td>
<td>share-alt</td>
</tr>
<tr>
<td>[icon name="share-alt-square" class="fa-2x"] Share (square icon)</td>
<td>share-alt-square</td>
</tr>
<tr>
<td>[icon name="skype" class="fa-2x"] Skype</td>
<td>skype</td>
</tr>
<tr>
<td>[icon name="slack" class="fa-2x"] Slack</td>
<td>slack</td>
</tr>
<tr>
<td>[icon name="soundcloud" class="fa-2x"] Sound Cloud</td>
<td>soundcloud</td>
</tr>
<tr>
<td>[icon name="spotify" class="fa-2x"] Spotify</td>
<td>spotify</td>
</tr>
<tr>
<td>[icon name="stack-exchange" class="fa-2x"] Stack Exchange</td>
<td>stack-exchange</td>
</tr>
<tr>
<td>[icon name="stack-overflow" class="fa-2x"] Stack Overflow</td>
<td>stack-overflow</td>
</tr>
<tr>
<td>[icon name="steam" class="fa-2x"] Steam</td>
<td>steam</td>
</tr>
<tr>
<td>[icon name="steam-square" class="fa-2x"] Steam (square icon)</td>
<td>steam-square</td>
</tr>
<tr>
<td>[icon name="stumbleupon" class="fa-2x"] Stumble Upon</td>
<td>stumbleupon</td>
</tr>
<tr>
<td>[icon name="stumbleupon-circle" class="fa-2x"] Stumble Upon (circle icon)</td>
<td>stumbleupon-circle</td>
</tr>
<tr>
<td>[icon name="tencent-weibo" class="fa-2x"] Tencent Weibo</td>
<td>tencent-weibo</td>
</tr>
<tr>
<td>[icon name="trello" class="fa-2x"] Trello</td>
<td>trello</td>
</tr>
<tr>
<td>[icon name="tumblr" class="fa-2x"] Tumblr</td>
<td>tumblr</td>
</tr>
<tr>
<td>[icon name="tumblr-square" class="fa-2x"] Tumblr (square icon)</td>
<td>tumblr-square</td>
</tr>
<tr>
<td>[icon name="twitter" class="fa-2x"] Twitter</td>
<td>twitter</td>
</tr>
<tr>
<td>[icon name="twitter-square" class="fa-2x"] Twitter (square icon)</td>
<td>twitter-square</td>
</tr>
<tr>
<td>[icon name="vimeo-square" class="fa-2x"] Vimeo (square icon)</td>
<td>vimeo-square</td>
</tr>
<tr>
<td>[icon name="vine" class="fa-2x"] Vine</td>
<td>vine</td>
</tr>
<tr>
<td>[icon name="vk" class="fa-2x"] VK</td>
<td>vk</td>
</tr>
<tr>
<td>[icon name="weibo" class="fa-2x"] Weibo</td>
<td>weibo</td>
</tr>
<tr>
<td>[icon name="weixin" class="fa-2x"] Weixin</td>
<td>weixin</td>
</tr>
<tr>
<td>[icon name="windows" class="fa-2x"] Windows</td>
<td>windows</td>
</tr>
<tr>
<td>[icon name="wordpress" class="fa-2x"] WordPress</td>
<td>wordpress</td>
</tr>
<tr>
<td>[icon name="xing" class="fa-2x"] Xing</td>
<td>xing</td>
</tr>
<tr>
<td>[icon name="xing-square" class="fa-2x"] Xing (square icon)</td>
<td>xing-square</td>
</tr>
<tr>
<td>[icon name="yahoo" class="fa-2x"] Yahoo</td>
<td>yahoo</td>
</tr>
<tr>
<td>[icon name="yelp" class="fa-2x"] Yelp</td>
<td>yelp</td>
</tr>
<tr>
<td>[icon name="youtube" class="fa-2x"] YouTube</td>
<td>youtube</td>
</tr>
<tr>
<td>[icon name="youtube-play" class="fa-2x"] YouTube (play icon)</td>
<td>youtube-play</td>
</tr>
<tr>
<td>[icon name="youtube-square" class="fa-2x"] YouTube (square icon)</td>
<td>youtube-square</td></tr></tbody></table>
By default, the extension offers all 82 to the user.  This doesn't mean you must offer each and every one.  Using the `include` argument, you may specify which profile icons you'd prefer to offer by assigning an array of existing icons IDs.  For example, let's say you'd like to offer only Facebook, Twitter, LinkedIn, and Google Plus.  The `include` argument would look as follows:

```php
include = array('facebook', 'twitter', 'linkedin', 'google-plus')
```

## Adding/Editing Additional IconsIt's easy to add additional (or edit existing) social profile icons.  Each profile contains the following arguments:

<table border="0">
<tbody>
<tr>
<td style="text-align: center;"><strong>Name</strong></td>
<td style="text-align: center;"><strong>Type</strong></td>
<td style="text-align: center;"><strong>Default</strong></td>
<td style="text-align: center;"><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>string</td>
<td></td>
<td>Unique id of the profile.</td>
</tr>
<tr>
<td>icon</td>
<td>string</td>
<td></td>
<td>Font Awesome icon class (<a target="_blank" href="http://fortawesome.github.io/Font-Awesome/cheatsheet/">cheatsheet</a>) of the icon to display.  Icon classes from other sets may be used, provided the icon set is properly installed and enqueued.</td>
</tr>
<tr>
<td>enabled</td>
<td>bool</td>
<td>false</td>
<td>Flag to set the default state of the social profile.</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td></td>
<td>Display name of the social profile</td>
</tr>

<tr>
<td>color</td>
<td>string</td>
<td></td>
<td>Hex or RGBA string of the icons color.</td>
</tr>
<tr>
<td>background</td>
<td>string</td>
<td></td>
<td>Hex or RGBA string of the icons backcolor.</td>
</tr>
<tr>
<td>label</td>
<td>string</td>
<td>Link URL</td>
<td>Optional.  Text to appear over the URL input box.  This is useful should you want to specify a user name instead of a full URL.</td>
</tr>
<tr>
<td>url</td>
<td>string</td>
<td></td>
<td>Optional. URL of the social profile.</td>
</tr>

</tbody>
</table>

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
        'name'    => __ ( 'CrApple', 'redux-framework-demo' ),
        'label'   => 'Enter username:',
    )
)
```

## Example Declaration

The following sets up the basic social profile field without the additions or alterations specified above.

```php
array(
    'id'        => 'opt-social-profiles',
    'type'      => 'social_profiles',
    'title'     => 'Social Profiles',
    'subtitle'  => 'Click an icon to activate it, drag and drop to change the icon order.',
),
```

## Example Usage
### 
The WidgetUsing the social profiles widget redefines easy.  In the widget area of WordPress, add the Redux Social Profiles widget to the sidebar of your choice, and set the desired title.  The only icons that will appear in the widget's frontend will be the enabled social profiles.

### CodeThe extension's return value is an array of key/pair values. The key contains the profile's index key, while the value contains the array of the profiles arguments. It will be necessary to use a for/each loop to extract the values (Please remember to replace `redux_demo` with your own `<a href="/redux-framework/arguments/opt_name" title="opt_name">opt_name</a>` argument).  The following code returns only the saved values.  For this example to have any real value, you'll need to write the appropriate HTML, or use one of the helper functions below.

```php
global $redux_demo;

foreach ($redux_demo['opt-social-profiles'] as $idx => &amp;arr) {
    echo 'Profile ID: ' . $arr['id'];
    echo 'Enabled: '    . $arr['enabled'];
    echo 'Icon: '       . $arr['icon'];
    echo 'Name: '       . $arr['name'];
    echo 'URL: '        . $arr['url'];
    echo 'Color: '      . $arr['color'];
    echo 'Background: ' . $arr['background'];
}

// Or do the following for full icon rendering
foreach ($redux_demo['opt-social-profiles'] as $idx => &amp;arr) {
    if ($arr['enabled']) {
        $id     = $arr['id'];
        $url    = $arr['url'];

        $icons .= '';
        $icons .= '</pre><ul><li class="' . $id . '"><a href="' . $url . '" target="_blank"><i class="' . $arr['icon'] . '"></i></a></li></ul><pre>';
    }

    $output = '</pre><ul class="icons">';
    $output .= $icons;
    $output .= '</ul><pre>';
}
```

## Helper FunctionsThe Social Profiles extension includes two helper functions.

### redux_render_icon_from_id ($opt_name, $id, $echo, $a_class)This function, based on the echo parameter will either echo a fully rendered icon, or return the HTML for use with your own rendering purposes.

The first parameter, `$opt_name` is required and needs to be the opt_name specified in your Redux Framework arguments.

The second parameter, `$id` is also required, and is the ID of the social profile whose information is to be rendered. This is best used in conjunction for a for/each loop, as shown above.

The third parameter, `$echo` is optional and defaults to true. When set to true, the function automatically echos the rendered HTML. When set to false, the HTML is returned.

The forth parameter, `$a_class` is optional. it will add the passed class name to the a tag of the rendered icon HTML.

<strong>NOTE:</strong> The rendered icon will be it's normal small size.  It's up to you, the developer, to style the icon via CSS as desired.

#### Usage

```php

// Please remember to replace 'redux_demo' with your project's unique opt_name.
// Example assumes Facebook social profile is enabled and URL properly filled out.
$html = redux_render_icon_from_id('redux_demo', 'facebook', false);

echo $html;

// Result:
// <a class="" href="http://www.facebook.com/my_facebook_name">
//     <i class="fa fa-facebook" style="color: #3b5998; background-color: transparent;" title=""></i>
// </a>
```

### redux_social_profile_value_from_id ($opt_name, $id, $value)This function returns the specified value data of the specified social profile ID.

The first parameter, `$opt_name` is required and needs to be the opt_name specified in your Redux Framework arguments.

The second parameter, `$id` is also required, and is the ID of the social profile whose information is to be rendered. This is best used in conjunction for a for/each loop, as shown above.

The third parameter, `$value` is required, and is the value of the social profile for which whose data you would like returned.  Value options include `id`, `icon`, `enabled`, `name`, `color`, `background`, `label`, or `url`.

#### Usage

```php

// Please remember to replace 'redux_demo' with your project's unique opt_name.
// Example assumes Facebook social profile is enabled and URL properly filled out.
$url = redux_social_profile_value_from_id('redux_demo', 'facebook', 'url');

echo 'Facebook URL: ' $url;

// Result:  
// Facebook URL: http://www.facebook.com/my_facebook_name
```

