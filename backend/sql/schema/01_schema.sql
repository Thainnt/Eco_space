DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name varchar,
  email varchar,
  password varchar,
  created_At timestamp,
  is_admin boolean
);

DROP TABLE IF EXISTS product_freecycles CASCADE;
CREATE TABLE product_freecycles (
  id SERIAL PRIMARY KEY,
  name varchar,
  quantity int,
  description varchar,
  image_url varchar,
  created_At timestamp,
  seller_id int,
  category_id int,
  location varchar,
  is_sold boolean
);

DROP TABLE IF EXISTS categories CASCADE;
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name varchar
);

DROP TABLE IF EXISTS product_paidcycles CASCADE;
CREATE TABLE product_paidcycles (
  id SERIAL PRIMARY KEY,
  name varchar,
  quantity int,
  description varchar,
  price int,
  image_url varchar,
  created_At timestamp,
  seller_id int,
  category_id int,
  location varchar,
  is_sold boolean
);

DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id int,
  product_id int
);

DROP TABLE IF EXISTS contact CASCADE;
CREATE TABLE contact (
  id SERIAL PRIMARY KEY,
  name varchar,
  email varchar,
  phone_number int,
  description varchar
);

ALTER TABLE orders ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE orders ADD FOREIGN KEY (product_id) REFERENCES product_paidcycles (id);

ALTER TABLE product_paidcycles ADD FOREIGN KEY (seller_id) REFERENCES users (id);

ALTER TABLE categories ADD FOREIGN KEY (id) REFERENCES product_freecycles (category_id);

ALTER TABLE product_freecycles ADD FOREIGN KEY (seller_id) REFERENCES users (id);
