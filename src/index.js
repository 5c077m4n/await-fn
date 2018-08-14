const Bluebird = require('bluebird');
const hr = require('http-responder');

module.exports = (fn, options = {}) => {
	return Promise.resolve(fn(...((options.params)? options.params : [undefined])))
		.then(data => [undefined, data])
		.catch(error => {
			if(options.throw && options.web) throw hr.improve(error);
			if(options.throw) throw error;
			if(options.web) return [hr.improve(error), undefined];
			return [error, undefined];
		});
};
