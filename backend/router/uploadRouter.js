const multer = require('multer');
// const Datauri = require('datauri/parser');
// const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });
const uploadSingleImage = upload.single('image');
// const dUri = new Datauri();
// const dataUri = req => dUri.format(path.extname(req.file.originalname), console.log(req.file.buffer));

module.exports = { uploadSingleImage };