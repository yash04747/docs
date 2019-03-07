---

title: "Argument: Permissions" 

---

# Using Permissions

The `permissions` argument is useful for restricting access to certain <a title="Getting started with Fields" href="/redux-framework/fields/getting-started-with-fields/">fields</a> or <a title="Getting Started with Sections" href="/redux-framework/sections/getting-started-with-sections/">sections</a> that require a specified user role.  For example, if the options panel is set via `<a href="/redux-framework/arguments/page_permissions/" title="page_permissions">page_permissions</a>` to allow users with an editor role or higher to view and set options, but you'd prefer some options or sections be available only to administrators, the permissions argument makes this possible.

In the above scenario, the line `'permissions' => 'manage_options'` would be added to either the <a title="Getting Started with Sections" href="/redux-framework/sections/getting-started-with-sections/">sections array</a> to control an entire section, or the <a title="Getting started with Fields" href="/redux-framework/fields/getting-started-with-fields/">field array</a> to control a specific field.  The permissions argument accepts any <a href="http://codex.wordpress.org/Roles_and_Capabilities">capability name</a>.

<strong>NOTES</strong>:  
<ul><li>The <a href="https://core.trac.wordpress.org/ticket/22624">WordPress documentation</a> strongly recommends NOT using role names (administrator, editor, etc.) in place of capability names as they are not guaranteed to work correctly.</li><li>The `permissions` argument cannot be used with the following fields, as they do not accept or save data: `sections`, `info`, `divide`, and `raw`.</li></ul>