const allPoolsbtn=document.querySelector(".allpoolsbtn");
const myPoolsbtn=document.querySelector(".mypoolsbtn");
const tableHeadBtns=document.querySelectorAll(".buttons-container button")
const tableContainer=document.querySelector(".tablecontainer");
const myPoolsContainer=document.querySelector(".my-pools-container");
const resetBtn=document.querySelector(".hidden-reset-btn");
const resetBtnContainer=document.querySelector(".resetbtncontainer");


allPoolsbtn.addEventListener("click",()=>{
    // allPoolsbtn.classList.contains("isSelected")?console.log("Class Exists"):allPoolsbtn.classList.add("isSelected")
    if(!allPoolsbtn.classList.contains("isSelected")){
        myPoolsbtn.classList.remove("isSelected");
        allPoolsbtn.classList.add("isSelected");
        myPoolsContainer.classList.remove("showPoolsContainer");
        tableContainer.classList.remove("clicked");
    }
    else{
        return;
    }
});
myPoolsbtn.addEventListener("click",()=>{
    // myPoolsBtn.classList.contains("isSelected")?console.log("Class Exists"):myPoolsBtn.classList.add("isSelected")
    if(!myPoolsbtn.classList.contains("isSelected")){
        allPoolsbtn.classList.remove("isSelected");
        myPoolsbtn.classList.add("isSelected");
        tableContainer.classList.add("clicked");
        myPoolsContainer.classList.add("showPoolsContainer");
    }
    else{
        return;
    }
});

tableHeadBtns.forEach((btn,index,array)=>{
    btn.addEventListener("click",()=>{
        btn.classList.toggle("isClicked");
        if(btn.classList.contains("isClicked")){
            resetBtn.classList.add("revealResetBtn");
            resetBtnContainer.style.margin="0 0 20px 0";
        }
        else{
            for(let i=0;i<1;i++){
                if(tableHeadBtns[i].classList.contains("isClicked")||tableHeadBtns[i+1].classList.contains("isClicked")||tableHeadBtns[i+2].classList.contains("isClicked")){
                    return;
                }
                else{
                    resetBtn.classList.remove("revealResetBtn");
                    resetBtnContainer.style.margin="0 0 0px 0";
                }
            }
            console.log("one")
        }
    })
})
resetBtn.onclick=()=>{
    tableHeadBtns.forEach(btn=>{
        btn.classList.remove("isClicked")
        resetBtn.classList.remove("revealResetBtn");
        resetBtnContainer.style.margin="0 0 0px 0";
    })
}
