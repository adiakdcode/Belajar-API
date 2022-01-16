//Service Work
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(function() {
          console.log("ServiceWorker OK");
        })
        .catch(function() {
          console.log("ServiceWorker Down");
        });
    });
} else {
    console.log("Sepertinya... ServiceWorker tidak didukung oleh browser ini.");
}
//under dev------------------------------------------------------------------//
function kritik(){
  Komentor = document.getElementById("nama").value;
  if (Komentor == "" ||!Komentor){
    swal("Opps..", "Isi Nama dulu dong!");
  }else{
    Komentor = document.getElementById("nama").value;
    email = document.getElementById("email").value;
    Kritik = document.getElementById("Kritik").value;
    firebase.database().ref('Kritik_Saran/'+Komentor).set({
      Nama: Komentor,
      Alamat_Email: email,
      Kritik_Saran: Kritik
    });
    swal("Arigatou", "Kritik & Saran Kamu, sudah berhasil direcord!"); 
  }
};
  