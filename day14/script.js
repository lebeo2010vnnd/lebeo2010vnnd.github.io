function checkso(a,b){
    if(a > b){
        return `${a}`
    }
    else{
        return `${b}`
    }
}

function giaithua(a){
    if(a < 0){
        return "nhập sai"
    }

    else if (a == 0){
        return "Kết quả = 1"
    }

    else{
        var gt = 1
        
        for (i=1; i<=a; i++){
            gt = gt*i;
        }
        return ("kết quả =" + gt)
    }

}

function giamdan(arrs){
     let a = arrs.filter(x => (x%2) == 0);
     return a.sort(function(a, b){return b - a});
   
}


function season(){
    switch (new Date().getMonth()) {
        case 0:
        case 1:
        case 2:
        season = "mua xuan";    
          
        case 3:
        case 4:
        case 5:
        season = "mua he";

        case 6:
        case 7:
        case 8:
        season = "mua thu";

        case 9:
        case 10:
        case 11:
        season = "mua dong";

        
         
      }
}


function findEvenNumber (a1){
    let evenNumber = a1.filter((number)=> number%2 == 0);
    let soChan = evenNumber[0];
    for (let i = 0; i < evenNumber.length-1; i++){
        for (let j = i+ 1; j < evenNumber.length; j++){
            if (evenNumber[i] < evenNumber[j]){
                soChan = evenNumber[j];
                evenNumber[j] = evenNumber[i];
                evenNumber[i] = soChan;
            }
        }
    } return evenNumber;
}

function kiemtrasnt(n)
{   
    var flag = false;
    if (n < 2 ){
        flag = false;
    }
    else if (n == 2 || n == 3){
        flag = true;
    }
    else{
        
        for (var i = 2; i <= (n /2); i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
            else {flag = true}
        }
    }
    if (flag == true){
        return n + " là số nguyên tố";
       
    }
    else{
        return n + " không phải là số nguyên tố ";
    }
}


function sohoanhao(x) {   
                let list = [];
                for (y=1; y<x; y++) //Nhỏ hơn N
                    {
                        let tonguoc=0;
                        for (i=1; i<=y; i++)
                            {
                                if (y % i == 0)
                                    {
                                        tonguoc = tonguoc + i;
                                    }
                            }
                        if (tonguoc == y)
                            {
                                list.push(y);
                            }
                    }
                return list;
}

function veHCN(x,y){
    for(let i = 0; i < y; i++){
        for(let j = 0; j <x; j++){
            document.write("*");
        }
        document.write("<br/>")
    }
}

function tamGiacCan(h) {
    var str = "";
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < 2 * h - 1; j++) {
        if (j >= h - 1 - i && j <= h - 1 + i) {
          str += "*";
        } else {
          str += "0";
        }
      }
      str += "<br />";
    }
  
    document.writeln(str);
  }


  function daochuoi(string){
    var newstring=""
    for(var i=string.length-1;i>=0;i--){
        newstring +=string[i]
    }
    return newstring
}



