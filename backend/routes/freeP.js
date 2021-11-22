const express = require("express");
const router = express.Router();
const productQueries = require("../db/products.queries");
const freePQueries = require("../db/free-products.queries");
// const { response } = require("express");

//api/freecycle/

router.get("/products", (req, res) => {
  const user_id = req.session.user_id;
  console.log({ user_id });
  freePQueries
    .getAllFreeProducts()
    .then((response) => {
      const products = response.rows;
      res.send({ products: products });
    })
    .catch((error) => {
      res.status(400).send({
        message: "Failed to get products",
      });
    });
});

//products/:id (GET)
router.get("/products/:id", (req, res) => {
  const prod_id = req.params.id;
  freePQueries.getSingleProduct(prod_id).then((response) => {
    if (response.rows.length === 0) {
      return res.status(404).send({
        status: "error",
        message: `Product not found with the ${prod_id}`,
      });
    }
    res.send({ product: response.rows[0] });
  });
});

router.get("/category", (req, res) => {
  const category_id = req.body.id;
  freePQueries
    .getFreeProductsByCategory(category_id)
    .then((response) => {
      const products = response.rows;
      res.send({ products: products });
    })
    .catch((error) => {
      res.status(400).send({
        message: "Failed to get products",
      });
    });
});

router.get("/location", (req, res) => {
  const location = req.body.location;
  freePQueries
    .getFreeProductsBylocation(location)
    .then((response) => {
      const products = response.rows;
      res.send({ products: products });
    })
    .catch((error) => {
      res.status(400).send({
        message: "Failed to get products",
      });
    });
});

router.get("/categories", (req, res) => {
  freePQueries.getCategories().then((response) => {
    console.log(response.rows);
    const categories = response.rows;
    res.send({ categories: categories });
  });
});

module.exports = router;
