document.getElementById('tombol').addEventListener('click', getMobil);
function getMobil() {
  fetch('http://localhost/projectAPI/api/mobil.php')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        let output = '';
        data.forEach(function(mobil) {
          output +=`<li>NAMA MOBIL : <b>${mobil.mobil_id}</b> <br> Type Mobil : <b>${mobil.type_mobil}</b></li>`
        });
        document.getElementById('output').innerHTML = output;
      })
      .catch(err => {
        console.log(err);

        // Displaying to the UI
        document.getElementById('output').innerHTML = err;
      });
}
