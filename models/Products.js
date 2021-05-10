const { Schema, model } = require('mongoose');

const productSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Please provide the product name.']
		},
		price: {
			type: Number,
			required: [true, 'Please provide the price.']
		},
		quantity: {
			type: Number,
			default: 0
		},
		image: {
			type: String,
			required: [true, 'Please provide product image']
		},
		description: {
			type: String,
			required: [true, 'Enter a description of the product']
		},
		company: {
			type: String,
			required: [true, 'Please provide company name']
		},
		category: {
			type: String,
			required: [true, 'Please provide a category of the product']
		},
		shipping: {
			type: Boolean
		},
		colors: {
			type: String,
			required: [true, 'Please specify a color']
		},
		stock: {
			type: Number,
			required: [true, 'Please enter stock']
		},
		stars: {
			type: Number,
			required: [true, 'Please provide star ratings']
		},
		reviews: {
			type: Number,
			required: [true, 'Please provide reviews']
		},
		featured: {
			type: Boolean
		}
	},
	{
		timestamps: true
	}
);

module.exports = model('Product', productSchema);
