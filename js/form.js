const scriptURL = "https://script.google.com/macros/s/AKfycbw0Jmf5N54HPdMne3X0o-ndAaDs-3O8USntcumHDPQcgFSvyBY1HEeuaxzx9v0CHUAv/exec";
const form = document.forms["Pesan-Unipi"];
const btnKirim = document.querySelector("#kirim");
const btnLoading = document.querySelector("#loading");
const alert = document.querySelector("#alert");
// console.log(alert);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //menambah dan
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      //muncul alert
      alert.classList.toggle("d-none");
      //reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
