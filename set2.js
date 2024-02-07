// chapter 2
// prb 1

let age = prompt("whai is your age?")
if(age>10 && age<20)
{
    console.log("your age lies between 10 and 20 ")
}
else{
    console.log("your age doesnot lies between 10 and 20 ")
}

// prob 2
// prb 3

let num= prompt("age")
num = Number.parseInt(num)
if(num %2==0 && num%3==0)
{
 console.log("your age is divisible by 2 and 3")
}
else{
    console.log("your age is not divisible by 2 and 3")
}

// prob 4
// either 2 and 3

// prob 5
let age=19
let a= age >18? "you can drive" : "you cannot drive"
console.log(a)