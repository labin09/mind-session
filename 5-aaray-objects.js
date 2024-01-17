
let product1 = "watch"
let product2 = "keyword"

// let product = "watch","keyword"

let products =[product1,product2]

//products = ["watch","keyword"]
//let product[1] = "kwyword" // some confusion
//console.log(product[1]);

/* array
-collection of similar data-type
*/
let users =["ram","sita","hari"];

/*
OBJECT
-same  like real life objects

let <objNanme={
    <key>:<value>,
    <key>:<value>,
    <attribute>:<value>,
    <property>:<value>
};
*/
let color = "red"
colorv = {
    name:"red",
    hexValue:"#ff000",
    rgbValue:"rgb(255,0,0)"
};
console.log(colorv) // todo access 
/*
let myHonda={
    color: "red",
wheels: 4,
engine: { cylinders: 4, size: 2.2 },
};
*/
let mywatch = "casio" // we need brand, modelnumber,type,price
mywatch ={
    brand:"casio",
    modelNumber:"g5-100",
    type:"analog",
    price:"hun", // change to number

};

//console.log("before",myWatch.price);
//myWatch.price =1000
//console.log("after",myWatch.price);

//let user="ram"
user1 ={
            name:"ram",
            //address:"putalisadek,ward-10,province3,ktm"
temporaryAddress:{
    province:3,
    district:"ktm",
    street:"banasthali"
},
permanentAddress:{
    province:4,
    district:"gorkha",
    street:"ashrang"
},

}

/* output:ram is from jhapa */ // template literal
console.log(user1.permanentAddress.district);
console.log(user1.temporaryAddress.district);
console.log(user1.permanentAddress.street);
console.log(user1.name," is from ",user1.permanentAddress.street);

/* 
String literal
using back tick ``` above tab key
*/


console.log(`ram is from gorkha`);
let  input1=1;
let input2 =100;
let sum = input1+input2
console.log(`sum of ${input1} + ${input2} =${sum}`);
/*
internally in javascript
const console ={


}
*/

user2={
    name:"sita",
    //address:"putalisadek,ward-10,province3,ktm"
temporaryAddress:{
province:3,
district:"ktm",
street:"banasthali"
},
permanentAddress:{
province:4,
district:"gorkha",
street:"ashrang"
},

}





