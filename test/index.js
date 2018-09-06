const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();
const hr = require('http-responder');

const to = require('../src/index');


const log = console.log.bind(console);
const factorial = x => (x > 0)? (x * factorial(x - 1)) : 1;
const longTask = () => {
	for(let i = 0; i < 1e7; i++) factorial(10);
	return 1;
};

describe('Test to function', function() {
	describe('the calculating', function() {
		it('should return 7 - no params', async function() {
			const [error, data] = await to(() => 7);
			expect(data).equal(7);
		});
		it('should return 7 - no params - returnOne', async function() {
			const data = await to(() => 7, { returnOne: true });
			expect(data).equal(7);
		});
		it('should return 6 - 1 param', async function() {
			const [error, data] = await to(x => ++x, { param: 5 });
			expect(data).equal(6);
		});
		it('should return 4 - 2 params', async function() {
			const [err, data] = await to((a, b) => a + b, { params: [1, 3] });
			expect(data).equal(4);
		});
		it('should return 1234 - promise', async function() {
			const p = new Promise((resolve) => resolve(1234));
			const [err, data] = await to(p);
			expect(data).equal(1234);
		});
	});
	describe('the error handling', function() {
		it('should catch the error - promise', async function() {
			const p = new Promise((resolve) => resolve(factorial(1e5)));
			const [error, data] = await to(p);
			expect(error instanceof Error).equal(true);
		});
		it('should catch the error', async function() {
			const [error, data] = await to(factorial, { param: 1e5, });
			expect(error instanceof Error).equal(true);
		});
		it('should catch the error - returnOne', async function() {
			const error = await to(factorial, { param: 1e5, returnOne: true });
			expect(error instanceof Error).equal(true);
		});
		it('should catch the HTTP Responder object', async function() {
			const [error, data] = await to(factorial, { param: 1e5, web: true });
			expect(hr.isHR(error)).equal(true);
		});
		it('should throw an error', async function() {
			try {
				await to(factorial, { param: 1e5, throw: true });
			}
			catch(error) {
				expect(error instanceof Error).equal(true);
			}
		});
		it('should throw an HTTP Responder object', async function() {
			try {
				await to(factorial, { param: 1e5, throw: true, web: true });
			}
			catch(error) {
				expect(hr.isHR(error)).equal(true);
			}
		});
	});
	describe('the waiting', function() {
		it('wait for the result', async function() {
			const [error, data] = await to(longTask);
			expect(data).equal(1);
		});
	});
});
