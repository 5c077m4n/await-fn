const bluebird = require('bluebird');
const hr = require('http-responder');

module.exports = (fn, ...args) => {
	if(!args[options]) {
		return bluebird.resolve(fn(...args[params]))
			.then(data => [undefined, data])
			.catch(error => [error, undefined]);
	}
	if(args[options].throw && args[options].web) {
		return bluebird.resolve(fn(...args[params]))
			.then(data => [undefined, data])
			.catch(error => { throw hr.improve(error); });
	}
	if(args[options].web) {
		return bluebird.resolve(fn(...args[params]))
			.then(data => [undefined, data])
			.catch(error => [hr.improve(error), undefined]);
	}
	if(args[options].throw) {
		return bluebird.resolve(fn(...args[params]))
			.then(data => [undefined, data])
			.catch(error => { throw error; });
	}
};
