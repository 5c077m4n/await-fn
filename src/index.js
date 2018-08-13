const bluebird = require('bluebird');
const hr = require('http-responder');

module.exports = (fn, options) => {
	if(!options) {
		return bluebird.resolve(fn(...options.params))
			.then(data => [undefined, data])
			.catch(error => [error, undefined]);
	}
	if(options.throw && options.web) {
		return bluebird.resolve(fn(...options.params))
			.then(data => [undefined, data])
			.catch(error => {
				throw hr.improve(error);
			});
	}
	if(options.web) {
		return bluebird.resolve(fn(...options.params))
			.then(data => [undefined, data])
			.catch(error => [hr.improve(error), undefined]);
	}
	if(options.throw) {
		return bluebird.resolve(fn(...options.params))
			.then(data => [undefined, data])
			.catch(error => {
				throw error;
			});
	}
};
