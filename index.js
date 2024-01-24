function getMonthName(monthNumber) {
    let output;

    if (monthNumber === 1) {
        output = "Jan";
    } else if (monthNumber === 2) {
        output = "Feb";
    } else if (monthNumber === 3) {
        output = "Mar";
    } else if (monthNumber === 4) {
        output = "Apr";
    } else if (monthNumber === 5) {
        output = "May";
    } else if (monthNumber === 6) {
        output = "Jun";
    } else if (monthNumber === 7) {
        output = "Jul";
    } else if (monthNumber === 8) {
        output = "Aug";
    } else if (monthNumber === 9) {
        output = "Sep";
    } else if (monthNumber === 10) {
        output = "Oct";
    } else if (monthNumber === 11) {
        output = "Nov";
    } else if (monthNumber === 12) {
        output = "Dec";
    } else {
        output = "Invalid month number";
    }

    return output;
}

console.log(getMonthName(1));  // Output: Jan
console.log(getMonthName(2));  // Output: Jan
console.log(getMonthName(3));  // Output: Jan
console.log(getMonthName(4));  // Output: Jan
console.log(getMonthName(5));  // Output: Jan
console.log(getMonthName(6));  // Output: Jan
console.log(getMonthName(7));  // Output: Jan
console.log(getMonthName(8));  // Output: Jan
console.log(getMonthName(9));  // Output: Jan
console.log(getMonthName(10)); // Output: Dec
console.log(getMonthName(11)); // Output: Invalid month number
console.log(getMonthName(12)); // Output: Invalid month number


let todos =[
    {
    title: "html",
    status:true
},
{
    title:"js",
    status:false
},
];
for (let todo of todos) {
    if (todo.status) {
        console.log(`${todo.title} is completed.`);
    } else {
        console.log(`${todo.title} is pending.`);
    }
}

/* through sir 
if(true){
    console.log("html is compeleted");
}else{
    console.log("js is pending");
}




*/
/*html is completed */
/* js is pending */

/*
for (initalpoint; condition;mutator){
    //do something
}
*/

for(let count = 0; count < 10; count++){
    console.log(count);
}
console.log("end loop");
