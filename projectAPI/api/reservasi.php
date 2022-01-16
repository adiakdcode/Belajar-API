<?php
include "koneksi.php";
header("Content-type:application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$sql="SELECT id_reservasi, nama, email, subject, pesan FROM reservasi group by id_reservasi order by (id_reservasi) asc limit 8";
$result = mysqli_query($db, $sql) or die("Error " . mysqli_error($db));
while ($row = mysqli_fetch_assoc($result)){
    $mobil[] = $row;
}
echo json_encode($mobil, JSON_PRETTY_PRINT);
mysqli_close($db);
?>