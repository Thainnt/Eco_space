const db = require("./db");

const getAllUsers = () => {
  return db.query(`SELECT * FROM users;`);
};
const addUser = (user) => {
  return db
    .query(
      `INSERT INTO users(name, email, password)
                    VALUES($1,$2,$3) RETURNING *;`,
      [`${user.name}`, `${user.email}`, `${user.password}`]
    )
    .then((response) => {
      if (response.rows.length) {
        return response.rows[0];
      }
    });
};

const getUserByEmail = (email) => {
  return db.query(`SELECT * FROM users WHERE email=$1;`, [`${email}`]);
};

const getUserById = (id) => {
  return db.query(`SELECT * FROM users WHERE id=$1;`, [`${id}`]);
};

module.exports = {
  addUser,
  getUserByEmail,
  getUserById,
  getAllUsers,
};
