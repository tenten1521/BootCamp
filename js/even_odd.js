function runActivity(){
    let num1 =Number(prompt("Give a number"));
    if ( num1 == 0){
        console.log("the number is not even or odd")
    }
    else if (num1 % 2 == 0){
        console.log("the number is even!");
    }else {
        console.log("the number is odd")
    }
}