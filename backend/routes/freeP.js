const express = require("express");
const router = express.Router();
const productQueries = require("../db/products.queries");
const freePQueries = require("../db/free-products.queries");
// const { response } = require("express");

//api/freecycle/

router.get("/items", (req, res) => {
  const user_id = req.session.user_id;
  console.log({ user_id });
  freePQueries
    .getAllProducts()
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

router.get("/categories/:id", (req, res) => {
  const category_id = req.params.id;
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

router.post("/products", (req,response) => {
  const item = {
    name: req.body.name,
    quantity: req.body.quantity,
    description: req.body.description,
    image_url: req.body.image_url,
    seller_id: req.body.seller_id,
    category_id: req.body.category_id,
    location: req.body.location
  };
  freePQueries.addNewItem(item)
    .then(res => {
      console.log('success add:',res);
      response.send({status: 200, message: "added new item"});
    })
    .catch(err => {
      console.log(err);
    })
});

//delete item
router.delete("/items/:id", (req,response) => {
  const id = req.params.id;
 productQueries.deleteProduct(id)
  .then(res => {
    response.send({status: 200, message: "item deleted"});
  }).catch(err => {
    console.log(err)
  })
});

module.exports = router;