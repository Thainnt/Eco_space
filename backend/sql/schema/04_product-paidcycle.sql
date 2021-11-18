DROP TABLE IF EXISTS product_paidcycles CASCADE;
CREATE TABLE product_paidcycles (
  id SERIAL PRIMARY KEY,
  name varchar,
  quantity INTEGER,
  description varchar,
  price INTEGER,
  image_url varchar,
  created_At timestamp,
  seller_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  is_sold boolean
);