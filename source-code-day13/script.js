function kiemtraso(a) {
    if( a > 0){
        return "a là số dương"
    }
    else if( a < 0){
        return "a là số âm"
    }
    else{
        return "a là số 0"
    }
}

function diemtrungbinh(a,b,c){

    if(a<0 || a>10 || b<0 || b>10 || c<0 || c>10){
        return "điểm thi không hợp lệ"
    }
    let diemtb = (a + b + c) /3;

    if( diemtb <3 ){
        return "học lực yếu"
    }
    else if(  diemtb >=3 && diemtb <6.5 ){
        return "học lực trung bình"
    }

    else if(  diemtb >=6.5 && diemtb <8 ){
        return "học lực khá"
    }

    else if(  diemtb >=8 && diemtb <10 ){
        return "học lực giỏi"
    }


    

}