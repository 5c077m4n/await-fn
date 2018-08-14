const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const to = require('../src/index');


const wait = time => new Promise(resolve => setTimeout(resolve, time));

describe('Test to function', function() {
	describe('the waiting', function() {
		it('should return 7 - no params', async function() {
			let [error, data] = await to(() => 7);
			expect(data).equal(7);
		});
		it('should return 6 - with 1 param', async function() {
			let [error, data] = await to(x => ++x, { params: [5] });
			expect(data).equal(6);
		});
		it('should return 4 - with 2 params', async function() {
			let [err, data] = await to((a, b) => a + b, { params: [1, 3] });
			expect(data).equal(4);
		});
	});
});
