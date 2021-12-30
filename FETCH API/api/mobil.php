<?php
include "koneksi.php";
header("Content-type:application/json");
header("Access-Control-Allow-Origin: *");
$sql="SELECT mobil_id, nama_mobil, type_mobil, harga_sewa FROM mobil group by mobil_id order by (harga_sewa) desc limit 10";
$result = mysqli_query($db, $sql) or die("Error " . mysqli_error($db));
while ($row = mysqli_fetch_assoc($result)){
    $mobil[] = $row;
}
echo json_encode($mobil, JSON_PRETTY_PRINT);
mysqli_close($db);
?>