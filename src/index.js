const bluebird = require('bluebird');
const hr = require('http-responder');

module.exports = (fn, options = {}) => {
	const promise = bluebird.resolve(fn(...((options.params)? options.params : [undefined])))
		.then(data => [undefined, data]);

	if(!(options.throw && options.web)) {
		return promise
			.catch(error => [error, undefined]);
	}
	if(options.throw && options.web) {
		return promise
			.catch(error => {
				throw hr.improve(error);
			});
	}
	if(options.web) {
		return promise
			.catch(error => [hr.improve(error), undefined]);
	}
	if(options.throw) {
		return promise
			.catch(error => {
				throw error;
			});
	}
};
