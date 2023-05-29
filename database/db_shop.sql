-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2023 at 07:29 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_shop`
--
CREATE DATABASE IF NOT EXISTS `db_shop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_shop`;

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `quantity` int(11) NOT NULL,
  `user_id` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cart_id` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`quantity`, `user_id`, `product_id`, `cart_id`) VALUES
(2, 'U0001', 'P0001', 'K0001'),
(5, 'U0001', 'P0002', 'K0002'),
(1, 'U0002', 'P0001', 'K0003'),
(4, 'U0003', 'P0003', 'K0004'),
(5, 'U0003', 'P0004', 'K0005'),
(2, 'U0004', 'P0003', 'K0006'),
(1, 'U0004', 'P0004', 'K0007'),
(3, 'U0005', 'P0004', 'K0008'),
(6, 'U0005', 'P0003', 'K0009'),
(1, 'U0006', 'P0003', 'K0010'),
(3, 'U0006', 'P0004', 'K0011'),
(8, 'U0007', 'P0005', 'K0012'),
(2, 'U0007', 'P0007', 'K0013'),
(4, 'U0007', 'P0006', 'K0014'),
(1, 'U0007', 'P0008', 'K0015'),
(4, 'U0008', 'P0008', 'K0016');

-- --------------------------------------------------------

--
-- Table structure for table `developers`
--

CREATE TABLE `developers` (
  `developer_id` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `balance` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `developers`
--

INSERT INTO `developers` (`developer_id`, `username`, `password`, `email`, `full_name`, `display_name`, `status`, `balance`) VALUES
('D0001', 'feb', '$2b$10$2NybL9JH2WOQgK/mR.eExOhHY61su06vt5BQ1.cf/tHdOgdhbVnFG', 'febrian@gmail.com', 'Febrian Alexandro', 'Febrian', 1, 0),
('D0002', 'flp', '$2b$10$2NybL9JH2WOQgK/mR.eExOhHY61su06vt5BQ1.cf/tHdOgdhbVnFG', 'felicia@gmail.com', 'Felicia Pangestu', 'Felicia', 1, 0),
('D0003', 'van', '$2b$10$2NybL9JH2WOQgK/mR.eExOhHY61su06vt5BQ1.cf/tHdOgdhbVnFG', 'ivan@gmail.com', 'Ivan Susanto', 'Ivan', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `invoice` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `total` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 3,
  `user_id` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bank` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `va_number` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `order_id` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `developer_id` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `description`, `price`, `stock`, `status`, `developer_id`, `image`) VALUES
('P0001', 'Adidas POD 1923', 'Sepatu adidas dengan model yang modernn edisi 1923', 1990000, 28, 1, 'D0001', '1684061868483-165153553.png'),
('P0002', 'Nike Air Force 1 Tosca', 'Sepatu nike air force 1 yang dibalut warna hijau tosca yang segar', 2100000, 35, 1, 'D0001', '1684061872403-279811629.png'),
('P0003', 'Iphone 14 Pro Max', 'Iphone edisi terbaru yang ada di bumi tahun 2022 yang sangat menawan', 23999999, 12, 1, 'D0002', '1684061876135-860218727.png'),
('P0004', 'Samsung S23 Mini', 'Hp mini kelas menawan keluaran samsung dari korea selatan yang lucu', 16789000, 14, 1, 'D0002', '1684061879720-183346356.png'),
('P0005', 'Vivo Air Book 5', 'Laptop dengan kedap suara dan kedap air keluaran vivo', 11200000, 11, 1, 'D0003', '1684061882963-319971757.png'),
('P0006', 'ROG Strix', 'Laptop keluaran asus stuf gaming dengan kipas helikopter terbaru 2023', 13900000, 9, 1, 'D0003', '1684061886348-571905485.png'),
('P0007', 'MSi Katana', 'Laptop keluaran MSi dengan spek terbagus dan terbaik MSi', 11234567, 22, 1, 'D0003', '1684061890178-96883161.png'),
('P0008', 'Apple Mac Book', 'Laptop teringan dan termahal yang ada di dunia keluaran Apple', 23999999, 31, 1, 'D0003', '1684061894223-14073555.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `customer_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `developer_id` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `status`, `customer_id`, `developer_id`) VALUES
('U0001', 1, 'hehe1', 'D0001'),
('U0002', 1, 'hehe2', 'D0001'),
('U0003', 1, 'wkwk1', 'D0002'),
('U0004', 1, 'wkwk2', 'D0002'),
('U0005', 1, 'wkwk3', 'D0002'),
('U0006', 1, 'wkwk4', 'D0002'),
('U0007', 1, 'lmao1', 'D0003'),
('U0008', 1, 'lmao2', 'D0003');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('1bd054f2-6164-429b-a164-00e056b86947', 'c20aaa51b8d20195d0058848a54bbad53dd9a5292ac7b232b440dbb7b969f20d', '2023-05-29 05:28:20.807', '20230518071944_ganti_nama_va_order', NULL, NULL, '2023-05-29 05:28:20.801', 1),
('2487013f-b70d-489b-9e53-dfa5cfb76577', 'b16ca6501b6e3a86c8ef017e761cb380c6128d61c52247182d17025b3df1fefd', '2023-05-29 05:28:20.819', '20230519022529_tambah_saldo_developer', NULL, NULL, '2023-05-29 05:28:20.812', 1),
('258f1ee7-2a82-4136-8b83-4009c8a022f6', '43b53663025146da9912ceed0ef75392c9876da216dc0cd4353351bd8a5c5729', '2023-05-29 05:28:20.608', '20230509082533_init', NULL, NULL, '2023-05-29 05:28:20.454', 1),
('7abd6fb0-1218-42d0-a466-4608af74b871', 'f2c0fa5489143c7f5c8de51ca994cb1b53bb6e92d4aea2f24fe170898b0c93f3', '2023-05-29 05:28:20.753', '20230511150307_hilangin_api_key', NULL, NULL, '2023-05-29 05:28:20.745', 1),
('9ad843a8-5bc4-4ae2-8560-c85bda9aa4af', '3e6db100d2223f0c17df491102ec3559493ed6ad255029b2b7ba6132ceddc539', '2023-05-29 05:28:20.708', '20230510025237_update_status', NULL, NULL, '2023-05-29 05:28:20.625', 1),
('afa3caa4-f175-443a-b6c9-3109b762027b', 'a77f901358356fb0b8469a868ca439500f89443ec4360a05af61eb4ae15715b2', '2023-05-29 05:28:20.783', '20230515020034_update_cart_id', NULL, NULL, '2023-05-29 05:28:20.770', 1),
('b915e1c9-c946-4e60-8fba-ed094451089c', '4df4bcaef683f3fb7e51fa652b6b4e7e2bd2cdb87683221c1bfbd3c69a0a2bb6', '2023-05-29 05:28:20.796', '20230518071632_tambah_bank_va_order', NULL, NULL, '2023-05-29 05:28:20.788', 1),
('df65a20b-127f-46d7-9a37-904d2ddf3b63', '3f0e4d53a9daef72d5f7e867a7d828458d209f35fd6fa21661e0868a82b4cab9', '2023-05-29 05:28:20.620', '20230510020633_update_users', NULL, NULL, '2023-05-29 05:28:20.613', 1),
('e766e8c4-bcef-44d7-8328-cfa94e5c139e', 'c064a15ffe442c1637a17387f5a84062bd6959d65509654a502054f8c05acc42', '2023-05-29 05:28:20.740', '20230510032439_update_foreignkey_users', NULL, NULL, '2023-05-29 05:28:20.713', 1),
('e7ad315c-1ef7-47f4-8bd1-a4925961e82b', '325a618697262e9b08ae8c46e380bdf4f6cfd9b3037a548a13526d5857eeeb2d', '2023-05-29 05:28:20.766', '20230512043434_tambah_image_product', NULL, NULL, '2023-05-29 05:28:20.758', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `developers`
--
ALTER TABLE `developers`
  ADD PRIMARY KEY (`developer_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `developer_id` (`developer_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `developer_id` (`developer_id`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`developer_id`) REFERENCES `developers` (`developer_id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`developer_id`) REFERENCES `developers` (`developer_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
