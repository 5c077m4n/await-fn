export default function to(fn, { params, param, returnOne, throwError } = {}) {
	let promise;
	if (fn.constructor === Function) {
		promise = new Promise(resolve => resolve(params ? fn(...params) : fn(param)));
	} else if (fn.constructor === Promise) {
		promise = fn;
	} else if (Array.isArray(fn)) {
		const promArr = fn.map(fnOrProm => {
			if (fnOrProm.constructor === Function) {
				return new Promise(resolve => resolve(params ? fnOrProm(...params) : fnOrProm(param)));
			}
			if (fnOrProm.constructor === Promise) return fnOrProm;
		});
		promise = Promise.all(promArr);
	} else {
		throw new Error('There was an erron in your input function.');
	}

	return promise
		.then(data => (returnOne ? data : [undefined, data]))
		.catch(error => {
			if (throwError) return Promise.reject(error);
			if (returnOne) return error;
			return [error, undefined];
		})
		.catch(error => {
			throw error;
		});
}
