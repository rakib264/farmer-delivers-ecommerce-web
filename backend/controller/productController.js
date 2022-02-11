const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
const APIFeatures = require('../utils/apiFeatures');

//Get All Product Controller

//Get All Product => farmex/products
exports.getallproducts = catchAsyncError(async (req, res, next) => {
    const resperpage = 8;
    const apiFeatures = new APIFeatures(Product.find(), req.query).search()
                                                                  .filter()
                                                                  .pagination(resperpage);
    const products = await apiFeatures.query;
    res.status(200).json({
        success: 'True',
        message: 'All products have been fetched!',
        count: products.length,
        product: products
    })
})

//Add Product => farmex/admin/product/add

exports.addProducts = catchAsyncError(async (req, res, next) => {
    req.body.user = req.user.id;
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        message: "Product added successfully",
        product: product
    })
})

//Find Single Product => farmex/product/:id
exports.getSingleProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product Not Found", 404));
    }
    res.status(200).json({
        success: true,
        message: "Product finded successfully",
        product: product
    })
})


//Update Product => farmex/admin/product/update
exports.updateSingleProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product Not Found", 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        message: "Product updated successfully",
        product: product
    })
})



//Delete Single Product => farmex/admin/product/delete
exports.deleteSingleProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product Not Found", 404));
    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    })
})

//Review Product
exports.reviewProduct = catchAsyncError(async (req, res, next) => {
    const { rating, comment, productId } = req.body;
    const review = {
        user: req.user.id,
        name: req.user.name,
        rating: Number(rating),
        comment: comment
    };
    const product = await Product.findById(productId);
    const isReviewed = product.reviews.find(r => r.user.toString() === req.user.id.toString());
    if(isReviewed){
        product.reviews.forEach(review => {
            if(review.user.toString() === req.user.id.toString()){
              review.comment = comment;
              review.rating = rating;  
            }
        })
    } else{
        product.reviews.push(review);
        product.numofReviews = product.reviews.length
    }

    //Calculate avg rating
    product.ratings = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;
    
    await product.save({ validateBeforeSave: false });
    res.status(200).json({
        success: true,
        message: "Revied added succcessfully"
    })
})