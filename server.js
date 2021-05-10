require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { cloudinary } = require('./utils/cloudinary');
const PORT = process.env.PORT || 4000;

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
// connecting to database
require('./config/dbConnect');

// consting routes
const productRouter = require('./router/productRouter');
const authRouter = require('./router/authRouter');

// middlewares
app.use(express.static('.'));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(cors());

app.get('/api/images', async (req, res) => {
	const { resources } = await cloudinary.search
		.expression('folder: products')
		.sort_by('public_id', 'desc')
		.max_results(30)
		.execute();
	const publicIds = resources.map((file) => file.public_id);
	res.send(publicIds);
});

app.post('/api/upload', async (req, res) => {
	console.log(req.body);
	try {
		const fileStr = req.body.data;
		const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
			upload_preset: 'products'
		});
		console.log(uploadedResponse);
		res.json({ msg: 'Yaayae' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ err: 'Something went wrong' });
	}
});
// Stripe payment
app.post('/payment', async (req, res) => {
	const { cart, shipping_fee, total_amount } = req.body;

	const calculateOrderAmount = () => {
		return shipping_fee + total_amount;
	};
	// Create a PaymentIntent with the order amount and currency
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: calculateOrderAmount(),
			currency: 'usd'
		});
		res.send({
			clientSecret: paymentIntent.client_secret
		});
	} catch (error) {
		return res.status(500).json({ msg: error.message });
	}
});

app.use('/auth', authRouter);
app.use('/products', productRouter);

// catch all routes not on the server
app.all('*', (req, res, next) => {
	res
		.status(404)
		.json({ message: `Cannot find ${req.originalUrl} on the server` });
});

//
app.use((error, req, res, next) => {
	res.status(error.status || 500).json({ message: error.message });
});

module.exports = app.listen(PORT, () => console.log('Server up and running'));
