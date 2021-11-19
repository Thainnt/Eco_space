const db = require("./db");

// queries from both the store and freecycle

const addProduct = (product) => {
  const queryString = `
  INSERT INTO products(
    name,
    quantity,
    description,
    image_url,
    seller_id,
    category_id,
    location,
    is_sold,
    is_paid,
    amount
    )
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
    RETURNING *;
    `;

  const values = [
    product.name,
    product.quantity,
    product.description,
    product.image_url,
    product.seller_id,
    product.category_id,
    product.location,
    product.is_sold,
    product.is_paid,
    product.amount,
  ];

  return db.query(queryString, values);
};

//delete product

const deleteProduct = (id) => {
  return db.query(`DELETE FROM products WHERE id=$1;`, [`${id}`]);
};

//update product as sold
const updateProductAsSold = (id) => {
  return db.query(
    `
    UPDATE products
    SET is_sold = NOT is_sold WHERE id = $1;`,
    [`${id}`]
  );
};

module.exports = {
  addProduct,
  deleteProduct,
  updateProductAsSold,
};
