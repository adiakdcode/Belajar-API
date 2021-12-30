<?php
include "koneksi.php";
header("Content-type:application/json");
header("Access-Control-Allow-Origin: *");
$sql="SELECT pricelist_id, mobil_id, harga_i, harga_ii, harga_iii, harga_iv FROM pricelist group by pricelist_id order by (mobil_id) desc limit 10";
$result = mysqli_query($db, $sql) or die("Error " . mysqli_error($db));
while ($row = mysqli_fetch_assoc($result)){
    $mahasiswa[] = $row;
}
echo json_encode($mahasiswa, JSON_PRETTY_PRINT);
mysqli_close($db);
?>