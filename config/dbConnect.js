const mongoose = require('mongoose');

mongoose
	.connect(
		`mongodb+srv://stephen:${process.env.MONGODB_PASSWORD}@stephtrading.mwud2.mongodb.net/stephTrading?retryWrites=true&w=majority`,
		{
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
			useNewUrlParser: true
		}
	)
	.then(() => console.log('Database connected successfully'))
	.catch((err) => console.log(err.message));
