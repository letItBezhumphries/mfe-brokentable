-- CREATE USER 'brokentable'@'%' IDENTIFIED BY 'password';
-- GRANT SELECT,INSERT,UPDATE,DELETE,DROP ON restaurant_details.* TO 'brokentable'@'%';

CREATE DATABASE IF NOT EXISTS restaurant_details;

USE restaurant_details;

CREATE TABLE IF NOT EXISTS restaurants (
      ID VARCHAR(10) CHARACTER SET utf8,
      name VARCHAR(41) CHARACTER SET utf8,
      description VARCHAR(1768) CHARACTER SET utf8,
      menuOne VARCHAR(795) CHARACTER SET utf8,
      menuTwo VARCHAR(693) CHARACTER SET utf8,
      menuThree VARCHAR(1413) CHARACTER SET utf8,
      menuFour VARCHAR(626) CHARACTER SET utf8,
      menuFive VARCHAR(913) CHARACTER SET utf8,
      cross_street VARCHAR(19) CHARACTER SET utf8,
      neighborhood VARCHAR(17) CHARACTER SET utf8,
      hours VARCHAR(222) CHARACTER SET utf8,
      cuisine VARCHAR(30) CHARACTER SET utf8,
      style VARCHAR(14) CHARACTER SET utf8,
      dress VARCHAR(16) CHARACTER SET utf8,
      parking VARCHAR(299) CHARACTER SET utf8,
      transit VARCHAR(210) CHARACTER SET utf8,
      payment VARCHAR(65) CHARACTER SET utf8,
      chef VARCHAR(25) CHARACTER SET utf8,
      details VARCHAR(95) CHARACTER SET utf8,
      url VARCHAR(42) CHARACTER SET utf8,
      phone VARCHAR(14) CHARACTER SET utf8,
      parties VARCHAR(255) CHARACTER SET utf8,
      party_contact VARCHAR(33) CHARACTER SET utf8,
      special VARCHAR(229) CHARACTER SET utf8);

-- CREATE TABLE IF NOT EXISTS restaurants (
--       ID VARCHAR(10) CHARACTER SET utf8mb4,
--       name VARCHAR(41) CHARACTER SET utf8mb4,
--       description VARCHAR(1768) CHARACTER SET utf8mb4,
--       menuOne VARCHAR(795) CHARACTER SET utf8mb4,
--       menuTwo VARCHAR(693) CHARACTER SET utf8mb4,
--       menuThree VARCHAR(1413) CHARACTER SET utf8mb4,
--       menuFour VARCHAR(626) CHARACTER SET utf8mb4,
--       menuFive VARCHAR(913) CHARACTER SET utf8mb4,
--       cross_street VARCHAR(19) CHARACTER SET utf8mb4,
--       neighborhood VARCHAR(17) CHARACTER SET utf8mb4,
--       hours VARCHAR(222) CHARACTER SET utf8mb4,
--       cuisine VARCHAR(30) CHARACTER SET utf8mb4,
--       style VARCHAR(14) CHARACTER SET utf8mb4,
--       dress VARCHAR(16) CHARACTER SET utf8mb4,
--       parking VARCHAR(299) CHARACTER SET utf8mb4,
--       transit VARCHAR(210) CHARACTER SET utf8mb4,
--       payment VARCHAR(65) CHARACTER SET utf8mb4,
--       chef VARCHAR(25) CHARACTER SET utf8mb4,
--       details VARCHAR(95) CHARACTER SET utf8mb4,
--       url VARCHAR(42) CHARACTER SET utf8mb4,
--       phone VARCHAR(14) CHARACTER SET utf8mb4,
--       parties VARCHAR(255) CHARACTER SET utf8mb4,
--       party_contact VARCHAR(33) CHARACTER SET utf8mb4,
--       special VARCHAR(229) CHARACTER SET utf8mb4);