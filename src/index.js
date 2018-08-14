const Bluebird = require('bluebird');
const hr = require('http-responder');

module.exports = (fn, options = {}) => {
	let prom;
	if(options.params) prom = new Bluebird(resolve =>
		resolve(fn(...options.params))
	);
	else prom = new Bluebird(resolve => resolve(fn(options.param)));

	return prom
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
