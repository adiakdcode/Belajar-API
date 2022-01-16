/*BASE URL*/
const ReqData = {
  URL_BASE: 'http://localhost/projectAPI/api',
  get End_Point() {
      return {
          URL_BASE: this.URL_BASE,
          MOBIL: `${this.URL_BASE}/mobil.php`,
          PRICELIST: `${this.URL_BASE}/pricelist.php`,
          KONTAK: `${this.URL_BASE}/aboutUS.php`,
          SERVICE: `${this.URL_BASE}/service.php`,
      }
  }
}
const {
  End_Point,
} = ReqData

/*FETCH DATA MOBIL*/
fetch(End_Point.MOBIL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      //Menampilkan ke Front End
      let dataOutput = '';
      data.forEach(function(mobil){
      dataOutput += `
            <div class="col-md-4">
              <div class="card rounded">
                  <div class="card-image">
                      <span class="tipe-mobil-notify">Tipe : <b>${mobil.type_mobil}</b></span>
                      <span class="card-notify-year">${mobil.tahun}</span>
                      <img class="img-fluid" src=${mobil.mobil_image} alt=${mobil.nama_mobil} style="width: 300; height: 140;" />
                  </div>
                  <div class="card-image-overlay m-auto">
                      <span class="card-detail-badge">MULAI</span>
                      <span class="card-detail-badge">Rp. ${mobil.harga_sewa}</span>
                      <span class="card-detail-badge">${mobil.kapasitas_mesin}</span>
                  </div>
                  <div class="card-body text-center">
                      <div class="nama-mobil m-auto">
                          <h5>${mobil.nama_mobil}</h5>
                      </div>
                      <a class="spek-btn" href="#" data-toggle="collapse" data-target="#${mobil.mobil_id}" aria-expanded="false" aria-controls="collapseExample">Spesifikasi</a>
                      <div class="collapse" id="${mobil.mobil_id}">
                        <div class="card card-body text-left font-weight-bold" style="margin-top: 5px;">
                          <li>Tahun : ${mobil.tahun}</li>
                          <li>Seating Capacity : ${mobil.seating_capacity}</li>
                          <li>AC : ${mobil.ac}</li>
                          <li>Air Bag : ${mobil.air_bag}</li>
                          <li>Audio : ${mobil.audio}</li>
                          <li>Kapasitas Mesin : ${mobil.kapasitas_mesin}</li>
                        </div>
                      </div>
                  </div>
              </div>
          </div>`
    });
      document.getElementById('mobil').innerHTML = dataOutput;
  })
  .catch(err => {
    console.log(err);
    // Menampilkan EROR
    dataOutput =`
      <h1>ERROR DATABASE!</h1>`
    document.getElementById('mobil').innerHTML = dataOutput;
  });

/*FETCH SERVICE*/
fetch(End_Point.SERVICE)
.then(response => response.json())
.then(data => {
  console.log(data);
  //Menampilkan ke Front End
  let dataOutput = '';
  data.forEach(function(service){
  dataOutput += `
      <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
        <div class="icon"><img src=${service.icon}></div>
        <h4 class="title"><a href="">${service.service_name}</a></h4>
        <p class="description">${service.deskripsi}</p>
      </div>
    </div>`
});
  document.getElementById('layanan').innerHTML = dataOutput;
})
.catch(err => {
console.log(err);
});
  
/*FETCH DATA KONTAK*/
fetch(End_Point.KONTAK)
.then(response => response.json())
.then(data => {
  console.log(data);
  //Menampilkan ke Front End
  let dataOutput = '';
  let dataOutput2 = '';
  let dataMaps = '';
  data.forEach(function(kontak){
  dataOutput += `
              <h4 class="text-white"><b>${kontak.nama_usaha}</b></h4>
              <p class="contact-info mt-4 text-sm-left">${kontak.tentang_kami}</p>
              <p class="contact-info mt-4 text-sm-left">${kontak.alamat}</p>
              <p class="contact-info text-sm-left text-white" id="wa"><b>WA : ${kontak.kontakWA}</b></p>`

              dataOutput2 += `
              <div class="col-lg-6">
                <div class="info-box mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40px" fill="#FF0000" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                  <h3>Alamat Kami</h3>
                  <p>${kontak.alamat}</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="info-box  mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40px" fill="#FF0000" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
                  <h3>Email</h3>
                  <p>${kontak.kontakEmail}</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="info-box  mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40px" fill="#FF0000" class="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                  <h3>Whatsapp</h3>
                  <p>${kontak.kontakWA}</p>
                </div>
              </div>`
              
              dataMaps += `
              <iframe class="mb-4 mb-lg-0" src=${kontak.linkMaps}  frameborder="0" style="border:0; width: 100%; height: 384px;" allowfullscreen></iframe>`
});
  document.getElementById('kontak').innerHTML = dataOutput;
  document.getElementById('kontak2').innerHTML = dataOutput2;
  document.getElementById('maps').innerHTML = dataMaps;
})
.catch(err => {
console.log(err);
});

/*FETCH DATA HARGA*/
fetch(End_Point.PRICELIST)
.then(response => response.json())
.then(data => {
  console.log(data);
  //Menampilkan ke Front End
  let dataOutput = '';
  data.forEach(function(harga){
  dataOutput += `
              <div class="card card-pricing text-center px-3 mb-4">
              <span class="h5 w-60 mx-auto px-4 py-1 rounded-bottom text-white shadow-sm" style="background-color: #ff1300">${harga.mobil_id}</span>
              <div class="bg-transparent card-header pt-4 border-0">
                  <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="15" style="font-size: 30px;"><b>Rp. ${harga.harga_i}</b></span><span class="h6 text-muted ml-2"><br><b>/ 6 JAM</b></span></h1>
              </div>
              <div class="card-body pt-0">
                  <ul class="list-unstyled mb-4">
                      <li>Rp. ${harga.harga_ii} / 12 JAM</li>
                      <li>Rp. ${harga.harga_ii} / 18 JAM</li>
                      <li>Rp. ${harga.harga_iv} / 24 JAM</li>
                  </ul>
                  <a href="https://api.whatsapp.com/send/?phone=6282264188138&text&app_absent=0"><button type="button" class="btn btn-warning mb-3"><b>RESERVASI</b> | <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg></button></a>
              </div>
            </div>`
});
  document.getElementById('daftarharga').innerHTML = dataOutput;
})
.catch(err => {
console.log(err);
});

/*-------
fetch(End_Point.KONTAK)
.then(response => response.json())
.then(data => {
  console.log(data);
  //Menampilkan ke Front End
  let dataOutput = '';
  data.forEach(function(kontak){
  dataOutput += `
              <h2 class="card-title card bg-warning"><i>KONTAK-- KAMI</i></h2>
              <div class="text-justify">
                <p class="contact-info mt-4 text-sm-left">${kontak.alamat}</p>
                <a href="#" class="btn btn-primary">${kontak.kontakWA}</a>
              </div>`
});
  document.getElementById('asideCP').innerHTML = dataOutput;
})
.catch(err => {
console.log(err);
});----*/