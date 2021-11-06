//ES7

includes();

'helooooo'.includes(0);




//currying

const multiply=(a,b)=> a*b;
const curriedMultiply=(a)=>(b)=>a*b;
const multiplyBy5=curriedMultiply(5);

//Compose

const compose=(f,g)=>(a)=>f(g(a));

const sum=(num)=>num+1;

compose(sum,sum)(5);

// Avoiding side effects, functional purity


//Advanced arrays

const array=[1,2,10,16];

const double=[]
const newArray=array.forEach((num)=>{
    double.push(num*2);
})

console.log(double);

//map,filter,reduce


//map is better than foreach 
const array=[1,2,10,16];

const mapArray= array.map(num=>num*2);

console.log(mapArray);




//filter
const filterArray=array.filter(num=> num>5);
console.log(filterArray);


//Reduce Powerful method

const reduceArray=array.reduce((accumulator,num)=>{
    return accumulator+num
},5);

console.log(reduceArray);
//op - 34  






















// var button =document.getElementsByTagName("button")[0];

var input =document.getElementById("userinput");
var button =document.getElementById("enter");

button.addEventListener("click",function(){
    console.log("sexyyuy")
})


//Template Strings

const name ="sally";
const age="34";
const pet="horse";


//const greeting="hello" +name+ "you see" +age+
const greetingBest= `hello ${name} you see ${age-10} lovely ${pet}`;

// default argumets

function greet(name='',age='30',pet='cat'){
    return `hello ${name} you see ${age-10} lovely ${pet}`
}


//


//arrow functions

function add(a,b)
{
    return a=b;
}

const add=(a,b)=> a+b;










var todos=[
    "clean room",
    "brush teeth",
    "eat healthy",
    "exercise"
];


for(var i=0; i<todos.length;i++){   


}




var database=[
    {
        username:"ranjith",
        password:"super"
    }
]

var newsFeed=[
    {
        username:"ranjith",
        timeline:"enjiying enjnljknfdlkjflkdj"

    },
    {
        username:"ranjit",
        timeline:"enjiying enjnlj"

    },

]


var userNamePrompt= prompt("whats username");
var passwordPrompt= prompt("whats is password");


function signIn(user,pass){

    if (user === database[0].username && pass === database[0].password){
        console.log(newsFeed);
    }else{
        alert("sorry");
    }

}

signIn(userNamePrompt,passwordPrompt);






