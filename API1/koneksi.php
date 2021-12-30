<?php
function getconnection()
{
    $conn=new mysqli("localhost","root","","db_mahasiswa");
    if($conn->connect_error){
        $conn=null;
    }
    return $conn;
}
?>