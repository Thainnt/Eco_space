DROP TABLE IF EXISTS product_freecycles CASCADE;

CREATE TABLE product_freecycles (
  id SERIAL PRIMARY KEY,
  name varchar,
  quantity INTEGER,
  description varchar,
  image_url varchar,
  created_At timestamp,
  seller_id INTEGER,
  category_id INTEGER,
  location varchar,
  is_sold boolean
);