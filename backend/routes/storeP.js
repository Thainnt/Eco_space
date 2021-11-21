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
    res.send({ products: products });
  });
});

//products/:id (GET)
router.get("products/:id", (req, res) => {
  console.log(req);
  const prod_id = req.params.id;
  storePQueries.getSingleStoreProduct(prod_id).then((response) => {
    console.log(response);
    if (response.rows.length === 0) {
      return res.status(404).send({
        status: "error",
        message: `Product not found with the ${prod_id}`,
      });
    }
    res.send({ product: response.rows[0] });
  });
});
//products (POST, creat new post)
router.post("/new", (req, res) => {
  const Pname = req.body.name;
  const quantity = req.body.quantity;
  const description = req.body.description;
  const image_url = req.body.image_url;
  // const seller_id = req.
  // const category_id = req.
  const is_sold = false;
  let is_paid = false;
  let amount = req.body.amount;
  let product = {
    Pname,
    quantity,
    description,
    image_url,
    // seller_id,
    // category_id,
    is_sold,
    is_paid,
    amount,
  };

  if (req.body.is_paid) {
    is_paid = req.body.is_paid;
    amount = req.body.amount;
  }

  productQueries
    .addProduct(product)
    .then((response) => {
      const newProduct = response.rows[0];

      res.send({ ...newProduct });
    })
    .catch((error) => {
      console.log("failed to added user", error);
      res.status(400).send("can not add user");
    });
});

//products/:id/edit -> frontend
//products/:id (PUT/PATCH) -> UPDATING A SINGLE POST
//products/:id (DELETE)  -> DELETE A SINGLE POST

module.exports = router;
