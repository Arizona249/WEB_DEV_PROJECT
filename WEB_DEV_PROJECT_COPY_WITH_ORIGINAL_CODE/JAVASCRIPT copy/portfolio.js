const inputContainer2=document.querySelector(".input-container");
const input2=document.querySelector(".input-container input");
const clearBtn2=document.querySelector(".clear-btn");

input2.onkeyup=function(){
    // console.log("Here");
    clearBtn2.classList.add("show-clear-btn");
    if(input2.value<=0){
        clearBtn2.classList.remove("show-clear-btn")
    }
}
clearBtn2.onclick=function(){
    // console.log("Clicked")
    input2.value="";
    clearBtn2.classList.toggle("show-clear-btn");
}