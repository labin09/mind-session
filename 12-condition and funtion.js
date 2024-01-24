/* if else


if (<condition>){
    do something
}else{
    do something else
}
*/


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
let allowedRole ="manager"
if(employee1.role==allowedRole){
    console.log(`${employee1.name} can access`);
}else{
    console.log(`${employee2.name} cannot access`);
}
function sum(input1,input2){
    return input1 +input2;

}sum();

function checkAccessibility(){
    if(employee3.role== allowedRole){
        console.log(`${employee3.name} can access`);
    }else{
        console.log(`${employee3.name} cannot access`);

    }
}

