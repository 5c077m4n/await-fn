const Bluebird = require('bluebird');
const hr = require('http-responder');

module.exports = (fn, options = {}) => {
	return new Bluebird(resolve => {
		if(options.params) resolve(fn(...options.params))
		else resolve(fn(options.param))
	})
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
