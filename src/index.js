const Bluebird = require('bluebird');
const hr = require('http-responder');

module.exports = (fn, options = {}) => {
	let promise;
	if(fn instanceof Function) {
		promise = new Bluebird(resolve => {
			if(options.params) resolve(fn(...options.params))
			else resolve(fn(options.param))
		});
	}
	if(fn instanceof Promise) promise = fn;

	return promise
		.then(data => [undefined, data])
		.catch(error => {
			if(options.throw) Bluebird.reject(error);
			if(options.web) return [hr.improve(error), undefined];
			return [error, undefined];
		})
		.catch(error => {
			if(options.web) throw [hr.improve(error), undefined];
			throw [error, undefined];
		});
};
