const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
const sendToken = require('../utils/sendToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
// const cloudinary = require('cloudinary');
//Register a User
exports.regiserUser = catchAsyncError( async (req, res, next) => {
    console.log(req.body);
    // const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //     folder: 'avatar',
    //     width: 150,
    //     crop: 'scale' //Auto scaling height, don't need to be defined
    // })
    const { name, email, password, avatar } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar

    })
    // Send Token
    sendToken(user, 200, res);
})

//Login 
exports.loginUser = catchAsyncError( async (req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password){
        return next(new ErrorHandler('Please enter email & password', 400));
    }
    const user = await User.findOne({ email }).select('+password');
    if(!user){
        return next(new ErrorHandler('Invalid Email or Password', 400));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler('Invalid Email or Password', 400));
    }
    // Send Token
    sendToken(user, 200, res);
})

//Forgot Password
exports.forgotPassword = catchAsyncError( async (req, res, next) => {
    // const { email } = req.body;
    const user = await User.findOne({ email: req.body.email });
    if(!user){
        return next( new ErrorHandler('User does not found with this email', 404));
    }
    const resetToken = user.getResetPasswordToken();
    //Save the token to database
    await user.save({validateBeforeSave: false});

    const resetUrl = `${req.protocol}://${req.get('host')}/farmex/forgot/password/${resetToken}`;
    const message = `Your requested url is given below:\n\n ${resetUrl}\n\nIf you are not requested then ignore it`;

    try{
       await sendEmail({
            email:user.email,
            subject: 'Farmex Password Recovery Request',
            message: message,
        })
        
        res.status(200).json({
            success: true,
            message: `Email is sent to ${user.email}`
        })
    } catch(error){
        user.resetPasswordToken = undefined,
        user.resetPasswordExpire = undefined
        await user.save({ validateBeforeSave: false })
        return next(new ErrorHandler(error.message, 500))
    }
})

//Reset Password 
exports.resetPassword = catchAsyncError( async (req, res, next) => {
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire : { $gt : Date.now() }
    }
    )
    if(!user){
        return next(new ErrorHandler('Invalid reset password token or token has been expired', 400));
    }
    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler('Password does not match', 400));
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    sendToken(user, 200, res);
})

//Get Currentlt LoggedIn User
exports.getLoggedInUser = catchAsyncError( async (req, res, next) => {
    const user = await User.findById(req.user.id);
    if(!user){
        return next(new ErrorHandler('No Loggedin user profile found',400));
    }
    res.status(200).json({
        success: true,
        user
    })
})

//Update LoggedIn User Password
exports.updateLoggedInUserPassword = catchAsyncError( async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');
    if(!user){
        return next(new ErrorHandler('No Loggedin user profile found',400));
    }
    const isMatched = await user.comparePassword(req.body.oldPassword);
    if(!isMatched){
        return next(new ErrorHandler('Oldpassword is invalid',400));
    }
    user.password = req.body.password;
    await user.save();
    sendToken(user, 200, res);
})

//Update LoggedIn User Profile Info
exports.updateLoggedInUserProfile = catchAsyncError( async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email
    }
    //avatar: TODO
    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        user
    })
})

//Admin Routes
  //Get All Users
exports.getAllUsers = catchAsyncError( async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        count: users.length,
        users
    })
})

 //Get a Single User
exports.getSingleUser = catchAsyncError( async (req, res, next) => {
    const user = await User.findById(req.params.id);
    // console.log(user);
    if(!user){
        return next(new ErrorHandler('User Not Found With this Id',400));
    }
    res.status(200).json({
        success: true,
        user
    })
})

//Update a user
exports.updateSingleUser = catchAsyncError( async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }
    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        user
    })
})
//Delete a user
exports.deleteSingleUser = catchAsyncError( async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if(!user){
        return next(new ErrorHandler('User not found with this Id', 400));
    }
    await user.remove();
    res.status(200).json({
        success: true,
        message: 'User deleted by admin'
    })
})

// Logout 
exports.logout = catchAsyncError( async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date( Date.now() ),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: "Successfully Logged out"
    })
})




