// loop
// let sum=0
// let n = prompt("enter the value of n")
// n=Number.parseInt(n)
// for(let i=0; i<n; i++)
// {
//     sum+= (i+1)
// }
// console.log("sum of firsr " + n +" natural number is " +sum)


// for in loop 
let obj ={
    harry:90,
    vatsal:45,
    esha:99,
    khushi:18,
}
for (let a in obj)
{
    console.log("marks of " + a + "are" +obj[a])
}
for (let b of "harry")
{
    console.log(b)
}
