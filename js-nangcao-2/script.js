function maxArr(arr) {
  let max = "";
  for (let i = 0; i < arr.length; i++) {
    if (max.length < arr[i].length) {
      max = arr[i];
    }
  }

  let maxString = max.length;

  let list = arr.filter((a) => {
    return a.length == maxString;
  });

  return list;
}

function arrcomparison(arr1, arr2) {
  arr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i], 0) == -1) {
      arr.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j], 0) == -1) {
      arr.push(arr2[j]);
    }
  }
  return arr;
}

function mang2chieu(m, n) {
  let mangMe = [];
  let mangCon = [];
  let mangKetQua = [];

  for (let i = 0; i < m * n; i++) {
    mangMe.push(i + 1);
  }

  for (let y = 0; y < m; y++) {
    mangCon = mangMe.splice(0, n);

    if (y != 0 && y % 2 == 1) {
      mangKetQua[y] = mangCon.reverse();
    } else {
      mangKetQua[y] = mangCon;
    }
  }

  return mangKetQua;
}

var nguoi = [
  {
    name: "Huy",
    gender: "male",
    age: 20,
  },
  {
    name: "tuan",
    gender: "male",
    age: 22,
  },
  {
    name: "khanh",
    gender: "male",
    age: 18,
  },
];

// bài 4
function tinhtuoi(arr) {
  return (
    new Function(`return ${nguoi.map(({ age }) => age).join("+")}`)() /
    arr.length
  );
}
console.log(tinhtuoi(nguoi));

// bài 5
nguoi.sort((a, b) => Number(b.age) - Number(a.age));
console.log("sapxep", nguoi);

// bài 6
var people = [
  {
    name: "Huy",
    gender: "male",
    age: 20,
  },
  {
    name: "tuan",
    gender: "male",
    age: 22,
  },
  {
    name: "khanh",
    gender: "male",
    age: 18,
  },
];
people.sort(function tentuoi(a, b) {
  return a.name < b.name ? -1 : 1;
});
console.log("bangchucai", people);

function timTen() {
  return (newArray = arr.filter(
    (a) => a.name.substring(0, 1) == "H" || a.name.substring(0, 1) == "h"
  ));
}
