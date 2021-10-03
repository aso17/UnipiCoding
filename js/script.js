const halo = ["Hallo..."];

let jml = 0;
let indextext = 0;
let pertama = "";
let finis = "";
(function textberjalan() {
  if (jml == halo.length) {
    jml = 0;
  }
  pertama = halo[jml];
  finis = pertama.slice(0, ++indextext);
  document.querySelector(".ketik").textContent = finis;
  if (finis.length == pertama.length) {
    jml++;
    indextext = 0;
  }
  setTimeout(textberjalan, 600);
})();

const welcome = ["Selamat datang..."];
let pertama1 = "";
jml1 = 0;
ind = 0;
let wel = "";
(function berjalan() {
  if (jml1 == welcome.length) {
    jml1 = 0;
  }
  pertama1 = welcome[jml1];
  wel = pertama1.slice(0, ++ind);
  document.querySelector(".welcome").textContent = wel;
  if (wel.length == pertama1.length) {
    jml1++;
    ind = 0;
  }
  setTimeout(berjalan, 300);
})();
