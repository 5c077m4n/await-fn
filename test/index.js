const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const to = require('../src/index');


describe('Test to function', function() {
	describe('the waiting', function() {
		it('should return 7 - no params', async function() {
			let [error, data] = await to(() => 7);
			expect(data).equal(7);
		});
		it('should return 7 - with params', async function() {
			let [error, data] = await to(x => x++, { params: [5] });
			expect(data).equal(6);
		});
	});
});
