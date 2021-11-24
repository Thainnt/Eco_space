const db = require("./db");

const getAllFreeProducts = () => {
  return db.query(`SELECT * FROM products WHERE is_paid=false;`);
};

const getFreeProductsByCategory = (category_id) => {
  return db.query(`SELECT * FROM products WHERE category_id = $1;`, [
    `${category_id}`,
  ]);
};

const getFreeProductsBylocation = (location) => {
  return db.query(`SELECT * FROM products WHERE location LIKE $1;`, [
    `${location}`,
  ]);
};

const getCategories = () => {
  return db.query(`SELECT * FROM categories;`);
};

const getSingleProduct = (id) => {
  return db
    .query(`SELECT * FROM products WHERE ID=$1;`,[`${id}`]);
}

const addNewItem = (item) => {
  return db
    .query(
      `INSERT INTO products (name, quantity, description, image_url, seller_id, category_id, location, is_sold, is_paid, amount)
          VALUES ($1, $2, $3, $4, $5, $6, $7, false, false, null) RETURNING *;`,
          [`${item.name}`, `${item.quantity}`, `${item.description}`, `${item.image_url}`, `${item.seller_id}`, `${item.category_id}`, `${item.location}`]
    ).then(res => {
      if(res.rows.length) {
        return res.rows[0];
      }
    });
};

module.exports = {
  getAllFreeProducts,
  getFreeProductsByCategory,
  getFreeProductsBylocation,
  getCategories,
  getSingleProduct,
  addNewItem
};