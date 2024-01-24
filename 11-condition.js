/* conditional statement
if else
*/

let isCode = true
if( isCode ){
    console.log("take jacket");

}else{
    console.log("no need.");

}

let number1=1;
let number2=2;
if (number1<number2){
    console.log("num1 is less than num2");
}else{
    console.log("num1 is not less than num2");
}

let employee1 ={
    name:"ram",
    role:"receptions"

}
let employee2={
    name:"hari",
    role:"receptions"
}
let employee3={
    name:"sita",
    role:"manager"

}
let allowedRole = "manager";

function canAccessVault(employee) {
    if (employee.role === allowedRole) {
        return true;
    } else {
        return false;
    }
}

console.log(`${employee1.name} can access vault: ${canAccessVault(employee1)}`);
console.log(`${employee2.name} can access vault: ${canAccessVault(employee2)}`);
console.log(`${employee3.name} can access vault: ${canAccessVault(employee3)}`);


/* ram cannot access vault*/
/* hari cannot access vault*/
/* sita can access vault*/

