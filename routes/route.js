const router = require('express').Router();
// const authMiddleware = require('../middleware/authMiddleware.js'); Unused code

// Incorrect: The path is wrong. It should import from 'sellerController.js' instead of 'orderController.js'
// const {
//     sellerRegister,
//     sellerLogIn
// } = require('../controllers/orderController.js');

// Correct: Correctly importing from 'sellerController.js'
const {
    sellerRegister,
    sellerLogIn
} = require('../controllers/sellerController.js');

// const {
//     productCreate,
//     getProducts,
//     getProductDetail,
//     searchProductbyCategory,
//     getSellerProducts,
//     updateProduct,
//     deleteProduct,
//     deleteProducts,
//     deleteProductReview,
//     deleteAllProductReviews,
//     addReview,
//     getInterestedCustomers,
//     getAddedToCartProducts,
// } = require('../controllers/productController.js');

const {
    productCreate,
    getProducts,
    getProductDetail,
    searchProductbyCategory,
    getSellerProducts,
    updateProduct,
    deleteProduct,
    deleteProducts,
    deleteProductReview,
    deleteAllProductReviews,
    addReview,
    getInterestedCustomers,
    getAddedToCartProducts,
    searchProductbySubCategory, // Imported
    searchProduct // Imported
} = require('../controllers/productController.js');

const {
    customerRegister,
    customerLogIn,
    getCartDetail,
    cartUpdate
} = require('../controllers/customerController.js');

// const {
//     newOrder,
//     getOrderedProductsBySeller,
// } = require('../controllers/orderController.js');

const {
    newOrder,
    getOrderedProductsBySeller,
    getOrderedProductsByCustomer // Imported 
} = require('../controllers/orderController.js');


// Seller
router.post('/SellerRegister', sellerRegister);
router.post('/SellerLogin', sellerLogIn);

// Product
router.post('/ProductCreate', productCreate);
router.get('/getSellerProducts/:id', getSellerProducts);
router.get('/getProducts', getProducts);
router.get('/getProductDetail/:id', getProductDetail);
router.get('/getInterestedCustomers/:id', getInterestedCustomers);
router.get('/getAddedToCartProducts/:id', getAddedToCartProducts);

router.put('/ProductUpdate/:id', updateProduct);
router.put('/addReview/:id', addReview);

// Incorrect: The handler function name should match the route purpose, i.e., searching for a product
// router.get('/searchProduct/:key', searchProductbyCategory);

// Correct: The handler function name 'searchProduct' matches the route purpose
router.get('/searchProduct/:key', searchProduct);

router.get('/searchProductbyCategory/:key', searchProductbyCategory);

// Incorrect: The handler function name should match the route purpose, i.e., searching products by subcategory
// router.get('/searchProductbySubCategory/:key', searchProductbyCategory);

// Correct: The handler function name 'searchProductbySubCategory' matches the route purpose
router.get('/searchProductbySubCategory/:key', searchProductbySubCategory);

router.delete('/DeleteProduct/:id', deleteProduct);
router.delete('/DeleteProducts/:id', deleteProducts);
router.delete ('/deleteProductReview/:id', deleteProductReview);
router.put ('/deleteAllProductReviews/:id', deleteAllProductReviews);

// Customer
router.post('/CustomerRegister', customerRegister);
router.post('/CustomerLogin', customerLogIn);
router.get('/getCartDetail/:id', getCartDetail);
router.put('/CustomerUpdate/:id', cartUpdate);

// Order
router.post('/newOrder', newOrder);

// Incorrect: The handler function name should match the route purpose, i.e., getting ordered products by customer
// router.get('/getOrderedProductsByCustomer/:id', getOrderedProductsBySeller);

// Correct: The handler function name 'getOrderedProductsByCustomer' matches the route purpose
router.get('/getOrderedProductsByCustomer/:id', getOrderedProductsByCustomer);

router.get('/getOrderedProductsBySeller/:id', getOrderedProductsBySeller);

module.exports=router; // Exported router object