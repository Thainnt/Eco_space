const express = require("express");
const router = express.Router();
const storePQueries = require("../db/store-product-queries");
const productQueries = require("../db/products.queries");

//api/store/
//             products (home page, render all products) (GET)
router.get("/products", (req, res) => {
  storePQueries.getAllStoreProduct().then((response) => {
    const products = response.rows;
    console.log(products);
    res.json(products);
  });
});

//products/:id (GET)
router.get("products/:id", (req, res) => {
  console.log(req);
  const prod_id = req.params.id;
  storePQueries.getSingleStoreProduct(prod_id).then((response) => {
    console.log(response);
    if (response.rows.length === 0) {
      return res.status(404).send({ status: 'error', message: `Product not found with the ${prod_id}`})
    }
    res.send({ product: response.rows[0] })
  });
});
//products (POST, creat new post)
router.post("/new", (req, res) => {});
//products/:id/edit -> frontend
//products/:id (PUT/PATCH) -> UPDATING A SINGLE POST
//products/:id (DELETE)  -> DELETE A SINGLE POST



module.exports = router;
