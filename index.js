 //let users =["ram","sita","hari"];
// console.log(users);

let userOne ={
    name:"ram",
    phone:9755
};

let userTwo ={
    name:"sita",
    phone:98943
};
let userThree ={
    name:"hari",
    phone:98945
};

let users =["ram","sita","hari"];
// users = ["ram","sita",98242,98243] // wrong
users =[userOne,userTwo];
console.log("users",users); // we need details info of multiple users

/*let courses =["mern","python","qa"]
let course1 ={
title:"mern",
  duration:"3 month",
  teacher:"sagar"
};

let course2 ={
title:"python",
  duration:"3 month",
  teacher:"sagar2"
};
// coures = [course1, course2];
courses = [
    title:"mern"},
    ttle:"python"},
    tte:"qa"}
]; 
nsole.log(courses)
*
// courses = [courses1, courses2]; // instead of this, we can directly crreate like below
// mern-syllabus: js-20days,react-20days,express-30days
// python:oop-10days, django:40days
// qa sql-10days, postman:30days

/*courses =[
    {
    title:"mern",
      teacher:"abc"
      duration:"3month",
        syllabus:[
            {
                topic:"js",
                duration:20-days
            },
                {
                    topic:"react",
                    duration:30-days
                },
                {
                    topic:"express",
                    duration:"30-days"
                },
        ]
    },
    {
    title:"python",
    teacher:"ijk"
    duration:"2. month"
    },
    {
    title:"qa",
    teacher:"acde"
    duration:"2 month",
    },
]
console.log(courses[0].syllabus[0].topic)
console.log(courses)
*/
//TODO
//create users array each should has own personal info and user has two/three phone numbers with different provides

let userData = [
    {
    name:"ram",
      //  contact:{
      //  ncell:98006,
    //    ntc:97006
   /// }
//},
contacts:[
    {
        number:980754574,
    provicer:"ntc",
    },
    {
        number:"one", // change into numbers
    provider:"ntc", // chnage into namaste
    },
    {
        number:980757433,
    provider:"ncell",
    },
],
},
{
name:"sita",
},
];
// OTHERS DETAILS
let apiResponse = {
    data:{
        total:2,
        result:{
            data:userData,
        },
    },
};
console.log(apiResponse);

/* classes 1-A,B, ,2A B,3,4 */

let classes = [
    {
        sectionA: {
            numberOfStudents: 20,
            teacher: "labin",
            roomNumber: 1250,
            subjects: ["Math", "Science"],
        },
    },
    {
        sectionB: {
            numberOfStudents: 30,
            teacher: "dil",
            roomNumber: 1212,
            subjects: ["English", "History"],
        },
    },
];
console.log(classes);

// TODO : CREATE CLASSES ARRAY

// right way
let classes1 =["one","two"];
classes1 =[
    {
        class:"one",
        sectionsA:[{
            name:"A",
            numberOfStudent:20,
            classTeacher:"abc"

        },{

            name:"B",
            numberOfStudent:50,
            classTeacher:"aVV"
        }]

    },
    {
        class:"two"
    },
];
console.log(classes1);

/*let todos = [
    {
    title: "varaible",
    status: "completed",
    createAt:"2024-01-01"
    },
    {
    title: "array",
    status: "completed",
    createAt:"2024-01-02"
    }    {
    tile: "object",
    staus: "completed",
    creaeAt:"2024-01-04"
    },
    {
    title: "loop",
    status: "pending",
    createAt:"2024-01-05"
    },
    {
    title: "function",
    status: "pending",
    createAt:"2024-01-05"
    },
];
  /* use template literal / string literal */
/* 
    araible is complted
    array is complted
    object is complted
    loop is complted
function is complted

  */
/* 
    araible crated at 2024-01-01 is complted
    array crated at 2024-01-01 is complted
    object crated at 2024-01-01 is complted
    loop crated at 2024-01-04 is complted
function crated at 2024-01-05 is complted
  */



// use template 