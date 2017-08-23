# webpack-format-messages

> Beautiful formatting for Webpack messages; ported from [Create React App](https://github.com/facebookincubator/create-react-app)!

The console output from CRA is very well-done! Unfortunately, the only way to use it is to install _all_ of `react-dev-utils`, which is quite a module-rich tree. While there is **nothing** wrong with this, many times I'd prefer a quick install for my custom Webpack configs (which aren't always React-related).

If you are already using `react-dev-utils`, you do not need this module and should do this instead:

```js
const formatMessages = require('react-dev-utils/formatWebpackMessages');
```

#### Differences

The source code of this module is (nearly) a direct copy-paste of the original file. Only two modifications have been made:

1. The code has been tailored to run in a Node-specific environment --- the original can also be run in the browser.
2. The module input expects a Webpack `stats` object --- the original required a `toJson()` transformation


## Install

```
$ npm install webpack-format-messages --save-dev
```


## Usage

```js
const webpack = require('webpack');
const formatMessages = require('webpack-format-messages');

const compiler = webpack(/* config */);

compiler.plugin('invalid', () => console.log('Compiling...'));

compiler.plugin('done', stats => {
  const messages = formatMessages(stats);

  if (!messages.errors.length && !messages.warnings.length) {
    console.log('Compiled successfully!');
  }

  if (messages.errors.length) {
    console.log('Failed to compile.');
    messages.errors.forEach(e => console.log(e));
    return;
  }

  if (messages.warnings.length) {
    console.log('Compiled with warnings.');
    messages.warnings.forEach(w => console.log(w));
  }
});
```


## API

### formatMessages(input)

Extracts & prettifies warning and error messages from Webpack.

#### input

Type: `Object`

A Webpack [`stats`](https://github.com/webpack/docs/wiki/node.js-api#stats) object.


## Related

* [`webpack-messages`](https://github.com/lukeed/webpack-messages) -- Wraps this module as a Webpack plugin, with lifecycle hooks


## Credits

This module is pulled directly from [`react-dev-utils`](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-dev-utils), provided by Facebook Incubator.

This package exists solely as a standalone install~!
