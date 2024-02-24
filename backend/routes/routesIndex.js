const { Router } = require("express");
const getAllProducts = require("../controllers/getAllProducts");
const getProductByName = require("../controllers/getProductByName");
const postProduct = require("../controllers/postProduct");
const getProductsById = require("../controllers/getProductsById");
const updateProduct = require("../controllers/updateProducts");
const postUser = require("../controllers/postUser");

const router = Router();

router.get("/", getAllProducts);
router.get("/product/name/:name", getProductByName);
router.get("/product/id/:id", getProductsById);
router.post("/product/", postProduct);
router.put("/product/:id", updateProduct);
router.post("/users", postUser);

module.exports = router;
