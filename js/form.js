const form = document.forms["Pesan-Unipi"];
const btnKirim = document.querySelector("#kirim");
const btnLoading = document.querySelector("#loading");
const notif = document.querySelector("#notif");
var validasiHuruf = /^[a-zA-Z ]+$/;
var validasiAngka = /^[0-9]+$/;
// const jmlnomer = 12;
form.addEventListener("submit", (e) => {
  if (form["nama"].value == "") {
    alert("Nama tidak boleh kosong");
    form["nama"].focus();
    // return false;
  } else if (!form["nama"].value.match(validasiHuruf)) {
    alert("Nama Harus huruf");
    form["nama"].value == "";
    form["nama"].focus();
    return false;
  } else if (form["no_telepon"].value == "") {
    alert("Nomer telepon wajib diisi");
    form["no_telepon"].focus();
    // return false;
  } else if (form["no_telepon"].value.length != 12) {
    alert("Nomer telepon harus 12 karakter!");
    form["no_telepon"].focus();
    // return false;
  } else if (!form["no_telepon"].value.match(validasiAngka)) {
    alert("Nomer telepon harus angka!");
    form["no_telepon"].focus();
    return false;
  } else if (form["email"].value == "") {
    alert("Email harus diisi!");
    form["email"].focus();
    return false;
  } else if (form["pesan"].value == "") {
    alert("Harap tuliskan Pesan !");
    form["pesan"].focus();
    // return false;
  } else if (!form["pesan"].value.match(validasiHuruf)) {
    alert("format pesan harus huruf!");
    form["pesan"].focus();
    return false;
  } else {
    const scriptURL = "https://script.google.com/macros/s/AKfycbw0Jmf5N54HPdMne3X0o-ndAaDs-3O8USntcumHDPQcgFSvyBY1HEeuaxzx9v0CHUAv/exec";
    e.preventDefault();
    //menambah dan
    btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        btnLoading.classList.toggle("d-none");
        btnKirim.classList.toggle("d-none");
        //muncul alert
        notif.classList.toggle("d-none");
        //reset form
        form.reset();
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  }
});
