function printStatus(index) {
    console.log(`print status for index ${index}`);
}

printStatus(3);
printStatus(4);
printStatus(1);
printStatus(2);

/*
function 
- reusable

syntax:


*/

function double(input) {
    let result = 2 * input;
    console.log(`input: ${input}, 2 * ${input} = ${result}`);
}


double(2); // 2 is called argument
double(6); // 6 is called an argument



sum(2,3); // 2+3 = 5
sum(23,3); // 23+3 = 26
// my way
/*function sum(a, b) {
    return a + b;
}

console.log("sum(2, 3): " + sum(2, 3)); 
console.log("sum(23, 3): " + sum(23, 3)); 
*/
/* arrow funtions */
/* */

function sum(input1,input2){
    console.log(" ");

    console.log(`input:${input1},input2:${input2} calculate sum`)
    console.log(`${input1} + ${input2} = ${input1+input2} `);

}
sum (2,10);
sum(5,10); // 5+10 =10

// di(100,50,25) //dis=ff of 100 and 50 and 25 is 25
// diff(100,50) // diff 0f 100 and 50 is 50

// Define the 'diff' function that takes two or more parameters
function diff() {
    // Check if there are at least two arguments
    if (arguments.length < 2) {
        console.log("Error: At least two arguments are required for the 'diff' function.");
        return;
    }

    // Calculate the difference of all passed arguments
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        result -= arguments[i];
    }

    // Display the result
    console.log(`diff of ${Array.from(arguments).join(" and ")} is ${result}`);
}

// Calling the 'diff' function with different arguments
diff(100, 50, 25); // diff of 100 and 50 and 25 is 25
diff(100, 50);    // diff of 100 and 50 is 50

