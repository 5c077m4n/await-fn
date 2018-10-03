# Await Function

[![Greenkeeper badge](https://badges.greenkeeper.io/5c077m4n/await-fn.svg)](https://greenkeeper.io/)
[![David DM](https://david-dm.org/5c077m4n/await-fn.svg)](https://david-dm.org/)
[![Build Status](https://travis-ci.org/5c077m4n/await-fn.svg?branch=master)](https://travis-ci.org/5c077m4n/await-fn)

A tiny helper to make it easy to await a classic function (and now promises too).

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
async function doThisNThat() {
	/** code code code */
	let [err, data] = await to((a, b) => a + b, { params: [1, 3] });
	if(err) {
        /** handle error - only if throw is set to false! */
	}
	/** code code code */
}
```

## Usage:

To use this function: `to(fnOrPromise [, options]);`

1. `fnOrPromise: Function | Promise | Function[] | Promise[]` the function or promise or array of them that you want to wait to.

2. `options: {}` includes:

	- `params: any[]` **or** `param: any` the input parameters for your function **(for functions only)**.

	- `web: boolean` set to true if you would like to have the returned error in a [HTTP Responder](https://www.npmjs.com/package/http-responder) object.

	- `throw: boolean` set to true if you wish the error to be thrown instead of returned.


### Returned values:

And the results will be returned like this:

`[error, data]` where:

- `error: undefined | Error | http-responder` is an error object (depending on the options chosen - if `thrown` is set to true then this won't exist).

- `data: undefined | any | any[]` is the function's returned value (if there is one) - if you inputted an array the result will be in an array too.


**Happy waiting! ;)**
