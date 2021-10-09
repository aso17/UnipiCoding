const scriptURL = "https://script.google.com/macros/s/AKfycbw0Jmf5N54HPdMne3X0o-ndAaDs-3O8USntcumHDPQcgFSvyBY1HEeuaxzx9v0CHUAv/exec";
const form = document.forms["Pesan-Unipi"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
