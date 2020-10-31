function minMax(numbers){
    const minNumber = Math.min.apply(null, numbers);
    const maxNumber = Math.max.apply(null, numbers);
    return `Số lớn nhất là ${maxNumber} và số nhỏ nhất là ${minNumber}`;
}

function Bai3(xxx){
                let soChan;
                let soLe;
                soChan = xxx.filter(number => (number % 2) == 0 );
                soLe = xxx.filter(number => (number % 2) != 0 );
                // return soLe[0];
                // return soChan[soLe.length-1];
                return ("Số Lẻ đầu tiên là " + soLe[0] + " và số Chẵn cuối cùng là " + soChan[soLe.length-1]);
}


 function thaysonguyen(arrs){
     for(let i=0; i< arrs.length; i++){
         if(arrs[i] < 0)
            arrs[i] = 0
     }
     return `${arrs}`
 }           