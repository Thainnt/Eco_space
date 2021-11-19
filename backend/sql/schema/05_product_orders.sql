DROP TABLE IF EXISTS product_orders CASCADE;


CREATE TABLE product_orders (
  id SERIAL PRIMARY KEY,
  product_id integer REFERENCES products(id) ON DELETE CASCADE DEFAULT NULL,
  date_time timestamp,
  buyer_id integer REFERENCES users(id) ON DELETE CASCADE DEFAULT NULL
  
);