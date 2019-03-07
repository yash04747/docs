---
title: "Basics: Removing Dev Mode"
---

# Removing the Demo Mode Notice

Redux Framework, when run as a plugin ships with a sample config in order to permit people to try Redux out without effort. 
However, if you intend to ship Redux with a premium theme or product, this is less than desirable. You can 
easily disable these demo items with the code block below.

```php
Redux::disable_demo();
```

Place that anywhere in your theme or plugin and all demo mode references will be hidden.