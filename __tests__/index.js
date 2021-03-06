import { expect } from 'chai';

import to from '../src';

const factorial = x => (x > 0 ? x * factorial(x - 1) : 1);
const factorialPromise = x => new Promise(resolve => resolve(factorial(x)));
const longTask = () => {
	for (let i = 0; i < 1e7; i++) factorial(10);
	return 1;
};

describe('Sanity', function() {
	it('Should detect a wrong input', async function() {
		try {
			await to(7);
		} catch (err) {
			expect(err instanceof Error);
		}
	});
});
describe('Test the to function', function() {
	describe('the calculating', function() {
		it('should return 7 - no params', async function() {
			const [, data] = await to(() => 7);
			expect(data).equal(7);
		});
		it('should return 7 - no params - returnOne', async function() {
			const data = await to(() => 7, {
				returnOne: true,
			});
			expect(data).equal(7);
		});
		it('should return 6 - 1 param', async function() {
			const [, data] = await to(x => ++x, {
				param: 5,
			});
			expect(data).equal(6);
		});
		it('should return 4 - 2 params', async function() {
			const [, data] = await to((a, b) => a + b, {
				params: [1, 3],
			});
			expect(data).equal(4);
		});
		it('should return 1234 - promise', async function() {
			const p = new Promise(resolve => resolve(1234));
			const [, data] = await to(p);
			expect(data).equal(1234);
		});
	});
	describe('the error handling', function() {
		it('should catch the error - promise', async function() {
			const p = new Promise(resolve => resolve(factorial(1e5)));
			const [error] = await to(p);
			expect(error instanceof Error).equal(true);
		});
		it('should catch the error', async function() {
			const [error] = await to(factorial, {
				param: 1e5,
			});
			expect(error instanceof Error).equal(true);
		});
		it('should catch the error - returnOne', async function() {
			const error = await to(factorial, {
				param: 1e5,
				returnOne: true,
			});
			expect(error instanceof Error).equal(true);
		});
		it('should catch the Error', async function() {
			const [error] = await to(factorial, {
				param: 1e5,
				web: true,
			});
			expect(error instanceof Error);
		});
		it('should throw an error', async function() {
			try {
				await to(factorial, {
					param: 1e5,
					throw: true,
				});
			} catch (error) {
				expect(error instanceof Error).equal(true);
			}
		});
		it('should throw an Error', async function() {
			try {
				await to(factorial, {
					param: 1e5,
					throw: true,
					web: true,
				});
			} catch (error) {
				expect(error instanceof Error);
			}
		});
	});
	describe('the waiting', function() {
		it('wait for the result', async function() {
			const [, data] = await to(longTask);
			expect(data).equal(1);
		});
	});
	describe('array handling', function() {
		it('get a result', async function() {
			const [, data] = await to([() => 1]);
			expect(data).to.exist;
		});
		it('should check the result - 1 calc (1 function)', async function() {
			const [, data] = await to([factorial], {
				param: 3,
			});
			expect(data[0]).to.equal(6);
		});
		it('should check the result - 2 calc (2 functions)', async function() {
			const [, data] = await to([factorial, factorial], {
				param: 3,
			});
			expect(data).to.deep.equal([6, 6]);
		});
		it('should check the result - 3 calc (function & promise)', async function() {
			const [, data] = await to(
				[
					factorial,
					new Promise(resolve => resolve(factorial(4))),
					new Promise(resolve => resolve(factorial(3))),
				],
				{ param: 3 }
			);
			expect(data).to.deep.equal([6, 24, 6]);
		});
		it('should check the result - array of 500 functions & 500 promises', async function() {
			const [, data] = await to(
				Array.from({ length: 1e3 }, (v, i) => (i % 2 ? factorial : factorialPromise)),
				{ param: 3 }
			);
			expect(data).to.deep.equal(Array(1e3).fill(6));
		});
	});
});
