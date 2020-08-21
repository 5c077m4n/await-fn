# Await Function

[![Greenkeeper badge](https://badges.greenkeeper.io/5c077m4n/await-fn.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/5c077m4n/await-fn.svg?branch=master)](https://travis-ci.org/5c077m4n/await-fn)
[![Known Vulnerabilities](https://snyk.io/test/github/5c077m4n/http-responder/badge.svg)](https://snyk.io/test/github/5c077m4n/http-responder)
[![Coverage Status](https://coveralls.io/repos/github/5c077m4n/await-fn/badge.svg?branch=master)](https://coveralls.io/github/5c077m4n/await-fn?branch=master)

A tiny helper to make it easy to await a classic function (and now promises too).

**Note that the web option has been removed in order to keep the package as small as possible - if you want you can add it yourselves: [HTTP Responder](https://www.npmjs.com/package/http-responder)**

Type into the terminal

```zsh
npm install --save await-fn
```

And into your code (on commonjs environments):

```javascript
const to = require('await-fn');
```

or (node 13.0 - 13.2 with `--experimental-modules` flag, 13.2+ normally):

```javascript
import to from 'await-fn';
```

or (in a script HTML tag - without a '/' at the end!):

```
https://unpkg.com/await-fn
```

**and you are good to go!**

For example:

```javascript
async function doThisNThat() {
	/** code code code */
	let [err, data] = await to((a, b) => a + b, { params: [1, 3] });
	if (err) {
		/** handle error - only if throwError is set to false! */
	}
	/** code code code */
}
```

## Usage:

To use this function: `to(fnOrPromise [, options]);`

1. `fnOrPromise: Function | Promise | <Function | Promise>[]` the function or promise or array of them that you want to wait to.

2. `options: {}` includes:

    - `params: any[]` **or** `param: any` the input parameters for your function **(for functions only)**.

    - `throwError: boolean` set to true if you wish the error to be thrown instead of returned (_this option has been renamed from `throw`_).

    - `returnOne: boolean` set to true so the result will be only in one parameter (instead of an array of two) - it can be either a result or an error.

### Returned values:

And the results will be returned like this:

`[error, data]` where:

-   `error: undefined | Error` is an error object (depending on the options chosen - if `throwError` is set to true then this won't exist).

-   `data: undefined | any | any[]` is the function's returned value (if there is one) - if you inputted an array the result will be in an array too.

**Happy waiting! ;)**
