const express = require("express");
const router = express.Router();
const storePQueries = require("../db/store-product-queries");
const productQueries = require("../db/products.queries");
const { response } = require("express");

//api/store/
//             products (home page, render all products) (GET)
router.get("/products", (req, res) => {
  storePQueries.getAllStoreProduct().then((response) => {
    const products = response.rows;
    res.send({ products: products });
  });
});

//products/:id (GET)
router.get("/products/:id", (req, res) => {
  const prod_id = req.params.id;
  storePQueries.getSingleStoreProduct(prod_id).then((response) => {
    // console.log(response);
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
  console.log(req);
  const name = req.body.name;
  const quantity = req.body.quantity;
  const description = req.body.description;
  const image_url = req.body.image_url;
  const seller_id = req.body.seller_id;
  const category_id = req.body.category_id;
  const is_sold = req.body.is_sold;
  let is_paid = req.body.is_paid;
  let amount = req.body.amount;
  let product = {
    name,
    quantity,
    description,
    image_url,
    seller_id,
    category_id,
    is_sold,
    is_paid,
    amount,
  };

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

router.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("this===>", req);
  productQueries
    .updateProductAsSold(id)
    .then((response) => {
      console.log("response", response);
      res.status(200).send(`product modified with id: ${id}`);
    })
    .catch((error) => {
      res.status(400).send("can not alter product");
    });
});

router.delete("/products/:id", (req, res) => {
  console.log("delete", req);
  const id = parseInt(req.params.id);
  productQueries
    .deleteProduct(id)
    .then((response) => {
      res.status(200).send(`Product deleted with id: ${id}`);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

module.exports = router;
