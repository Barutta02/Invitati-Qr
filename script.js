function generaCodice() {
  document.getElementById("viewQrCode").innerHTML = "";
  nome = document.getElementById("inputNome").value;
  cognome = document.getElementById("inputCognome").value;
  document.getElementById("copiaApp").style.display = "block";
  document.getElementById("info").style.display = "block";
  var qrc = new QRCode(document.getElementById("viewQrCode"), {
    text: nome + " " + cognome + " " + generaSeqUnivoca(),
    width: 200,
    height: 200,
    colorDark: "#000000",
  });
}

function generaSeqUnivoca() {
  var seq = "";
  for (var i = 0; i < 6; i++) {
    seq += Math.floor(Math.random() * 10);
  }

  document.getElementById("sequenzaUnivoca").value = seq;
  return seq;
}

document.querySelector("#copiaApp").onclick = function () {
  // selezione del contenuto
  document.querySelector("#sequenzaUnivoca").select();
  // copia negli appunti
  document.execCommand("copy");
};
