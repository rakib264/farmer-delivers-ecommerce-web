const express = require('express');
const router = express.Router();
const { isAuthenticated, isAuthorizedRole } = require('../middlewares/auth');
const { newOrder, getSingleOrder, getLoggedInUserOrders, getAllOrders, updateSingleOrder, deleteSingleOrder } = require('../controller/orderController');

//New Order
router.route('/new/order').post(isAuthenticated, newOrder);
//Single Order
router.route('/single/order/:id').get(isAuthenticated, getSingleOrder);
//Single Order
router.route('/loggedIn/user/orders').get(isAuthenticated, getLoggedInUserOrders);

//Admin - Get All Orders
router.route('/admin/all/orders').get(isAuthenticated, isAuthorizedRole('admin'), getAllOrders);
//Admin - Update Single Order
router.route('/admin/update/order/:id').put(isAuthenticated, isAuthorizedRole('admin'), updateSingleOrder);
//Admin- Delete Single Order
router.route('/admin/delete/order/:id').delete(isAuthenticated, isAuthorizedRole('admin'), deleteSingleOrder);

module.exports = router;