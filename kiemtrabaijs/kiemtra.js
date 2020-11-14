function doF(doC) {
  var cdo = doC;
  var fdo = (cdo * 9) / 5 + 32;
  var message = cdo + "\xB0C -> " + fdo + " \xB0F.";
  console.log(message);
}

function sothu2(n) {
  n.sort(function (a, b) {
    return b - a;
  });
  return n[1];
}

function checkEnding(string, ending) {
  if (ending == null || string == null) {
    return "Hãy nhập dữ liệu!";
  } else {
    let end = string.endsWith(ending);
    return end;
  }
}

function maxLength1(arr) {
  arr.sort(function (a, b) {
    return b.length - a.length;
  });
  return arr[0];
}

function bai5(arr) {
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      console.log(arr[i], arr[j]);
    }
  }
}

function b5c2(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if (arr[1] === arr[j]){
        return true;
      }
    }
  }
    return false;
}
