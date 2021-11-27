const db = require("./db");

const getAllProducts = () => {
  return db.query(`SELECT * FROM products;`);
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
      `INSERT INTO products (name, quantity, description, image_url, seller_id, category_id, location, created_at, is_sold, is_paid, amount)
          VALUES ($1, $2, $3, $4, $5, $6, $7, LOCALTIMESTAMP, false, false, null) RETURNING *;`,
          [`${item.name}`, `${item.quantity}`, `${item.description}`, `${item.image_url}`, `${item.seller_id}`, `${item.category_id}`, `${item.location}`]
    ).then(res => {
      if(res.rows.length) {
        return res.rows[0];
      }
    });
};

const editItem = (item) => {
  return db
    .query(
      `UPDATE products SET (name, quantity, description, image_url) = ($1, $2, $3, $4) WHERE id= $5 RETURNING *;`,[`${item.name}`, `${item.quantity}`, `${item.description}`, `${item.image_url}`, `${item.id}`]
    ).then(res =>{
      console.log(res);
      // if(res.rows.length) {
      //   return res.row[0];
      // }
    });
};

module.exports = {
  getAllProducts,
  getFreeProductsByCategory,
  getFreeProductsBylocation,
  getCategories,
  getSingleProduct,
  addNewItem,
  editItem
};