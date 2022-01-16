-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 14 Jan 2022 pada 10.57
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
-- Struktur dari tabel `about_us`
--

CREATE TABLE `about_us` (
  `about_id` int(11) NOT NULL,
  `nama_usaha` varchar(20) NOT NULL,
  `tentang_kami` text NOT NULL,
  `kontakWA` varchar(20) NOT NULL,
  `kontakEmail` varchar(100) NOT NULL,
  `alamat` varchar(200) NOT NULL,
  `linkMaps` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `about_us`
--

INSERT INTO `about_us` (`about_id`, `nama_usaha`, `tentang_kami`, `kontakWA`, `kontakEmail`, `alamat`, `linkMaps`) VALUES
(1, 'C3 Trans.id', 'C3 Trans.id, menyediakan layanan rental mobil Jember yang sangat terjangkau dari segi harga. Jasa sewa mobil yang kami sediakan memiliki standar layanan yang selalu kami jaga demi mempertahankan kualitas untuk penyewa.', '+62 822-6418-8138', 'c3trans@rental.id', 'Gedung CC Lt. 3, Universitas Muhammadiyah Jember, Gumuk Kerang, Sumbersari, Kab. Jember', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.2869851490823!2d113.71477381487243!3d-8.173816194116847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695d3205f6a1b%3A0xf5ffd6637086ac0f!2sGedung%20CC%20Universitas%20Muhammadiyah%20Jember!5e0!3m2!1sid!2sid!4v1641818954955!5m2!1sid!2sid');

-- --------------------------------------------------------

--
-- Struktur dari tabel `mobil`
--

CREATE TABLE `mobil` (
  `mobil_id` varchar(30) NOT NULL,
  `nama_mobil` varchar(100) NOT NULL,
  `type_mobil` text NOT NULL,
  `tahun` int(5) NOT NULL,
  `seating_capacity` varchar(20) NOT NULL,
  `ac` varchar(20) NOT NULL,
  `air_bag` varchar(20) NOT NULL,
  `audio` varchar(20) NOT NULL,
  `kapasitas_mesin` varchar(100) NOT NULL,
  `transmission` varchar(30) NOT NULL,
  `dimension` varchar(20) NOT NULL,
  `harga_sewa` varchar(100) NOT NULL,
  `mobil_image` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `mobil`
--

INSERT INTO `mobil` (`mobil_id`, `nama_mobil`, `type_mobil`, `tahun`, `seating_capacity`, `ac`, `air_bag`, `audio`, `kapasitas_mesin`, `transmission`, `dimension`, `harga_sewa`, `mobil_image`) VALUES
('avanza2016', 'AVANZA 1.3 E STD M/T', 'MPV', 2021, '7', 'Double Blower', '2 Front', 'Yes 4 Channel', '1.300 cc', 'Matic 4-Speed / Manual 5-Speed', '4.190 x 1.660 x 1.69', '300.000', '/image/pict-mobil/avanza.png'),
('CamryMT', 'Cammry', 'Sedan', 2021, '', '', '', '', '', '', '', '350.000', '/image/pict-mobil/camry.png'),
('innova2021', 'KIJANG INNOVA 2.0 G M/T LUXURY', 'MPV', 2021, '', '', '', '', '', '', '', '300.000', '/image/pict-mobil/venturer.png'),
('rush2021', 'RUSH 1.5 G M/T', 'SUV', 2021, '6', 'Double Blower', '4', 'Yes 4 Channel', '1496 CC', 'Matic 4-Speed / Manual 5-Speed', '4.190 x 1.660 x 1.69', '250.000', '/image/pict-mobil/rush.png'),
('VelozMT', 'Veloz MT', 'MPV', 2022, '', '', '', '', '', '', '', '400.000', '/image/pict-mobil/veloz.png'),
('xpander', 'New Xpander', 'MPV', 2022, '', '', '', '', '', '', '', '250.000', '/image/pict-mobil/new-xpander.png');

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
('P1', 'CamryMT', 20000, 400, 600, 800),
('P2', 'xpander', 400000, 800000, 1000000, 1400000),
('Paket 3', 'CamryMT', 200000, 400000, 600000, 800),
('Paket 4', 'VelozMT', 150000, 300000, 450000, 600000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `reservasi`
--

CREATE TABLE `reservasi` (
  `no_hp` varchar(13) NOT NULL,
  `nama` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `subject` varchar(200) NOT NULL,
  `pesan` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `reservasi`
--

INSERT INTO `reservasi` (`no_hp`, `nama`, `email`, `subject`, `pesan`) VALUES
('082264188138', 'Adia Wahyu Dwi Prasetya', 'superadmin@app.com', 'Sewa Mobil Avanza', 'Sewa Mobil Avanza apakah bisa?');

-- --------------------------------------------------------

--
-- Struktur dari tabel `service`
--

CREATE TABLE `service` (
  `id` int(10) NOT NULL,
  `service_name` varchar(200) NOT NULL,
  `deskripsi` varchar(350) NOT NULL,
  `icon` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `service`
--

INSERT INTO `service` (`id`, `service_name`, `deskripsi`, `icon`) VALUES
(1, 'Support', 'Jangan ragu bertanya tentang rental mobil.\r\nDukungan penuh customer service kami yang siap melayani.', '/image/service/cs.png'),
(2, 'Sopir', 'Driver kami sudah terlatih dan profesional.\r\nBerpengalaman dalam menguasai jalan-jalan kota Jember.', '/image/service/driver.png'),
(3, 'Mobil', 'Kondisi mobil yang selalu kami jaga kebersihannya & dalam keadaan prima.\r\nService dilakukan secara berkala demi keselamatan.', '/image/service/car.png'),
(4, 'Harga', 'Mengutamakan support yang baik pada driver dan mobil.\r\nSemua layanan kami rangkum dalam harga rental yang kompetitif.', '/image/service/harga.png');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`about_id`);

--
-- Indeks untuk tabel `mobil`
--
ALTER TABLE `mobil`
  ADD PRIMARY KEY (`mobil_id`),
  ADD KEY `mobil_image` (`mobil_image`(767));

--
-- Indeks untuk tabel `pricelist`
--
ALTER TABLE `pricelist`
  ADD PRIMARY KEY (`pricelist_id`),
  ADD KEY `mobil_id` (`mobil_id`);

--
-- Indeks untuk tabel `reservasi`
--
ALTER TABLE `reservasi`
  ADD PRIMARY KEY (`no_hp`);

--
-- Indeks untuk tabel `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `about_us`
--
ALTER TABLE `about_us`
  MODIFY `about_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `service`
--
ALTER TABLE `service`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
