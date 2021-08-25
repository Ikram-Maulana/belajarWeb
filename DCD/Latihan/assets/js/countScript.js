// Ganti Nama
let nameOfT1 = document.getElementById("nameOfTeam1");
let nameOfT2 = document.getElementById("nameOfTeam2");
let changenameOfTeam1 = document.getElementById("inputNameT1");
let changenameOfTeam2 = document.getElementById("inputNameT2");

// Count Angka
let incrementBtnT1 = document.getElementById("incrementTeam1");
let decrementBtnT1 = document.getElementById("decrementTeam1");
let incrementBtnT2 = document.getElementById("incrementTeam2");
let decrementBtnT2 = document.getElementById("decrementTeam2");
let countScoreT1 = document.getElementById("scoreTeam1");
let countScoreT2 = document.getElementById("scoreTeam2");

// Inisiasi Score
let score1 = 0;
let score2 = 0;

changenameOfTeam1.addEventListener("input", function () {
  nameOfT1.innerHTML = changenameOfTeam1.value;
});
changenameOfTeam2.addEventListener("input", function () {
  nameOfT2.innerHTML = changenameOfTeam2.value;
});

incrementBtnT1.addEventListener("click", function () {
  countScoreT1.innerHTML = ++score1;
});
incrementBtnT2.addEventListener("click", function () {
  countScoreT2.innerHTML = ++score2;
});

decrementBtnT1.addEventListener("click", function () {
  if (score1 <= 0) {
    countScoreT1.innerHTML = 0;
  } else {
    countScoreT1.innerHTML = --score1;
  }
});
decrementBtnT2.addEventListener("click", function () {
  if (score2 <= 0) {
    countScoreT2.innerHTML = 0;
  } else {
    countScoreT2.innerHTML = --score2;
  }
});