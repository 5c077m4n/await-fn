const Bluebird = require('bluebird');
const hr = require('http-responder');

module.exports = (fn, options = {}) => {
	return new Bluebird((resolve, reject) => {
		resolve(fn(...((options.params)? options.params : [undefined])));
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
