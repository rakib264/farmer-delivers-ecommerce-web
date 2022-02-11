const ErrorHandler = require('../utils/errorHandler');


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if(process.env.NODE_ENV === "DEVELOPMENT"){
        res.status(err.statusCode).json({
            success: false,
            error: err,
            message: err.message,
            stack: err.stack
        })
    }

    if(process.env.NODE_ENV === "PRODUCTION"){
        let error = {...err};
        error.message = err.message || "Internal Server Error";

        // Invalid Mongoose Id Error
        if(err.name === "CastError"){
            const message = `Resource not found for ${err.path} Invalid`;
            error = new ErrorHandler(message, 400);
        }
        //Mongoose Validation Error
        if(err.name === "ValidationError"){
            const message = Object.values(err.errors).map(value => value.message);
            error = new ErrorHandler(message, 400);
        }
        //Mongoose Duplicate Key Error
        if(err.code = 11000){
            const message = `Duplicate Key ${Object.keys(err.keyValue)} error`;
            error = new ErrorHandler(message, 400);
        }
        //Wrong jwt error
        if(err.name === "JsonWebTokenError"){
            const message = `Wrong Jsonwebtoken error`;
            error = new ErrorHandler(message, 400);
        }
        //Expire jwt error
        if(err.name === "TokenExpiredError"){
            const message = `JWT Token has been expired`;
            error = new ErrorHandler(message, 400);
        }

        res.status(error.statusCode).json({
            success: false,
            message: error.message,
        })
    }
}