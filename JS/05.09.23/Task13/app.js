// A: done as 🐉
function isvalidnumber(tel) {
  if (tel.startsWith("+7") && tel.length === 11) {
    console.log(`nomre duzgun qyed edilmisdir`);
  } else {
    console.log(`nomre duzgun qeyd edilmemisdir`);
  }
}

isvalidnumber(`+7523456789`);
