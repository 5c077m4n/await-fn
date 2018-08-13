Await Function
======

A tiny helper to make it easy to await a normal function.

Type into the terminal

```zsh
npm install --save await-fn
```

```javascript
const to = require('await-fn');
```

**and you are good to go!**

For example:
```javascript
/** code code code */
await to(console.log, { params: ['It\'s alive!'] });
/** code code code */
```

To use this function: `to(fn [, options]);`

1. `fn: Function` the function you want to wait to.

2. `options: {}` the options object may be a nodejs error, or include:

	1. `params: any[]` an array of the input parameters for your function.

	2. `web: boolean` true if you would like to have the returned error in a [HTTP Responder](https://www.npmjs.com/package/http-responder).

	3. `throw: boolean` if you wish the error can be thrown instead of returned.
