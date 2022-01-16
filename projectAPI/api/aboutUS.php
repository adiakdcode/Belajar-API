<?php
include "koneksi.php";
header("Content-type:application/json");
header("Access-Control-Allow-Origin: *");
$sql="SELECT about_id, nama_usaha, tentang_kami, alamat, kontakWA, kontakEmail, linkMaps FROM about_us order by about_id desc limit 1";
$result = mysqli_query($db, $sql) or die("Error " . mysqli_error($db));
while ($row = mysqli_fetch_assoc($result)){
    $about_us[] = $row;
}
echo json_encode($about_us, JSON_PRETTY_PRINT);
mysqli_close($db);
?>