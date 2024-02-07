const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");



// const getFacts = async () =>{
// console.log("getting data ....."); 
// let response = await (fetch(URL));
// console.log(response);   
// // JSON formt
// // console.log(response.status);
// let data = await response.json();
// console.log(data[0].text);

// factPara.innerText = data[0].text;
// factPara.innerText = data[1].text;

// factPara.innerText = data[2].text;
// };

function getFacts(){
fetch(URL)
  .then((respnse) =>{
    return response.json();
})
.then((data) =>{
    console.log(data);
    factPara.innerText = data[1].text;
});
}
btn.addEventListener("click", getFacts);
