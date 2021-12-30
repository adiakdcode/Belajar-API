<?php
include_once("include.php");
$conn=getconnection();
if($conn==null){
    sendResponse(404, $conn, 'Server Hidup'); 
}
else
{
    $sql="SELECT * FROM  mahasiswa";
    $result=$conn->query($sql);
    if ($result->num_rows > 0){
        $users=array();
        while($row=$result->fetch_assoc()){
               $user=array(
                   "nim"=>$row['nim'],
                   "nama_mahasiswa"=>$row['nama_mahasiswa'],
                   "angkatan"=>$row['angkatan'],

                   
               );
               array_push($users,$user);
            }
        sendResponse(300, $users, 'Data Mahasiswa');
    }
    else{
        sendResponse(500, [], 'Belum ada data' );

    }
    $conn->close();
}
 