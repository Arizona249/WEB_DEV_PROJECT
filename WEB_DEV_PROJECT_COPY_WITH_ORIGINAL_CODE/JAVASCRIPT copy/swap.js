const firstContainer=document.getElementById("swapone");
const secondContainer=document.getElementById("swaptwo");
const swapBtn=document.querySelector(".exchangebtn");
const parentContainer=document.querySelector(".swapcontainer");

swapBtn.addEventListener("click",()=>{
    parentContainer.classList.toggle("rearrange");
});

console.log(firstContainer,secondContainer,swapBtn)