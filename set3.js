// prb1
let marks ={
    vatsal:99,
    esha:45,
    disha:55,
    nikki:13
}
for(let i=0; i<Object.keys(marks).length;i++)
{
    console.log("the marks of" + Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]])
}

// prob 2
for(let key in marks)
{
    console.log("the marks of" + key + "are" + marks[key])
} 

// prob3
let cn=4
let i
while(i != cn)
{
    i = prompt("enter a number")
    console.log("try again")
}
console.log("you have entered a coorect number ")

// prob 4
const mean = (a,b,c,d)=>
{
    return (a+b+c+d)/4
}
console.log(mean(4,5,6,7))