const User = require('../models/User');
const httpErrors = require('http-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidator, loginValidator } = require('../utils/validation');

const register = async (req, res) => {
	const result = await registerValidator.validateAsync(req.body);
	const { firstName, lastName, email, password, role } = result;

	// check if email is already in the database
	const alreadyExists = await User.findOne({ email });
	if (alreadyExists) {
		res.status(400).json({ message: 'Email already exists.' });
		return;
	}

	// hash the password
	// const salt = await bcrypt.genSalt(12);
	const hashedPassword = await bcrypt.hash(password, 12);

	const user = await User.create({
		firstName,
		lastName,
		email,
		password: hashedPassword,
		role
	});

	res.status(201).json({ user });
};

const login = async (req, res) => {
	const result = await loginValidator.validateAsync(req.body);
	const { email, password } = result;

	// check if email is in the database
	let user = await User.findOne({ email });
	if (!user) {
		res.status(400).json({ message: 'Invalid credentials' });
		return;
	}

	// check for password
	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		res.status(400).json({ message: 'Invalid credentials' });
		return;
	}

	// generate token
	const token = jwt.sign({ id: user._id }, '123456789', {
		expiresIn: '1h'
	});

	res.status(200).json({ token, user });
};

const verifyToken = (req, res, next) => {
	let token = req.headers['authorization'] || '';

	token = token.split(' ')[1];
	if (token) {
		const decodedToken = jwt.verify(token, '123456789');
		req.user = decodedToken.id;
		next();
	} else {
		res.status(403).json({ message: 'Unauthotized' });
	}
};

module.exports = {
	register,
	login,
	verifyToken
};
