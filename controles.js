function verif1() {
  sel = document.getElementById("sel").selectedIndex;
  des = document.getElementById("t1").value;
  r1 = document.getElementById("r1").checked;
  r2 = document.getElementById("r2").checked;
  r3 = document.getElementById("r3").checked;
  r4 = document.getElementById("r4").checked;
  prix = document.getElementById("t2").value;
  if (
    !(
      des.length >= 10 &&
      des.length <= 100 &&
      sel > 0 &&
      (r1 == true || r2 == true || r3 == true || r4 == true) &&
      prix >= 100 &&
      prix <= 2000
    )
  ) {
    alert("verifer votre reponse");
  } else {
    alert("nice");
  }
}
function verif2() {
  t11 = document.getElementById("t11").value;
  t22 = document.getElementById("t22").value;
  t33 = document.getElementById("t33").value;
  if (
    !(
      t11 >= 1 &&
      t22.length == 8 &&
      (Number(t22[0]) == 0 || Number(t22[0]) == 1) &&
      t33 >= 1 &&
      t33 <= 4
    )
  ) {
    alert("verfier votre donneé");
  } else {
    alert("nice");
  }
}
