const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const to = require('../src/index');


const factorial = x => (x > 0)? (x * factorial(x - 1)) : 1;
const longJob = () => {
	for(let i = 0; i < 1e7; i++) factorial(15);
	return 1;
};

describe('Test to function', function() {
	describe('the calculating', function() {
		it('should return 7 - no params', async function() {
			let [error, data] = await to(() => 7);
			expect(data).equal(7);
		});
		it('should return 6 - 1 param', async function() {
			let [error, data] = await to(x => ++x, { params: [5] });
			expect(data).equal(6);
		});
		it('should return 4 - 2 params', async function() {
			let [err, data] = await to((a, b) => a + b, { params: [1, 3] });
			expect(data).equal(4);
		});
	});
	describe('the waiting', function() {
		it('wait for the result', async function() {
			let [error, data] = await to(longJob);
			expect(data).equal(1);
		});
	});
});
