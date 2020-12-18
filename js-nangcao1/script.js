function tinhtong(a, b) {
  let sum = 0;

  for (let i = a + 1; i < b; i++) {
    sum += i;
  }
  return sum;
}

function uocso(n) {
  let sum = 0;

  if (n < 0) {
    return ` nhập lại n`;
  } else {
    for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
        sum += i;
      }
    }
    return sum;
  }
}

function kiemtra(n) {
  let count = 0;
  if (n <= 1) {
    return false;
  } else {
    for (var i = 2; i <= n / 2; i++) {
      if (n % i == 0) {
        count++;
      }
    }
    if (count == 0) {
      return true;
    } else {
      return false;
    }
  }
}

function changetext(drrs) {
  let vietthuong = drrs.toLowerCase().split(" ");
  let viethoa = vietthuong.map(function (text) {
    return text.replace(text.charAt(0), text.charAt(0).toUpperCase());
  });
  return viethoa.join(" ");
}

function tongcacso(n) {
  let tong = 0;
  for (i = 2; i <= n; i++) {
    if (kiemtra(i) == true) {
      tong += i;
    }
  }
  return tong;
}



function spinalcase(chuoi) {
  var string,
    Chuoimoi,
    dau1 = new RegExp(/[_\s]/, "g"),
    dau2 = new RegExp(/(?=[A-Z])/, "g"),
    stringTest1 = dau1.test(chuoi),
    stringTest2 = dau2.test(chuoi);

  if (stringTest1) {
    string = chuoi.replace(dau1, "-");
    Chuoimoi = string.toLowerCase();
  } else if (stringTest2) {
    chuoi.split(/(?=[A-Z])/).join(" ");
    string = chuoi.replace(dau2, "-");
    Chuoimoi = string.toLowerCase();
  } else if (stringTest1 && stringTest2) {
    string = chuoi.replace(dau1, "-");
    string = chuoi.replace(dau2, "-");
    Chuoimoi = string.toLowerCase();
  }

  return Chuoimoi;
}

function Spinal(str){
    str = str.toLowerCase();
    str = str.replace(/ /g, "-");
    return str;
}
