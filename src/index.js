'use strict';

const Bluebird = require('bluebird');
const hr = require('http-responder');


module.exports = (fn, options = {}) => {
	let promise, resArr = [];
	if(fn.constructor === Function) {
		promise = new Bluebird(resolve => {
			return resolve((options.params)?
				fn(...options.params) : fn(options.param)
			)
		});
	}
	if(fn.constructor === Promise || fn.constructor === Bluebird) promise = fn;
	if(fn.constructor === Array) {
		const promArr = fn.map(async fnOrProm => {
			let res;
			if(fnOrProm.constructor === Function) {
				res = await new Bluebird(resolve => {
					return resolve((options.params)?
						fnOrProm(...options.params) : fnOrProm(options.param)
					)
				});
			}
			if(fnOrProm.constructor === Promise || fnOrProm.constructor === Bluebird)
				res = await fnOrProm;
			resArr.push(res);
		})
		promise = Bluebird.all(promArr);
	}

	return promise
		.then(data => {
			if(resArr.length) return [undefined, resArr];
			return (options.returnOne)? data : [undefined, data];
		})
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
