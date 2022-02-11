const Product = require('../models/productModel');
const dotenv = require('dotenv');
const products = require('../data/product');
const connectDatabase = require('../config/db')

dotenv.config({
    path: 'backend/config/config.env'
})

connectDatabase();

const seedDatabase = async () => {
    try{
        //Delete all
        await Product.deleteMany();
        console.log("All Products deleted");
        //Insert all
        await Product.insertMany(products);
        console.log("All Products added");
        process.exit();
    } catch(error) {
        console.log(error.message);
        process.exit();
    }
}
seedDatabase();
