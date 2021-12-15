<?php
$server = "localhost";
$username = "root";
$password = "";
$database = "db_mahasiswa";

$db=mysqli_connect($server, $username, $password, $database);
if ($db){
    echo "Data berhasil dimuat..";
}
else {
    echo "Data Base Error";
}
?>