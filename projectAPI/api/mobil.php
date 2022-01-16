<?php
include "koneksi.php";
header("Content-type:application/json");
header("Access-Control-Allow-Origin: *");
$sql="SELECT mobil_id, nama_mobil, type_mobil, tahun, seating_capacity, 
ac, air_bag, audio, kapasitas_mesin, harga_sewa, mobil_image FROM mobil group by mobil_id order by (mobil_id) asc limit 8";
$result = mysqli_query($db, $sql) or die("Error " . mysqli_error($db));
while ($row = mysqli_fetch_assoc($result)){
    $mobil[] = $row;
}
echo json_encode($mobil, JSON_PRETTY_PRINT);
mysqli_close($db);
?>