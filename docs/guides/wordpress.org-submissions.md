# WordPress.org Submissions

As of December 2014, the WordPress.org theme submission guidelines require Redux be embedded, not installed as a plugin. 
They also require that all aspects of tracking be removed from themes, even opt-in. Redux has an opt-in tracking 
platform built in to help us gather statistics about users who use Redux. We use this to debug our code and learn of 
plugin conflict impact. To fully comply with the requirements, this article is being published.

There is a new argument called `disable_tracking` which has been added to Redux. When a theme embeds Redux, and sets 
this argument to true, the ReduxTracking class is not called. A dev can then delete the tracking class and be fully 
compliant with WordPress.org requirements. That class is located in: `~/ReduxCore/inc/tracking.php`.