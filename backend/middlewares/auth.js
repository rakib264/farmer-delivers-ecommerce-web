const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/errorHandler');
const User = require('../models/userModel');
const catchAsyncError = require('./catchAsyncError');

//isAuthenticated middleware
exports.isAuthenticated = catchAsyncError( async (req, res, next) => {
    const { token } = req.cookies;
    if(!token){
        return next(new ErrorHandler('Login First to access', 401))
    }

    //Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next()

})

//Authorization middleware
exports.isAuthorizedRole = (...roles) => {
    return (req, res, next) => {
        // console.log(req.user);
        if(!roles.includes(req.user.role)){
            return next( new ErrorHandler(`Access Denied! ${req.user.role}, is not permitted`, 403));
        }
        next();
    }
}