const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        trim: true
    },
    price:{
        type: Number,
        required: [true, "Please Enter Product Price"]
    },
    prevPrice:{
        type: Number,
        required: [true, "Please Enter Product Price"]
    },
    description:{
        type: String,
        required: [true, "Enter Product Description"],
        trim: true
    },
    images: [
        {
            url:{
                type: String,
                required: [true, "Required"]
            }
        }
    ],
    ratings: {
        type: Number,
        default: 0
    },
    category:{
        type: String,
        required: [true, "Enter product category"],
        enum:{
            values:[
                'Fruits & Vegetables', 
                'Meat & Fish',
                'Beverage',
                'Kitchen Appliance',
                'Cooking',
                'Beauty Care',
                'Health Care',
                'Family Packages',
                'Popular',
                'Flash Sales',
                'Related'
            ],
            message: "Please Enter Correct Category Name"
        },
    },
    brand:{
        type: String,
        required: [true, "Enter Brand Name"]
    },
    seller:{
        type: String,
        required: [true, "Enter Seller Name"]
    },
    stock:{
        type: Number,
        required: [true, "Enter product stock"],
        default: 0
    },
    numofReviews:{
        type: Number,
        default: 0
    },
    reviews:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            name:{
                type: String,
                required: true
            },
            rating:{
                type: Number,
                required: true
            },
            comment:{
                type: String,
                required: true
            }
        }
    ],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }   

})

module.exports = mongoose.model('Product', productSchema);