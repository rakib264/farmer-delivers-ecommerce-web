const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const catchAsyncError = require('../middlewares/catchAsyncError');
const ErrorHandler = require('../utils/errorHandler');


//Create Order
exports.newOrder = catchAsyncError(async (req, res, next) => {
    const {
        shippingInfo,
        orderItems,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
    } = req.body;
    const order = await Order.create({
        shippingInfo,
        orderItems,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user.id
    })
    res.status(200).json({
        success: true,
        order
    })
})

//Get Single Order
exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');
    if(!order){
        return next(new ErrorHandler('No order found withthis id', 404));
    }
    res.status(200).json({
        success: true,
        order
    })
});

//Get LoggedIn User's Order
exports.getLoggedInUserOrders = catchAsyncError(async (req, res, next) => {
    const orders = await Order.find({
        user: req.user.id
    });
    if(!orders){
        return next(new ErrorHandler('No order found withthis id', 404));
    }
    res.status(200).json({
        success: true,
        orders
    })
});


//Admin
 //Get all orders
exports.getAllOrders = catchAsyncError(async (req, res, next) => {
    const orders = await Order.find();

    //Calculating Total Revenue
    let totalRevenue = 0;
    orders.forEach(order => {
        totalRevenue += order.totalPrice;
    })

    res.status(200).json({
        success: true,
        totalOrders: orders.length,
        totalRevenue,
        orders
    })
});
 //Update Single Order
exports.updateSingleOrder  = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if(order.orderStatus === "Delivered"){
        return next(new ErrorHandler('The Order has been already delivered', 404));
    }
    //Update each product stock into the order items
    order.orderItems.forEach(async item => {
        await updateProductStock(item.product, item.quantity);
    })
    //Update order status
    order.orderStatus = req.body.status;
    order.deliveredAt = Date.now();

    await order.save();
    res.status(200).json({
        success: true,
        message: "Order has been updated"
    })
})

async function updateProductStock(id, quantity){
    const product = await Product.findById(id);
    product.stock = product.stock - quantity;
    await product.save({ validateBeforeSave: false })
}

// Admin - Delete Single Order
exports.deleteSingleOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if(!order){
        return next(new ErrorHandler('No order found with this is', 404));
    }
    await order.remove();
    res.status(200).json({
        success: true,
        message: "Order has been removed"
    })
})
