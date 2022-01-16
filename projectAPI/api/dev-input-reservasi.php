<?php
$conn = mysqli_connect("localhost", "root", "" , "rentalmobil");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully  ";

header("Content-type:application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Credentials: true ");

$no_hp =$_POST['no_hp']; 
$nama =$_POST['nama'];
$email =$_POST['email'];
$subject =$_POST['subject'];
$pesan =$_POST['pesan'];

$sql="INSERT INTO reservasi (no_hp, nama, email, subject, pesan) VALUES ('$no_hp', '$nama','$email','$subject','$pesan')";

if (mysqli_query($conn, $sql)) {
    echo "Data berhasil disimpan";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>