---
title: "Advanced: Redux WP_Filesystem Proxy"
---

# Using the Redux WP_Filesystem Proxy

Redux has a WordPress filesystem proxy built in to help you read and write files that will pass Theme-Check. You can use 
these calls the moment a Redux object has been loaded (your Redux config has been run).

::: warning Table of Contents
[[toc]]
:::

## Getting Started
First, you must get the Redux object. The easiest method is as follows:

```php
$redux = Redux::get_instance('OPT_NAME'); // TODO - Use your opt_name
```

Now that you have the object, you can begin using the filesystem. It's pretty easy to do, you run the following call:

```php
$redux->filesystem->execute( 'action', PATH, $args );
```

Below you will find a list of all possible calls, and the arguments associated with each.

## Chmod / File Permissions
By default the WP_FileSystem API uses default values for chmod (read/write permissions). These are in the form of the 
declared FS_CHMOD_DIR for directories or FS_CHMOD_FILE for files. Do not worry about setting these values yourself.

::: tip
If you **must** override the default chmod settings, you may pass in a chmod argument for all actions except 
object and unzip. To do so, pass a string or int: `0644` as this argument value.
:::

## Possible Calls & Arguments.

### `mkdir`
This action allows you to generate a directory of any kind. It will even make multiple children directories even it if 
doesn't exist.

```php
$redux = Redux::get_instance('OPT_NAME'); // TODO - Use your opt_name
$path = "THE_PATH"; // TODO - Replace with path
if ( ! is_dir( $path ) ) {
  $redux->filesystem->execute( "mkdir", $path );
}
```

### `copy`
This allows you to copy files from one location to another.

|name|type|required|description|
|--- |--- |--- |--- |
|destination|string|required|The destination file path.|
|overwrite|boolean|optional|Overwrite the files if exist, or by default the WP_FileSystem will skip existing if the file exists.|

```php
$redux = Redux::get_instance('OPT_NAME'); // TODO - Use your opt_name
$path = "THE_PATH"; // TODO - Replace with path
$destination = "DESTINATION_PATH"; // TODO - Replace with target/destination path

$redux->filesystem->execute( 
	'copy', 
	$path,
	array( 
		'destination' => $destination // TODO - Replace with target/destination path
	) 
);
```

### `put_contents`
The same as `file_put_contents` in PHP, but using the WordPress filesystem API. This will write the contents of a variable 
to file. This will override any file if it already exists, just like `file_put_contents`.

|name|type|required|description|
|--- |--- |--- |--- |
|content|string|required|The content of the file.|

```php
$redux = Redux::get_instance('OPT_NAME'); // TODO - Use your opt_name
$path = "THE_PATH"; // TODO - Replace with path
$contents = "This is the content of the file." # TODO - Replace with contents

$redux->filesystem->execute( 
	'put_contents', 
	$path,
	array( 
		'content' => $contents
	) 
);
```

### `get_contents`
This will get the contents of a filesystem in any way it can. This will attempt to use the WordPress filesystem first. 
However, if the file does not have the standard WordPress read permissions, it will fallback to `file_get_contents`.

```php
$redux = Redux::get_instance('OPT_NAME'); // TODO - Use your opt_name
$path = "THE_PATH"; // TODO - Replace with path

$file_contents = $redux->filesystem->execute( 
	'get_contents', 
	$path
);
```

### `object`
This will simply return a valid WordPress FileSystem API object.

```php
$redux = Redux::get_instance('OPT_NAME'); // TODO - Use your opt_name
$object = $redux->filesystem->execute( 'object' );
```

### `unzip`
This allows you to unzip an existing zip file to a new location.

##### Arguments
|name|type|required|description|
|--- |--- |--- |--- |
|destination|string|required|The destination to unzip the zip file contents.|

```php
$redux = Redux::get_instance('OPT_NAME'); // TODO - Use your opt_name
$path = "THE_PATH"; // TODO - Replace with path
$destination = "DESTINATION_PATH"; // TODO - Replace with target/destination path

$redux->filesystem->execute( 
	'unzip', 
	$path, 
	array( 
		'destination' => $destination 
	) 
);
```