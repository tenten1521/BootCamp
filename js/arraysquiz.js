function runActivity(){

const suspects=["Alfred", "Bonnie", "Craig", "Danny", "Eric", "Flint", "Gayle", "Heidi", "Isabel", "Jacob"];
const wanted=["Alfred", "Danny", "Jacob"];

for(i = 0; i < suspects.length; i++){
console.log("checking wanter list for "+ suspects[i]+"...")

for(j = 0; j < wanted.length;j++){
    if(suspects[i] == wanted[j]){
        console.log("supect is wanted!");
        break;
    }
}
}






















// const animals = ["alpaca", "badger", "caribou", "dolphin", "emu", "ferret", "gnu", "hedgehog", "iguana", "jackal"];
// const names = ["Alex", "Barth", "cammie", "Dyno" ,"Eri", "Felix", "Gina", "Hilbert", "Irene","Josephi"
// ];
// for ( i = 0 ; i <animals.length; i++){
//     console.log("I want to pet " + names[i]+" "+ "the" +" " + animals[i]+"!")
// }


}