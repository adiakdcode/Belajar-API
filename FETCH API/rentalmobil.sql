-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 30 Des 2021 pada 09.37
-- Versi server: 10.1.39-MariaDB
-- Versi PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rentalmobil`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `mobil`
--

CREATE TABLE `mobil` (
  `mobil_id` varchar(30) NOT NULL,
  `nama_mobil` varchar(100) NOT NULL,
  `type_mobil` text NOT NULL,
  `harga_sewa` varchar(100) NOT NULL,
  `mobil_image` text NOT NULL,
  `spesifikasi` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `mobil`
--

INSERT INTO `mobil` (`mobil_id`, `nama_mobil`, `type_mobil`, `harga_sewa`, `mobil_image`, `spesifikasi`) VALUES
('AVANZA 1.3 E STD M/T', 'AVAZA', 'MPV', '300.000', '', ''),
('Inova Reborn 1', 'Inova Reborn', 'MPV', '300.000', '', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pricelist`
--

CREATE TABLE `pricelist` (
  `pricelist_id` varchar(20) NOT NULL,
  `mobil_id` varchar(30) DEFAULT NULL,
  `harga_i` int(20) DEFAULT NULL,
  `harga_ii` int(20) DEFAULT NULL,
  `harga_iii` int(20) DEFAULT NULL,
  `harga_iv` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `pricelist`
--

INSERT INTO `pricelist` (`pricelist_id`, `mobil_id`, `harga_i`, `harga_ii`, `harga_iii`, `harga_iv`) VALUES
('P1', 'AVANZA 1.3 E STD M/T', 200000, 400000, 600000, 800000),
('P2', 'Inova Reborn 1', 400000, 800000, 1000000, 1400000);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `mobil`
--
ALTER TABLE `mobil`
  ADD PRIMARY KEY (`mobil_id`);

--
-- Indeks untuk tabel `pricelist`
--
ALTER TABLE `pricelist`
  ADD PRIMARY KEY (`pricelist_id`),
  ADD KEY `mobil_id` (`mobil_id`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `pricelist`
--
ALTER TABLE `pricelist`
  ADD CONSTRAINT `pricelist_ibfk_1` FOREIGN KEY (`mobil_id`) REFERENCES `mobil` (`mobil_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
