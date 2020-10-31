function minmax(numbers){
    for ( var i = 0; i < numbers.length; i++){
        if(numbers<min){
            min = numbers[i];
        }
        if(numbers>max){
            max = numbers[i];
        }
    }
    
}