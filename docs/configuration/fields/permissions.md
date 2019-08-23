---

title: "Permissions" 

---

# Using the `permissions` Argument

The `permissions` argument is useful for restricting access to certain [fields](../objects/field.md) or [sections](../objects/section.md)
that require a specified user role.  For example, if the options panel is set via [page_permissions](../global_arguments.md#page-permissions)
to allow users with an editor role or higher to view and set options, but you'd prefer some options or sections be 
available only to administrators, the permissions argument makes this possible.

In the above scenario, the line `'permissions' => 'manage_options'` would be added to either the [sections array](../objects/section.md) 
to control an entire section, or the [fields array](../objects/field.md) to control a specific field.  The permissions 
argument accepts any [capability name](https://wordpress.org/support/article/roles-and-capabilities/).

::: warning
The [WordPress documentation](https://core.trac.wordpress.org/ticket/22624) strongly recommends **not** using role names (administrator, editor, etc.) in place of capability names as 
they are not guaranteed to work correctly
:::

::: danger
The `permissions` argument cannot be used with the following core fields, as they do not accept or save data: 
[section](../../core-fields/section.md), [info](../../core-fields/info.md), [divide](../../core-fields/divide.md), and 
[raw](../../core-fields/raw.md).
:::
