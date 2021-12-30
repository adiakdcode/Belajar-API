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
//System GO
function showElmt(){
  yourName = document.getElementById("inputName").value;
  if (yourName == "" || !yourName){
    swal("Opps..", "Isi Nama dulu dong!");
  }else if (yourName == yourName){
    document.getElementById("nama").innerHTML = "Halo.. " +yourName;
    document.getElementsByClassName("input-group")[0].hidden=true;
    document.getElementsByClassName("card")[0].hidden=false;   
    document.getElementsByClassName("output")[0].hidden=false; 
 
    firebase.database().ref('Nama_Pengguna/'+yourName).set({
     NameOfUser: yourName
    });        
  }
};
//Pakar
function pakar() {
  //----RULE--//
  const AI = ["GJ01","GJ02","GJ03","GJ04","GJ05","GJ06","GJ07","GJ08","GJ09","GJ10"];
  const CacarAyam = ["GJ10","GJ11","GJ12","GJ13"];
  const AE = ["GJ10","GJ14","GJ15"];
  const Tetelo = ["GJ06","GJ10","GJ13","GJ14","GJ16","GJ17","GJ18"];
  const CRD = ["GJ09","GJ13","GJ19"];
  const SNOT = ["GJ13","GJ18","GJ20"];
  const OM = ["GJ21","GJ22","GJ23"];
  //----//
  var totalAI = 0;
  var totalCA = 0;
  var totalAE = 0;
  var totalTT = 0;
  var totalCRD = 0;
  var totalSNOT = 0;
  var totalOM = 0;
  //----//
  let probability1 = document.getElementById('probabilitas1');
  let probability2 = document.getElementById('probabilitas2');
  let probability3 = document.getElementById('probabilitas3');
  let probability4 = document.getElementById('probabilitas4');
  let probability5 = document.getElementById('probabilitas5');
  let probability6 = document.getElementById('probabilitas6');
  let probability7 = document.getElementById('probabilitas7');
  //----------------------------------------------------------//
  
  var markedCheckbox = document.getElementsByClassName("form-check-input checkbox-1x");
  for (var checkbox of markedCheckbox) {
    if(checkbox.checked){
      if(AI.includes(checkbox.id)){
        //Bug 
        if(AI.includes(checkbox.id)) {
          if(checkbox.id && checkbox.checked) {
              totalAI += parseInt(checkbox.value)/100*100;
          }
          probability1.textContent = `Probabilitas : ${totalAI} %`;
          document.getElementById("probabilitas1").hidden=false;
        };   
        console.log("Flu Burung");
        document.getElementById("kesimpulan").hidden=false;
        document.getElementById("PE01").hidden=false;    
          
      }else if (CacarAyam.includes(checkbox.id)) {
        if(CacarAyam.includes(checkbox.id)) {
          if(checkbox.id && checkbox.checked) {
              totalCA += parseInt(checkbox.value)/40*100;
          }
          probability2.textContent = `Probabilitas : ${totalCA} %`;
          document.getElementById("probabilitas2").hidden=false;
        };
        console.log("Cacar Ayam");
        document.getElementById("kesimpulan").hidden=false;
        document.getElementById("PE02").hidden=false;    

      }else if (AE.includes(checkbox.id)) {
        if(AE.includes(checkbox.id)) {
          if(checkbox.id && checkbox.checked) {
              totalAE += parseInt(checkbox.value)/30*100;
          }
          probability3.textContent = `Probabilitas : ${totalAE} %`;
          document.getElementById("probabilitas3").hidden=false;
        };
        console.log("AVIAN ENCEPHALOMYELITIS");
        document.getElementById("kesimpulan").hidden=false;
        document.getElementById("PE03").hidden=false;    

      }else if (Tetelo.includes(checkbox.id)) {
        if(Tetelo.includes(checkbox.id)) {
          if(checkbox.id && checkbox.checked) {
              totalTT += parseInt(checkbox.value)/70*100;
          }
          probability4.textContent = `Probabilitas : ${totalTT} %`;
          document.getElementById("probabilitas4").hidden=false;
        };
        console.log("Tetelo");
        document.getElementById("kesimpulan").hidden=false;
        document.getElementById("PE04").hidden=false;  

      }else if (CRD.includes(checkbox.id)) {
        if(CRD.includes(checkbox.id)) {
          if(checkbox.id && checkbox.checked) {
              totalCRD+= parseInt(checkbox.value)/30*100;
          }
          probability5.textContent = `Probabilitas : ${totalCRD} %`;
          document.getElementById("probabilitas5").hidden=false;
        };
        console.log("CRD");
        document.getElementById("kesimpulan").hidden=false;
        document.getElementById("PE05").hidden=false;   

      }else if (SNOT.includes(checkbox.id)) {
        if(SNOT.includes(checkbox.id)) {
          if(checkbox.id && checkbox.checked) {
              totalSNOT += parseInt(checkbox.value)/40*100;
          }
          probability6.textContent = `Probabilitas : ${totalSNOT} %`;
          document.getElementById("probabilitas6").hidden=false;
        };
        console.log("SNOT");
        document.getElementById("kesimpulan").hidden=false;
        document.getElementById("PE06").hidden=false;   

      }else if (OM.includes(checkbox.id)) {
        if(OM.includes(checkbox.id)) {
          if(checkbox.id && checkbox.checked) {
              totalOM += parseInt(checkbox.value)/50*100;
          }
          probability7.textContent = `Probabilitas : ${totalOM} %`;
          document.getElementById("probabilitas7").hidden=false;
        };
        console.log("OM");
        document.getElementById("kesimpulan").hidden=false;
        document.getElementById("PE07").hidden=false;    
      }else{
        document.getElementById("kesimpulan").innerHTML="404 Not Found";
        document.getElementById("notfound").hidden=false;
      }
    }
  }
};
  
//MyBugs
function uncheck(chk) {
  for (i = 0; i < chk.length; i++)
  chk[i].checked = false ; 
}
//------------------------------------------------------------------//
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
  