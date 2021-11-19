const db = require("./db");

const getAllStoreProduct = () => {
  return db
    .query(`SELECT * FROM products WHERE is_paid=true;`);
};

const getSingleStoreProduct = (id) => {
  return db
    .query(`SELECT * FROM products WHERE ID=$1;`,[`${id}`]);
}

const filterByPrice = (min, max, bool) => {
  const queryParams = [
    min,
    max,
    bool
  ];

  const queryString = `
  SELECT * FROM products
  WHERE amount <= $2 AND amount >= $1
  AND is_paid=$3
  ORDER BY amount DESC;`
  
  return db
    .query(queryString, queryParams)
}

module.exports = {
  getAllStoreProduct,
  getSingleStoreProduct,
  filterByPrice
}