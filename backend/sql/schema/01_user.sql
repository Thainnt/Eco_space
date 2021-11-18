DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name varchar,
  email varchar,
  password varchar,
  created_At timestamp,
  is_admin boolean
);











