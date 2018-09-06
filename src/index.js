'use strict';

const Bluebird = require('bluebird');
const hr = require('http-responder');

module.exports = (fn, options = {}) => {
	let promise;
	if(fn instanceof Function) {
		promise = new Bluebird(resolve =>
			resolve((options.params)? fn(...options.params) : fn(options.param))
		);
	}
	if(fn instanceof Promise || fn instanceof Bluebird) promise = fn;

	return promise
		.then(data => (options.onlyData)? data : [undefined, data])
		.catch(error => {
			if(options.throw) Bluebird.reject(error);
			return (options.web)? [hr.improve(error), undefined] : [error, undefined];
		})
		.catch(error => {
			throw (options.web)? hr.improve(error) : error;
		});
};
