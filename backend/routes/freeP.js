const express = require("express");
const router = express.Router();
const productQueries = require("../db/products.queries");
const freePQueries = require("../db/free-products.queries");


//api/freecycle/

router.get("/Fproducts", (req, res) => {
  freePQueries.getAllFreeProducts().then((response) => {
    const products = response.rows;
    res.send({ products: products });
  })
  .catch(error => {
    res.status(400).send({ 
      message: "Failed to get products"
    })
  })
})

router.get("/Fcategory", (req, res) => {
  const category_id = req.body.id
  freePQueries.getFreeProductsByCategory(category_id).then((response) => {
    const products = response.rows;
    res.send({ products: products });
  })
  .catch(error => {
    res.status(400).send({ 
      message: "Failed to get products"
    })
  })
})

router.get("/Flocation", (req, res) => {
  const location = req.body.location
  freePQueries.getFreeProductsBylocation(location).then((response) => {
    const products = response.rows;
    res.send({ products: products });
  })
  .catch(error => {
    res.status(400).send({ 
      message: "Failed to get products"
    })
  })
})

module.exports = router;