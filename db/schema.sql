DROP DATABASE IF EXISTS i_support_dev;

CREATE DATABASE i_support_dev;

\c i_support_dev;

CREATE TABLE support_groups (
  id SERIAL PRIMARY KEY,
  group_name TEXT NOT NULL,
  meeting_time INT,
  location VARCHAR(50),
  description TEXT,
  email TEXT,
  is_favorite BOOLEAN
);