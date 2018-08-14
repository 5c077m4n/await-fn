const bluebird = require('bluebird');
const hr = require('http-responder');

module.exports = (fn, options = {}) => {
	const promise = bluebird.resolve(fn(...((options.params)? options.params : [undefined])))

	if(!(options.throw && options.web)) {
		return promise
			.then(data => [undefined, data])
			.catch(error => [error, undefined]);
	}
	if(options.throw && options.web) {
		return promise
			.then(data => [undefined, data])
			.catch(error => {
				throw hr.improve(error);
			});
	}
	if(options.web) {
		return promise
			.then(data => [undefined, data])
			.catch(error => [hr.improve(error), undefined]);
	}
	if(options.throw) {
		return promise
			.then(data => [undefined, data])
			.catch(error => {
				throw error;
			});
	}
};
