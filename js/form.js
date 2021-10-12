const form = document.forms["Pesan-Unipi"];
const btnKirim = document.querySelector("#kirim");
const btnLoading = document.querySelector("#loading");
const notif = document.querySelector("#notif");
var validasiHuruf = /^[a-zA-Z ]+$/;
var validasiAngka = /^[0-9]+$/;

var atps = form["email"].value.indexOf("@");
var dots = form["email"].value.lastIndexOf(".");
// console.log(dots);

let spanKosong = "tidak boleh kosong!";
let harusangka = "harus angka!";
let harusemail = "email tidak valid!";
let harusduabelas = "harus 12 karakter angka!";
let harustext = "harus huruf!";
const valid = document.querySelector("#valid");
const validnomer = document.querySelector("#validNomer");
const validEmail = document.querySelector("#validEmail");
const validPesan = document.querySelector("#validPesan");
btnKirim.addEventListener("click", (e) => {
  if (form["nama"].value == "") {
    valid.insertAdjacentHTML("afterbegin", spanKosong);
    setTimeout(function () {
      valid.textContent = "";
    }, 3000);
    form["nama"].focus();
    return false;
  } else if (!form["nama"].value.match(validasiHuruf)) {
    valid.insertAdjacentHTML("afterbegin", harustext);
    setTimeout(function () {
      valid.textContent = "";
    }, 2000);
    form["nama"].value == "";
    form["nama"].focus();
    return false;
  } else if (form["no_telepon"].value == "") {
    validnomer.insertAdjacentHTML("afterbegin", spanKosong);
    setTimeout(function () {
      validnomer.textContent = "";
    }, 2000);
    form["no_telepon"].focus();
    return false;
  } else if (!form["no_telepon"].value.match(validasiAngka)) {
    validnomer.insertAdjacentHTML("afterbegin", harusangka);
    setTimeout(function () {
      validnomer.textContent = "";
    }, 2000);
    form["no_telepon"].focus();
    return false;
  } else if (form["no_telepon"].value.length != 12) {
    validnomer.insertAdjacentHTML("afterbegin", harusduabelas);
    setTimeout(function () {
      validnomer.textContent = "";
    }, 2000);
    form["no_telepon"].focus();
    return false;
  } else if (form["email"].value == "") {
    validEmail.insertAdjacentHTML("afterbegin", spanKosong);
    setTimeout(function () {
      validEmail.textContent = "";
    }, 2000);
    form["email"].focus();
    return false;
  } else if (form["email"].value.indexOf("@") === -1 || form["email"].value.indexOf(".") === -1) {
    validEmail.insertAdjacentHTML("afterbegin", harusemail);
    setTimeout(function () {
      validEmail.textContent = "";
    }, 2000);
    form["email"].focus();
    return false;
  } else if (form["pesan"].value == "") {
    validPesan.insertAdjacentHTML("afterbegin", spanKosong);
    setTimeout(function () {
      validPesan.textContent = "";
    }, 2000);
    form["pesan"].focus();
    return false;
  } else if (!form["pesan"].value.match(validasiHuruf)) {
    validPesan.insertAdjacentHTML("afterbegin", harustext);
    setTimeout(function () {
      validPesan.textContent = "";
    }, 2000);
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
