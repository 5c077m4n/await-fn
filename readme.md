Await Function
======

[![Greenkeeper badge](https://badges.greenkeeper.io/5c077m4n/await-fn.svg)](https://greenkeeper.io/)
[![David DM](https://david-dm.org/5c077m4n/await-fn.svg)](https://david-dm.org/)

A tiny helper to make it easy to await a normal function.

Type into the terminal

```zsh
npm install --save await-fn
```

And into your code:

```javascript
const to = require('await-fn');
```

**and you are good to go!**

For example:
```javascript
/** code code code */
let [err, data] = await to((a, b) => a + b, { params: [1, 3] });
/** code code code */
```

Usage:
------

To use this function: `to(fn [, options]);`

1. `fn: Function` the function you want to wait to.

2. `options: {}` includes:

	- `params: any[]` an array of the input parameters for your function.

	- `web: boolean` true if you would like to have the returned error in a [HTTP Responder](https://www.npmjs.com/package/http-responder) object.

	- `throw: boolean` if you wish the error to be thrown instead of returned.


Returned values:
------

And the results will be returned like this:

`[error, data]` where the error is an error object (depending on the options chosen), and data is the function's returned value.
