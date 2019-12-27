-- Drop the database if it already exists to start fresh.
DROP DATABASE IF EXISTS burgers_db;

-- Create the database
CREATE DATABASE burgers_db;

-- Switch to the database just created.
USE burgers_db;

-- Create the table with 3 columns for the id, burger name, and whether or not it's been devoured.
CREATE TABLE burgers (
id INT PRIMARY KEY AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL UNIQUE,
devoured BOOLEAN DEFAULT FALSE);