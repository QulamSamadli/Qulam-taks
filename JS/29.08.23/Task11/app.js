// Q:setr5-setr12 araligini day yarimsaat fikikrlemisem hediyyemi ne vaxt alirsiz? 😁

let num = +prompt(`Eded daxil edin`);
let onluq = Math.floor(num / 10) * 10;
let teklik = num % 10;

if (num % 10 === 0) {
  console.log(GET_NUM(onluq));
} else if (Math.floor(num / 10) === 0) {
  console.log(GET_NUM(teklik));
} else {
  console.log(GET_NUM(onluq) + " " + GET_NUM(teklik));
}

function GET_NUM(eded) {
  switch (eded) {
    case 0:
      return `sifir`;
      break;
    case 1:
      return `bir`;
      break;
    case 2:
      return `iki`;
      break;
    case 3:
      return `uc`;
      break;
    case 4:
      return `dord`;
      break;
    case 5:
      return `bes`;
      break;
    case 6:
      return `alti`;
      break;
    case 7:
      return `yeddi`;
      break;
    case 8:
      return `sekkiz`;
      break;
    case 9:
      return `doqquz`;
      break;
    case 10:
      return `on`;
      break;
    case 20:
      return `iyirmi`;
      break;
    case 30:
      return `otuz`;
      break;
    case 40:
      return `qirx`;
      break;
    case 50:
      return `elli`;
      break;
    case 60:
      return `altmis`;
      break;
    case 70:
      return `yetmis`;
      break;
    case 80:
      return `seksen`;
      break;
    case 90:
      return `doxsan`;
      break;

    default:
      break;
  }
}
