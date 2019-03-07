# Date-Time Picker

The Redux Date-Time Picker (DTP) extension is a new way to select dates and times for use in text fields.  The DTP contains several modes based no how you would like to display time and date data.   Include all date-time info in one text box?  No problem!  Split the time into its own text box?  No problem!  Have need to set ranges for dates or times?  We've got you covered there too!

## Getting Started
To understand how to use extensions, you should read this article on <a href="/redux-framework/advanced/loading-extensions/">Loading Extensions</a>.  To shortcut the process, you should use the <a href="http://generate.reduxframework.com/" target="_blank">Redux Generator</a>.  Please be aware that a working knowledge of PHP and CSS is required to properly use this field. Should you not be familiar with one or the other (or both), please refer to the basic guides to get you started: <a href="http://www.php.net/manual/en/tutorial.php">Getting Started with PHP</a>, <a href="http://www.w3schools.com/css/css_intro.asp">CSS Introduction</a>.

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
<td>'datetime'</td>
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
<td>Flag to run the compiler hook. <a title="Integrating a Compiler" href="/redux-framework/advanced/integrating-a-compiler/"> More info</a></td>
</tr>
<tr>
<td>date-format</td><td>str</td><td>'mm-dd-yy'</td><td>String to assign the format of the date output.  For more info, please see 'Date Formatting' below.</td>
</tr><tr><td>time-format</td><td>str</td><td>h:mm TT z'</td><td>String to assign the format of the time output.  For more info, please see 'Time Formatting' below.</td></tr>
<tr>
<td>required</td>
<td>array</td>
<td></td>
<td>Provide the parent, comparison operator, and value which affects the field's visibility. <a class="more_info" href="/redux-framework/the-basics/the-required-argument/"><i class="el-icon-circle-arrow-right"></i> More info</a></td>
</tr>
<tr>
<td>date-picker</td>
<td>string</td>
<td>true</td>
<td>Flag that sets the display or hiding of the date picker portion of the picker window.</td>
</tr>
<tr>
<td>time-picker</td>
<td>bool</td>
<td>true</td>
<td>Flag that sets the display or hiding of the time picker portion of the picker window.</td>
</tr>
<tr>
<td>split</td>
<td>bool</td>
<td>false</td>
<td>Flag to set whether the date and time will be separated into their own fields.  See 'Split Mode' below.</td>
</tr>
<tr><td>separator</td><td>string</td><td>'  ' (two spaces)</td><td>String that appears between the date and time when split more is false.  Blanks or characters may be used.</td></tr>
<tr>
<td>control-type</td>
<td>string</td>
<td>'slider'</td>
<td>string command determining the interface of the time picker.  Choose between select slider.</td>
</tr>
<tr>
<td>placeholder</td>
<td>string/array</td>
<td></td>
<td>Text to display in the input when no value is present.  See 'Placeholder Options' below.</td>
</tr>
<tr>
<td>num-of-months</td>
<td>int</td>
<td></td>
<td>The number of calendar months to display in the datepicker.</td>
</tr>
<tr>
<td>timezone-list</td>
<td>array</td>
<td></td>
<td>An array of timezones values used to populate the timezone select: `array('value' => 'EST', 'label' => 'Eastern')`. The value should be the offset number in minutes. So "-0400" which is the format "-hhmm", would equate to -240 minutes.</td>
</tr>
<tr>
<td>timezone</td>
<td>int/string</td>
<td></td>
<td>Default timezone to display in the timezone list.  This is the offset in minutes. If null the browser's local timezone will be used. If your timezone is "-0400" you would use -240. For backwards compatibility you may pass "-0400", however the timezone is stored in minutes and more reliable.</td>
</tr>
<tr>
<td>hour-min</td>
<td>int</td>
<td></td>
<td>The minimum hour allowed for all dates.</td>
</tr>
<tr>
<td>hour-max</td>
<td>int</td>
<td></td>
<td>The maximum hour allowed for all dates.</td>
</tr>
<tr>
<td>minute-min</td>
<td>int</td>
<td></td>
<td>The minimum minute allowed for all dates.</td>
</tr>
<tr>
<td>minute-max</td>
<td>int</td>
<td></td>
<td>The maximum minute allowed for all dates.</td>
</tr>
<tr>
<td>date-min</td>
<td>int/array</td>
<td></td>
<td>Array of minimum month, day, year values.  See 'Min/Max Date Options' below.</td>
</tr>
<tr>
<td>date-max</td>
<td>int/array</td>
<td></td>
<td>Array of maximum month, day, year values.  See 'Min/Max Date Options' below.</td>
</tr>
<tr>
<td>hint</td>
<td>array</td>
<td></td>
<td>Array containing the `content` and optional `title` arguments for the hint tooltip. <a class="more_info" title="Using Hints in Fields" href="/redux-framework/the-basics/using-hints-in-fields/"><i class="el-icon-circle-arrow-right"></i>More info</a></td>
</tr>
</tbody>
</table>

## Placeholder OptionsThe placeholder argument, if used, must be set in accordance with the split argument.  Consider the following field arguments.

### When `split` is set to `true`
```php
'placeholder' => Array (
    'date' => 'Date',
    'time' => 'Time'
)
```

### When `split` is set to `false`
```php
'placeholder' => 'Datetime'
```
## Min/Max Date Options
The `date-min` and `date-max` arguments accept either an integer value or the array value shown in the table below.  When setting the `date-min` and `date-max` arguments as integers, the `date-min` argument begins the selectable range with the number of days beginning at the current date.  Setting it to `0` begins the selectable range at today's date, setting it to `1` begins on the day after the current date, and so on.  The `date-max` argument as an integer sets the number of days in the actual range.  Setting it to `30` would create a 30 day range.

Alternatively, setting the `date-min` and `date-max` ranges as an array of month, day, and year values allows you to select a date specific range at any point in the calender.

<table border="0">
<tbody>
<tr>
<td style="text-align: center;"><strong>Name</strong></td>
<td style="text-align: center;"><strong>Type</strong></td>
<td style="text-align: center;"><strong>Default</strong></td>
<td style="text-align: center;"><strong>Description</strong></td>
</tr>
<tr>
<td>month</td>
<td>int</td>
<td></td>
<td>The one or two digit integer expressing the month.</td>
</tr>
<tr>
<td>day</td>
<td>int</td>
<td></td>
<td>The one or two digit integer expressing the day.</td>
</tr>
<tr>
<td>year</td>
<td>int</td>
<td></td>
<td>The four digit integer expressing the year.</td>
</tr>
</tbody>
</table>

## Split Mode#### When `split` mode is set to `true`:<a href="http://docs.reduxframework.com/wp-content/uploads/sites/4/2014/08/dtp_split.png"><img src="http://docs.reduxframework.com/wp-content/uploads/sites/4/2014/08/dtp_split.png" alt="dtp_split" class="alignnone size-full wp-image-578" height="73" width="607" /></a>

When `split` mode is set to `false`:
<a href="http://docs.reduxframework.com/wp-content/uploads/sites/4/2014/08/dtp_nosplit.png"><img src="http://docs.reduxframework.com/wp-content/uploads/sites/4/2014/08/dtp_nosplit.png" alt="dtp_nosplit" class="alignnone size-full wp-image-577" height="76" width="605" /></a>

## Example Declaration
```php
array (
    'id'            => 'opt-date-time',
    'type'          => 'datetime',
    'title'         => 'Date/Time Picker',
    'subtitle'      => 'Date/Time Picker extension',
    'split'         => false,
    'separator'     => ' @ ',

    // Optional timezone list
    'timezone-list' => array(
        array('value' => -300, 'label' => 'Eastern'),
        array('value' => -360, 'label' => 'Central'),
        array('value' => -420, 'label' => 'Moutain'),
        array('value' => -480, 'label' => 'Pacific')
    ),

    // Alternative method to display time zone data
    // 'timezone-list' => array(
    //     array('value' => 'EST', 'label' => 'Eastern'),
    //     array('value' => 'CST', 'label' => 'Central'),
    //     array('value' => 'GMT', 'label' => 'Moutain'),
    //     array('value' => 'PST', 'label' => 'Pacific')
    // ),

    'timezone'      => '-300'

    // Optional Min/Max hour values
    'hour-min'      => 8,
    'hour-max'      => 16,

    // Optional Min/Max minute values
    'minute-min'    => 20,
    'minute-max'    => 40,

    // Optional Min/Max date values.
    // Creates a selectable date range between the current date 
    // and 30 days from the current date.
    'date-min'      => 0,
    'date-max'      => 30,

    // Alternative Min/Max date values.
    // Selects a selectable date range between 10/5/2014 to 11/15/2014
    // 'date-min'      => array(
    //     'month' => 10,
    //     'day'   => 5,
    //     'year'  => 2014
    // ),
    // 'date-max'      =>  array(
    //     'month' => 11,
    //     'day'   => 15,
    //     'year'  => 2014
    // )
),
```

### Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your `<a href="/redux-framework/arguments/opt_name/" title="opt_name">opt_name</a>` argument.

```php
global $redux_demo;

// When split mode is set to false.
echo 'Datetime output: ' . $redux_demo['opt_date-time'];

// When split mode is set to true.
echo 'Date output: ' . $redux_demo['opt-date-time']['date'];
echo 'Time output: ' . $redux_demo['opt-date-time']['time'];
```

### Date Formatting
Format a date into a string value with a specified format. The format can be combinations of the following:

        <ul><li><strong>d</strong> - day of month (no leading zero)</li><li><strong>dd</strong> - day of month (two digit)</li><li><strong>o</strong> - day of the year (no leading zeros)</li><li><strong>oo</strong> - day of the year (three digit)</li><li><strong>D</strong> - day name short</li><li><strong>DD</strong> - day name long</li><li><strong>m</strong> - month of year (no leading zero)</li><li><strong>mm</strong> - month of year (two digit)</li><li><strong>M</strong> - month name short</li><li><strong>MM</strong> - month name longy - year (two digit)</li><li><strong>y</strong> - year (two digit)</li><li><strong>yy</strong> - year (four digit)</li><li><strong>@</strong> - Unix timestamp (ms since 01/01/1970)</li><li><strong>!</strong> - Windows ticks (100ns since 01/01/0001)</li><li><strong>'...'</strong> - literal text'' - single quoteanything else - literal text</li></ul>

### Time Formatting
Format a time into a string value with a specified format.  The format can be combinations of the following:
<ul><li><strong>H</strong> - Hour with no leading 0 (24 hour)</li><li><strong>HH</strong> - Hour with leading 0 (24 hour)</li><li><strong>h</strong> - Hour with no leading 0 (12 hour)</li><li><strong>hh</strong> - Hour with leading 0 (12 hour)</li><li><strong>m</strong> - Minute with no leading 0</li><li><strong>mm</strong> - Minute with leading 0</li><li><strong>s</strong> - Second with no leading 0</li><li><strong>ss</strong> - Second with leading 0</li><li><strong>l</strong> - Milliseconds always with leading 0</li><li><strong>c</strong> - Microseconds always with leading 0</li><li><strong>t</strong> - a or p for AM/PMTA or P for AM/PM</li><li><strong>tt</strong> - am or pm for AM/PMTTAM or PM for AM/PM</li><li><strong>z</strong> - Timezone as defined by timezoneListZTimezone in Iso 8601 format (+04:45)</li><li><strong>'...' </strong>- Literal text (Uses single quotes)</li></ul>