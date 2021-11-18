DROP TABLE IF EXISTS contact CASCADE;
CREATE TABLE contact (
  id SERIAL PRIMARY KEY,
  name varchar,
  email varchar,
  phone_number int,
  description varchar
);