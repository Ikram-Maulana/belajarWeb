// Ganti Nama
let nameOf1 = document.getElementById("name1");
let nameOf2 = document.getElementById("name2");
let changeName1 = document.getElementById("change1");
let changeName2 = document.getElementById("change2");

// Count Angka
let tambahBtn1 = document.getElementById("tambah1");
let kurangBtn1 = document.getElementById("kurang1");
let tambahBtn2 = document.getElementById("tambah2");
let kurangBtn2 = document.getElementById("kurang2");
let countElement1 = document.getElementById("count1");
let countElement2 = document.getElementById("count2");

// Inisiasi Score
let score1 = 0;
let score2 = 0;

changeName1.addEventListener("input", function () {
  nameOf1.innerHTML = changeName1.value;
});
changeName2.addEventListener("input", function () {
  nameOf2.innerHTML = changeName2.value;
});

tambahBtn1.addEventListener("click", function () {
  countElement1.innerHTML = ++score1;
});
tambahBtn2.addEventListener("click", function () {
  countElement2.innerHTML = ++score2;
});

kurangBtn1.addEventListener("click", function () {
  if (score1 <= 0) {
    countElement1.innerHTML = 0;
  } else {
    countElement1.innerHTML = --score1;
  }
});
kurangBtn2.addEventListener("click", function () {
  if (score2 <= 0) {
    countElement2.innerHTML = 0;
  } else {
    countElement2.innerHTML = --score2;
  }
});