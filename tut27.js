alert("enter the value of a!")
let a = prompt("enter a value","456")
document.write(a)
a=Number.parseInt()
alert("you entered a of type" + (typeof a))
// alet e hamesha string ma j value ley 
let write = confirm("Do you want to write it to tha page")
if(write)
{
    document.write(a)
}
else{
    document.write("please allow me to write")
}
