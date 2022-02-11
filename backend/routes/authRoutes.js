const express = require('express');
const router = express.Router();

const { regiserUser, loginUser, forgotPassword, resetPassword,
        getLoggedInUser, 
        updateLoggedInUserPassword, 
        updateLoggedInUserProfile,
        getAllUsers, getSingleUser,
        updateSingleUser, deleteSingleUser,logout } = require('../controller/authController');
const {isAuthenticated, isAuthorizedRole} = require('../middlewares/auth');        

router.route('/register').post(regiserUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout)

router.route('/forgot/password').post(forgotPassword);
router.route('/reset/password/:token').put(resetPassword);

router.route('/loggedIn/user').get(isAuthenticated, getLoggedInUser);
router.route('/loogedIn/user/password/update').put(isAuthenticated, updateLoggedInUserPassword);
router.route('/loogedIn/user/profile/update').put(isAuthenticated, updateLoggedInUserProfile);

//Admin Routes
router.route('/admin/get/allusers').get(isAuthenticated, isAuthorizedRole('admin'), getAllUsers);
router.route('/admin/single/user/:id')
                    .get(isAuthenticated, isAuthorizedRole('admin'), getSingleUser)
                    .put(isAuthenticated, isAuthorizedRole('admin'), updateSingleUser)
                    .delete(isAuthenticated, isAuthorizedRole('admin'), deleteSingleUser);

module.exports = router;