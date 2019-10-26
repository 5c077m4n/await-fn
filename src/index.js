'use strict';

const Bluebird = require('bluebird');
const hr = require('http-responder');

const to = (fn, { params, param, returnOne, web, throwError } = {}) => {
	let promise;
	if (fn.constructor === Function) {
		promise = new Bluebird(resolve =>
			resolve(params ? fn(...params) : fn(param))
		);
	} else if (fn.constructor === Promise || fn.constructor === Bluebird) {
		promise = fn;
	} else if (Array.isArray(fn)) {
		const promArr = fn.map(fnOrProm => {
			if (fnOrProm.constructor === Function) {
				return new Bluebird(resolve => {
					return resolve(
						params ? fnOrProm(...params) : fnOrProm(param)
					);
				});
			}
			if (
				fnOrProm.constructor === Promise ||
				fnOrProm.constructor === Bluebird
			) {
				return fnOrProm;
			}
		});
		promise = Bluebird.all(promArr);
	} else {
		throw new Error('There was an erron in your input function.');
	}

	return promise
		.then(data => (returnOne ? data : [undefined, data]))
		.catch(error => {
			if (throwError) return Bluebird.reject(error);
			if (returnOne) return web ? hr.improve(error) : error;
			return web ? [hr.improve(error), undefined] : [error, undefined];
		})
		.catch(error => {
			throw web ? hr.improve(error) : error;
		});
};

if (module && module.exports) module.exports = to;
else if (window || self) {
	const global = window || self;
	const originalTo = global.to;
	global.to = to;
	global.restoreOriginalTo = () => (global.to = originalTo);
}
