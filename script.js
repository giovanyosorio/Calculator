console.log("hola mundo");

const result=document.querySelector(".result")
const seven=document.querySelector(".seven")
const plus =document.querySelector(".plus")
const reset=document.querySelector(".reset")
const equal=document.querySelector(".equal")
const number=document.querySelector(".number")

document
  .querySelector(".container")
  .addEventListener("click", function (event) {
  console.log(`You clicked on button ${event.target.innerText}`);
    result.innerHTML+=`<p> ${event.target.innerText} </p>`
});

reset.addEventListener("click",function(){
    result.innerHTML="<h1> </h1>"
})

number.addEventListener("click",function(){
    console.log(` le diste click a un number `);

})
    plus.addEventListener("click",function(){
        console.log(` vamos a sumar `);

    })