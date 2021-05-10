const server = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');

// styling method
chai.should(
	// middleware

	chai.use(chaiHttp)
);

describe('Test Product Controller', () => {
	describe('GET ALL Products', () => {
		it('Should return all products', (done) => {
			chai
				.request(server)
				.get('/products')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
				});
		});
		it('Should not return all products', (done) => {
			chai
				.request(server)
				.get('/products')
				.end((err, res) => {
					res.should.have.status(404);
					done();
				});
		});
	});
	describe('GET Single Product', () => {
		it('Should return Single Pproduct', (done) => {
			const postId = '60632e9b30bcc919b000d4f5';
			chai
				.request(server)
				.get(`/products/${postId}`)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
				});
		});
		it('Should not return Single Product', (done) => {
			const postId = '60632e9b30bcc919b000d4f5';
			chai
				.request(server)
				.get(`/products/${postId}`)
				.end((err, res) => {
					res.should.have.status(404);

					done();
				});
		});
	});
});
