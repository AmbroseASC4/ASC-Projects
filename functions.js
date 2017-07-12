//defining the function
function hello(){
    console.log('Hello,World');
}

hello(); //calling the function

function add(num1, num2){
    return(num1+num2);
}

console.log(add(5,7));

var wholenumber;
function rand(number){
    wholenumber = Math.floor(Math.random() * number);
    return wholenumber;
}

console.log(rand(2000));