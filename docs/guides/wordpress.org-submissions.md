# WordPress.org Submissions

As of December 2014, the WordPress.org theme submission guidelines require Redux be embedded and not installed as a plugin. 
They also require that all aspects of tracking be removed from themes, even opt-in. Redux has an opt-in tracking 
platform built in to help us gather statistics about users who use Redux. We use this to debug our code and learn of 
plugin conflict impact.

There is a new argument titled `disable_tracking`. When a theme embeds Redux, and sets this argument to true, 
the ReduxTracking class is not called. A developer can then delete the tracking class and be fully compliant with 
WordPress.org requirements. That class is located in: `~/ReduxCore/inc/classes/tracking.php`.