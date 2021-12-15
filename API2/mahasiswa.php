<?php
include "koneksi.php";
header("Content-type:application/json");
$sql="SELECT nim, nama_mahasiswa, angkatan FROM mahasiswa group by nama_mahasiswa order by (nim) desc limit 10";
$result = mysqli_query($db, $sql) or die("Error " . mysqli_error($db));

while ($row = mysqli_fetch_assoc($result)){
    $mahasiswa[] = $row;
}
echo json_encode($mahasiswa, JSON_PRETTY_PRINT);
mysqli_close($db);
?>