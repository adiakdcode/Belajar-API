document.querySelector('#inputReservasi').addEventListener('submit', e => {
    e.preventDefault();
    console.log("checking.. hello");
    let form = document.querySelector('#inputReservasi');
    const data = new URLSearchParams();
    for(const p of new FormData(form)){
        data.append(p[0],p[1]);
    }
    fetch('http://localhost/projectAPI/api/dev-input-reservasi.php',{
        method: 'POST',
        body: data
    }).then(Response => Response.text()).then(Response => {
        console.log(Response);
        Swal.fire("Data Kamu sudah terekam", "Silahkan menunggu Customer Care merespon dalam beberapa menit kedepan!", "success");
    }).catch(error => console.log(error));
       Swal.fire("Data Gagal dikirim ", "Server gagal meresponse", "error");
});

