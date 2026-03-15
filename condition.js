// if(){ // () condition

// } else if(){

// } else if(){

// } else{

// }

let age = 99;

if(age < 18) {
    console.log("You are a minor");
}else if(18 < age && age < 65) {
    console.log("You are an adult");
}
else if(age === 100) {
    console.log("You are a senior");
}
else {
    console.log("undefined age category");
}