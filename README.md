# eslint-plugin-eslint-no-debug-enabled

Ensure you don't have debug enabled!

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-eslint-no-debug-enabled`:

```
$ npm install eslint-plugin-eslint-no-debug-enabled --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-eslint-no-debug-enabled` globally.

## Usage

Add `eslint-no-debug-enabled` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "eslint-no-debug-enabled"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "eslint-no-debug-enabled": [["debugpkg", "otherdebug"]]
    }
}
```

