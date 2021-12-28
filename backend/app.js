const express = require('express');
const mongodb = require('./config/database');
const cors = require('cors');
const app = express();
const indexRouter = require('./router');
const { json } = require('body-parser');
const errorHandling = require('./helpers/errorHandling');
// const fileUpload = require('express-fileupload');


const path = require('path');
const env = require("dotenv");
// const { cloudinaryConfig } = require("./config/cloudinary");
const dirname = path.resolve();

// const uploadRouter = require('./router/uploadRouter')
env.config();
app.use(json());
// app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 }, }));
app.use(cors());
app.use('/uploads', express.static(path.join(dirname, '/uploads')));

// app.get('/*', (req, res) => res.sendFile(resolve(__dirname, './../frontend/public/index.html')));

// app.use('/api/uploads', uploadRouter);
app.use('/api', indexRouter);
app.use(errorHandling);

const PORT = 4001;

mongodb.then(() => {
  console.log('Successfully connected mongoose DB');
  app.listen(PORT, 'localhost', () => {
    console.log(`http://localhost:${PORT}`)
  })
}).catch((err) => console.log(err, 'Error connect monggose DB'));

