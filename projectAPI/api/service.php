<?php
include "koneksi.php";
header("Content-type:application/json");
header("Access-Control-Allow-Origin: *");
$sql="SELECT id, service_name, deskripsi, icon FROM service group by id order by (id) asc limit 4";
$result = mysqli_query($db, $sql) or die("Error " . mysqli_error($db));
while ($row = mysqli_fetch_assoc($result)){
    $mobil[] = $row;
}
echo json_encode($mobil, JSON_PRETTY_PRINT);
mysqli_close($db);
?>