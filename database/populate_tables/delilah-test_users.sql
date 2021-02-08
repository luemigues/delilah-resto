-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: delilah-test
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS users;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  fullname varchar(45) NOT NULL,
  email varchar(45) NOT NULL,
  address varchar(100) NOT NULL,
  phone varchar(15) DEFAULT NULL,
  username varchar(20) NOT NULL,
  `password` varchar(256) NOT NULL,
  is_admin tinyint(1) NOT NULL DEFAULT '0',
  is_active tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (id),
  UNIQUE KEY email (email),
  UNIQUE KEY username (username)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES users WRITE;
/*!40000 ALTER TABLE users DISABLE KEYS */;
INSERT INTO users (id, fullname, email, address, phone, username, password, is_admin, is_active) VALUES (1,'Alice Wonderland','alice@gmail.com','Montevideo 552','541168651253','alice','bde26f8b41458e9f07fb1efad0e03d1fc3b66bcb8e2e4af052680bd87926ef22cec0a376522f13052077c8cec283d1409c9165687c3dd09ae26fd061ac889a8d7c8e5b0518c25645c5145dca7a60dd5d30f7a2c0b56cf6ebb283804602a2bc9ba6348f33',0,1),(2,'Harry Potter','harrypotter@gmail.com','Libertador 431','5411235263','Harry123','f9e011c7fec8e24f30441ad48374c2f84ddbce25678217bd3dee7339dbeff368b6c953050bb05bef9973f070d878aa5adf477abc05634839e3522a635e69f8e8b24b6963581a7fd453ae5f55e725e904de5139b83717555810e1540a6193249abc852d03',1,1),(3,'Mickey Mouse','disney@gmail.com','Florida 120','54116552253','Mickey','4e1cc10b9e78a66ad392277ecba817e9d1996b98bcf9d2be1e0eea27f736a8928d047de6dd48df807ff0125f80030a1fe21fb580a998a0ba6b27ff7f789eecdc65ab67662816f3b8087e44f7a2b487a76a8f3d74eaeefc3789e0578907c224edf1d6fe48',0,1),(4,'Arnold Nickelodeon','nickelodeon@gmail.com','Brooklyn 333','54116846253','Arnold','1443b181f2a84bc3cdee6fb1f4a8d4db4f9d334cdd4ccb36f88562f944583b61a33dbdcd2fa6c84d385ee58ebf2ff22c67017fdca06f2b6cab1131645d1112347a045ca3e47ecb705f6b3a6f4d5591185472b1fd4a1d031d791054c09cb9142e9b1b051d',0,1);
/*!40000 ALTER TABLE users ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed
