function runActivity(){
    // lets make a varialbe for each . and counts for every number even odd posivite negativve interger and decimal
    let numberCount = 0;
    let even = 0;
    let odd = 0;
    let positivenumbercount = 0;
    let negetivenumbercount = 0;
    let integercount = 0;
    let decimalcount = 0;
    
    let input= Number(prompt("enter a number between 2 and 20:"));
     
    if(input >= 2 && input <= 20){
        for(let i = 1; i <= input; i++){
            let num= Number(prompt("enter number: " + i));
            numberCount++;
    if(num == 0){
        integercount++;
    }else if (num %2 ==0){
        even++;
        integercount++;
    }else if (num %1 == 0){
        odd++;
        integercount++;
    }

    if (num > 0) {
        positivenumbercount++;
    }else if(num < 0) {
        negetivenumbercount++;
    }
    if (num % 1 !==0){
        decimalcount++;
        integercount--;
    }
}  
            
            
     console.log("number Count :" + numberCount);
     console.log("even number Count :" + even);
     console.log("odd number Count :" + odd);
     console.log("positive number Count :" + positivenumbercount);
     console.log("negative number Count :" + negetivenumbercount);
     console.log("integers number Count :" + integercount);
     console.log("decimal number Count :" + decimalcount);
    }else{
        console.log("invalid input. please enter a number between 2 and 20.")
    }
}
