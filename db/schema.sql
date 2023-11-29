DROP DATABASE IF EXISTS support_groups_dev;

CREATE DATABASE support_groups_dev;

\c support_groups_dev;

CREATE TABLE support_groups (
  id SERIAL PRIMARY KEY,
  group_name TEXT NOT NULL,
  meeting_time TEXT,
  location VARCHAR(50),
  description TEXT,
  email TEXT,
  is_favorite BOOLEAN,
  image TEXT
);