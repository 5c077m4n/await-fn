!(function(r, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = e())
		: 'function' == typeof define && define.amd
		? define(e)
		: ((r = r || self).to = e());
})(this, function() {
	'use strict';
	return async function(r, { params: e, param: o, returnOne: t, throwError: n } = {}) {
		let i;
		if (r.constructor === Function) i = new Promise(t => t(e ? r(...e) : r(o)));
		else if (r.constructor === Promise) i = r;
		else {
			if (!Array.isArray(r)) throw new Error('There was an error in your input function.');
			{
				const t = r.map(r =>
					r.constructor === Function
						? new Promise(t => t(e ? r(...e) : r(o)))
						: r.constructor === Promise
						? r
						: void 0
				);
				i = Promise.all(t);
			}
		}
		return i
			.then(r => (t ? r : [void 0, r]))
			.catch(r => (n ? Promise.reject(r) : t ? r : [r, void 0]))
			.catch(r => {
				throw r;
			});
	};
});
