var countL = 99;
var countG = 99;
var countB = 99;

function btnLike() {
    countL++;
    document.getElementById("sl").innerHTML = "+" + (countL);
}

function btnGood() {
    countG++;
    document.getElementById("sg").innerHTML = "+" + (countG);
}

function btnBad() {
    countB++;
    document.getElementById("sb").innerHTML = "+" + (countB);
}