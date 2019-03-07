# Metaboxes

If you are used the ReduxFramework declaration arrays, you know Redux Metaboxes. They're one and the same! The only difference is a parent array. We'll go through a few examples to get you up and running. Please know, you MUST have an options page for metaboxes to work. They're inter-connected. You can, however, make a fake options panel, and hide it from the admin menu. But the metaboxes extensions works best when united with a panel.

## Getting Started
To understand how to use extensions, you should read this article on <a href="/redux-framework/advanced/loading-extensions/">Loading Extensions</a>. To shortcut the process, you should use the <a href="http://generate.reduxframework.com/" target="_blank">Redux Generator</a>. 

## Arguments
<table border="0"><tbody><tr><td>Name</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>string</td><td>You must provide an ID of some kind. This can be shared with your keys from your panel, and if so the values will be overridden for that given page in your global variable.</td></tr><tr><td>title</td><td>string</td><td>This is the title that appears on the box</td></tr><tr><td>post_types</td><td>array</td><td>Provide any number of post_types for a given metabox to appear.</td></tr><tr><td>page_template</td><td>array</td><td>Bind visibility of a metabox to any number of page templates. The value will be equal to the filename of the custom page template.</td></tr><tr><td>post_format</td><td>array</td><td>Bind the visibility of a metabox to a given post format. <a href="http://codex.wordpress.org/Post_Formats" target="_blank">List of post formats</a>.</td></tr><tr><td>position</td><td>normal / advanced / side</td><td>Where you want to place your metabox. Normal and advanced are the to left and side is, well, to the side.</td></tr><tr><td>priority</td><td>high / core / default / low</td><td>Where you want to place your metabox. Normal and advanced are the to left and side is, well, to the side.</td></tr><tr><td>sections</td><td>array</td><td>Your sections array, the same style as ReduxFramework.</td></tr></tbody></table>

## Example Declaration
Since we've kept the structure exactly the same, start by constructing a section array like you normally would. In the included config file for metaboxes, we save these to an array. We've named that array $boxSections for the below examples.

Now once we have that array, we need only add it to a parent array, named below as $metaboxes. Here's an example of how we would add a sidebar metabox to a page.

```php
// BE SURE TO RENAME THE FUNCTION NAMES TO YOUR OWN NAME OR PREFIX
if ( !function_exists( "redux_add_metaboxes" ) ):
    function redux_add_metaboxes($metaboxes) {
        // Declare your sections
        $boxSections = array();
        $boxSections[] = array(
            //'title'         => __('General Settings', 'redux-framework-demo'),
            //'icon'          => 'el-icon-home', // Only used with metabox position normal or advanced
            'fields'        => array(
                array(
                    'id' => 'sidebar',
                    //'title' => __( 'Sidebar', 'redux-framework-demo' ),
                    'desc' => 'Please select the sidebar you would like to display on this page. Note: You must first create the sidebar under Appearance > Widgets.',
                    'type' => 'select',
                    'data' => 'sidebars',
                ),
            ),
        );

        // Declare your metaboxes
        $metaboxes = array();
        $metaboxes[] = array(
            'id'            => 'sidebar',
            'title'         => __( 'Sidebar', 'fusion-framework' ),
            'post_types'    => array( 'page', 'post', 'acme_product' ),
            //'page_template' => array('page-test.php'), // Visibility of box based on page template selector
            //'post_format' => array('image'), // Visibility of box based on post format
            'position'      => 'side', // normal, advanced, side
            'priority'      => 'high', // high, core, default, low - Priorities of placement
            'sections'      => $boxSections,
        );

        return $metaboxes;
    }
    // Change {$redux_opt_name} to your opt_name
    add_action("redux/metaboxes/{$redux_opt_name}/boxes", "redux_add_metaboxes");
endif;
```

## Example Usage
This is one of the things that makes the metaboxes ultra slick. ReduxFramework creates a global variable for you to access all your panel options with. Say your opt_name is `redux_demo`, then you can use the global variable `$redux_demo` to access your values. Now what's cool is the metaboxes code overrides those values! That means you only have to code your functions ONCE. So say you have a layout field in your panel and on your pages. If you change a single post, and have the layout be say 3, while the panel says 2, the code exposed to your data will be 3. Redux metaboxes does it all for you.

### Accessing Data Within Loops
Within loops, Redux will automatically update your Redux global variable with the appropriate values. If you're trying to do it another way, you will need to use the following function:

```php<br />$value = redux_post_meta( "OPT_NAME", "THE_POST", "META_KEY" )<br />```

You can use this anywhere to grab a specific value or all values. The `OPT_NAME` and `THE_POST` are the required attributes. `OPT_NAME` is your Redux opt_name. `THE_POST` can be a post object or just a post ID. If no `META_KEY` is specified, an array of all meta will be returned. If you specify the `META_KEY` only that value will be returned to you.

#### Help! The defaults are not in the array!
<span style="text-decoration: line-through;">You are correct. Redux Metaboxes will not ever store a "default" value. Know that when you query for values</span>. As of Metaboxes 1.4.4 you can set the global argument of `metaboxes_save_defaults` to enable default values being saved to the database.

### Missing Sidebar?!
For boxes in the `standard` position and with only one section, the sidebar is omitted when the HTML is output. If you want a side bar, use at least two sections within any given standard position metabox.

### Binding Metabox Visibility to Page Template &amp; Post Formats
Yes, metaboxes does that for you too. As denoted above, you need only declare `page_template` or `post_format` on the box array for a given metabox. The visibility will be affected accordingly. You can provide an array for each. Obviously, page_templates won't affect a box that only appears on the post type. ;)

For a full list of post formats see <a target="_blank">http://codex.wordpress.org/Post_Formats</a>.

The value of your page_template will be the actual filename of your given template.

### How are the Redux Metabox Values Stored?
Redux Metaboxes (as of <em>1.2.3</em>) stores each value as it's own key in the meta. In this way, you can query against specific meta values. If a value is default, it deletes that value to free up the database.

##### Wait, wasn't the meta all stored in one key value?
Yes, until recently. Don't worry, if such a key still exists your data will be automatically migrated the moment that post's meta is accessed.