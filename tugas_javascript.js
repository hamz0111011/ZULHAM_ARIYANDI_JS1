//IF
let value = 80;

if (value >= 75) {
  console.log("Selamat, Anda lulus!");
} else {
  console.log("Maaf, Anda tidak lulus.");
}

//IF ELSE
let nilai = 85;

if (nilai >= 90) {
  console.log("Nilai Anda adalah A");
} else if (nilai >= 80) {
  console.log("Nilai Anda adalah B");
} else if (nilai >= 70) {
  console.log("Nilai Anda adalah C");
} else {
  console.log("Nilai Anda adalah D");
}

//NESTED IF
let angka = 15;

if (angka % 2 === 0) {
  if (angka > 10) {
    console.log("Angka genap dan lebih besar dari 10");
  } else {
    console.log("Angka genap tetapi tidak lebih besar dari 10");
  }
} else {
  console.log("Angka ganjil");
}

//SWITCH CASE
var jenisOlahraga = prompt("Masukkan jenis olahraga (sepak bola, basket, atau voli):");

switch (jenisOlahraga.toLowerCase()) {
   case "sepak bola":
        console.log("Sepak bola adalah olahraga yang populer di seluruh dunia.");
        break;
    case "basket":
       console.log("Basket adalah olahraga yang dimainkan dengan bola besar dan ring.");
        break;
    case "voli":
        console.log("Voli adalah olahraga yang dimainkan dengan net dan menggunakan tangan");
        break;
    default:
        console.log("Kami tidak memiliki informasi tentang jenis olahraga yang Anda masukkan.");
}

//FOR STATEMENT
const weapon = ["AK47", "M4A1", "DP-28", "UMP45"];

for (let i = 0; i < weapon.length; i++) {
  console.log("Weapon ke-" + i + ": " + weapon[i]);
}

//WHILE
var sekolah;
var valid = false;

while (!valid) {
    sekolah = prompt("Nama sekolah Anda?");
    
    if (sekolah !== null && sekolah.trim() !== "") {
        valid = true;
    }
}

console.log("Anda sekolah di " + sekolah + ".");

//DO WHILE
var sekolah;
var valid = false;

do {
    sekolah = prompt("Nama sekolah Anda?");
    
    if (sekolah !== null && sekolah.trim() !== "") {
        valid = true;
    }
} while (!valid);

console.log("Anda sekolah di " + sekolah + ".");

//FUNCTION

function kuadrat(angka) {
    return angka * angka;
  }
  
  let hasilKuadrat = kuadrat(9);
  console.log("Hasil kuadrat: " + hasilKuadrat);
  