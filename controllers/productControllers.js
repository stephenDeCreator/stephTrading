const Product = require('../models/Products');
const { cloudinary } = require('../utils/cloudinary');

const getAllProducts = async (req, res) => {
	const products = await Product.find();
	res.status(200).json({ products });
};
const getProduct = async (req, res) => {
	const id = req.params.id;
	const product = await Product.findById(id);
	res.status(200).json({ product });
};
const createProduct = async (req, res) => {
	try {
		const fileStr = req.body.image;
		const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
			upload_preset: 'products'
		});
		const product = await Product.create({
			...req.body,
			image: uploadedResponse.url
		});

		res.status(201).json({ product });
	} catch (error) {
		console.error(error);
	}
};

const updateProduct = async (req, res) => {
	const id = req.params.id;
	const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
	res.status(200).json({ product });
};

const deleteProduct = async (req, res) => {
	const id = req.params.id;
	await Product.findByIdAndDelete(id);
	res.status(204);
};

module.exports = {
	getAllProducts,
	getProduct,
	createProduct,
	updateProduct,
	deleteProduct
};
