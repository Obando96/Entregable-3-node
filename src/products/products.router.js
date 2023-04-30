const router = require('express').Router();
const productServices = require("./products.services");

router.route("/")
    .get(productServices.getAllProducts)
    .post(productServices.productNewProducts);

router.route("/:id")
    .get(productServices.getProductsById)
    .patch(productServices.patchProduct)
    .delete(productServices.deleteProduct);



module.exports = router