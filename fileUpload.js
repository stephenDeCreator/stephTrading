const multer = require('multer');

const storageEngine = multer.diskStorage({
	filename: (req, file, cb) => {
		const { originalname } = file;

		cb(null, originalname);
	},
	destination: (req, file, cb) => {
		cb(null, 'upload/');
	}
});

const filter = (req, file, cb) => {
	const { mimetype } = file;
	if (!mimetype.includes('image')) {
		return cb(null, false);
	}
	return cb(null, true);
};

const upload = multer({
	storage: storageEngine,
	fileFilter: filter,
	limits: {
		fileSize: 12 * 1024 * 1024
	}
});

module.exports = upload.single('image');
