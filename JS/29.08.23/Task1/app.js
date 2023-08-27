let consoleLog = function (sum) {
    console.log(`Cavab:${sum}`);
  };
  let alert1 = function (sum) {
  alert(`Cavab:${sum}`);
  };
  
  function sum(ed1, ed2, cb) {
    cb(ed1 + ed2);
  }
  sum(3,2,consoleLog)
  sum(3, 2,alert1 );