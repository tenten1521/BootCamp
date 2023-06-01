
    // the program does the following:
    // 1. determine whether a number is at least a dozen
    // 2. determine how many dozen that number is.
function runActivity() {
    let num = Number(prompt("give me a number"));
    if( num >= 12) {
        console.log(num + "the number is dozen")
        let dozens = num/12;
        console.log("the number of dozen is: " + dozens)
        if(num %12 == 0){
            console.log("that is exact dozens")
        }
    } else{
        console.log(num + "the number is not dozen")
    }

}