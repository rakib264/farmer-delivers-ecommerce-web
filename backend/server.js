const app = require('./app.js');
const dotenv = require('dotenv');

//Internal imports
const connectDatabase = require('./config/db')

dotenv.config({
    path: 'backend/config/config.env'
})

//Database Connection
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

//Handleing Uncaught Exception
process.on('uncaughtException', err => {
    console.log(`Error: ${err.message}`);
    console.log("Server is shutting down due to uncaught exception error");
    process.exit(1);
})

//Handling unhandled promise rejection
process.on('unhandledRejection', err => {
    console.log(`Error : ${err.stack}`);
    console.log("Server is shutting down due unhandled promise rejection error");
    server.close(() => {
        process.exit(1)
    })
})