
let runagain=true;
const candrive =(age) =>{
    return age>=18?true:false
}

while(runagain)
{
    let age =prompt("enter your age")
    age = Number.parseInt(age)

if( age <0)
{
    console.error("please enter a valiad age")
    break;
}    

if(candrive(age))
{
    alert("yes you can drive ")
}

else
{
    alert("you cannot drive")
}
  runagain=confirm("do you want to play again ?")
}

