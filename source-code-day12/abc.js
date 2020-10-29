function tinhTong(arrs) {
    let tong = 0;
    for (let i of arrs) {
        tong = tong + i;
    }
    return tong;
}




function binhphuongcuatong(arrs) {
    let tongbinhphuong = 0 
    for (let i of arrs) {
        tongbinhphuong = tongbinhphuong + i**2 ;
    }
    return tongbinhphuong;
}


const numbers = [2, 3, 4, 5];
const doubles = numbers.map(number => number * 2);


const mangso = [2, 4, 6, 7];
const chiadoi = mangso.map(number => number % 2);


const words = ['apple', 'microsoft', 'samsung', 'intel'];
const longWords = words.filter(word => word.length > 5);


const chu = ['hoami', 'tuanbeo', 'danh', 'abc'];
const chudai = chu.filter(word => word.length < 5);


const soday = ['1', '2', '6', '7'];
const sochan = soday.filter(word => word.length < 5);


function timsochan(arrs){
    let sochan;
    sochan = arrs.filter((a) => (a % 2 == 0))


    return sochan
}

function timten(drrs) {
    let tenH;
    tenH = drrs.filter(word => (word.substring(0,1) == "H" || word.substring(0,1) == "h" ))
    return tenH
}


function timgido(drrs) {
    let newArray;
    
}