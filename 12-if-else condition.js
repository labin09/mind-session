/*
if else
nested conditions
nested if else
*/

let willRain =false
let hasProbability =true

if(willRain){
    console.log("take umbrella");
}else{
    if(hasProbability){
    console.log("you might need it");

    }else{
        console.log("no need");
    }
}


let student = {
    name: "ram",
    paidStatus: false,
    hasScholarship: false,
};

if (student.paidStatus) {
    console.log(`${student.name}  can give the exam.`);
} else {
    if (student.hasScholarship) {
        console.log(`${student.name}  can give the exam.`)
    } else {
        console.log(`${student.name} canot give the exam.`);
    }
}

if(student.paidStatus){

}else{
}




function getMonth(){

    return "feb" // change
}
console.log(getMonth(1))

console.log(getMonth(1));
console.log(getMonth(12));
console.log(getMonth(0));
console.log(getMonth(13));


console.log(getmonth("other-data"))
/*function getMonths() {
    const months = [];
    for (let i = 0; i < 12; i++) {
        const monthName = new Date(2022, i, 1).toLocaleString('en-US', { month: 'long' });
        months.push(monthName);
    }
    return months;
}

const allMonths = getMonths();
console.log(allMonths);
*/

