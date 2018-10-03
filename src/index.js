'use strict';

const Bluebird = require('bluebird');
const hr = require('http-responder');


const instanceOfArrayItems = arr => {
	for(const el of arr)
		if(el || (arr[0].constructor !== el.constructor)) return false;
	return arr[0].constructor;
};

module.exports = (fn, options = {}) => {
	let promise;
	if(fn.constructor === Function) {
		promise = new Bluebird(resolve =>
			resolve((options.params)?
				fn(...options.params) : fn(options.param))
		);
	}
	if(fn.constructor === Promise || fn.constructor === Bluebird) promise = fn;
	if(fn.constructor === Array) {
		const arrType = instanceOfArrayItems(fn);
		if(!arrType) return;
		if(arrType === Function) {
			fn = fn.map(async func => await Bluebird.promisify(func));
		}
		else promise = Bluebird.all(fn);
	}

	return promise
		.then(data => (options.returnOne)? data : [undefined, data])
		.catch(error => {
			if(options.throw) Bluebird.reject(error);
			if(options.returnOne)
				return (options.web)? hr.improve(error) : error;
			return (options.web)? [hr.improve(error), undefined] : [error, undefined];
		})
		.catch(error => {
			throw (options.web)? hr.improve(error) : error;
		});
};
