# Don&#39;t allow debug to be enabled (no-debug-enabled)

Please describe the origin of the rule here.


## Rule Details

This rule aims to stop you accidentally leaving debug statements enabled in production code.

Examples of **incorrect** code for this rule:

```js

debug.enable('Component');

```

Examples of **correct** code for this rule:

```js

// debug.enable('Component');

```

### Options

Define an array of function names to disallow.

`["debug", "debugpkg", "customName"]`

## When Not To Use It

If you're in a development environment, this may be unnecessary.