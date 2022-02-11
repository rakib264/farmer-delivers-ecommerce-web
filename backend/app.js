const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const errorMiddleware = require('./middlewares/error');
// const cloudinary = require('cloudinary');

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());

// //Setting up the cloudinary config
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// })

//Importing Router
const products = require('./routes/productRoute');
const auth = require('./routes/authRoutes');
const order = require('./routes/orderRoutes');

app.use('/farmex', products);
app.use('/farmex', auth);
app.use('/farmex', order);

//Error Middleware
app.use(errorMiddleware);
module.exports = app;