const express = require('express');
const router = express.Router();

const { getallproducts, addProducts, 
        getSingleProduct, updateSingleProduct,
        deleteSingleProduct, reviewProduct
     } = require('../controller/productController');
const { isAuthenticated, isAuthorizedRole} = require('../middlewares/auth');

router.route('/products').get(getallproducts);
router.route('/product/:id').get(getSingleProduct);
router.route('/product/review').put(isAuthenticated, reviewProduct)

//Admin Routes
router.route('/admin/product/add').post(isAuthenticated, isAuthorizedRole('admin'), addProducts);
router.route('/admin/product/update/:id').put(isAuthenticated, isAuthorizedRole('admin'), updateSingleProduct);
router.route('/admin/product/delete/:id').delete(isAuthenticated, isAuthorizedRole('admin'), deleteSingleProduct);

module.exports = router;