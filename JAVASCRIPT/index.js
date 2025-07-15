let theme=localStorage.getItem("theme");
console.log(theme)
const  body=document.querySelector("body");
const langauageContainer=document.querySelector(".langauagecontainer");
const saveBtn=document.querySelector(".savebtn");
const overlay=document.querySelector(".overlay");
const languageBtn=document.querySelector(".earthicon-bg");
const closeBtn=document.querySelector(".closebtn");
const searchBtn=document.querySelector(".searchicon-bg");
const navBar=document.querySelector("nav");
const searchBarContainer=document.querySelector(".navbarsearchcontainer");
const globeLanguageContainer=document.querySelector(".globe-language-container");
const navItems=document.querySelector("nav .navitems1 .navbar-list");
const touchBarContainer=document.querySelector(".touchbarcontainer");
const innerTouchBar=document.querySelector(".touchbar");
const intialPostionY=-170;//Position of the container before movement
const inputContainer=document.querySelector(".inputcontainer");
const input=document.querySelector(".inputcontainer input");
const clearBtn=document.querySelector(".clearbtn");

const sunIconDestop=document.querySelector("#sun");
const moonIconDestop=document.querySelector("#moon");
const sunIconM=document.querySelector("#sunM");
const moonIconM=document.querySelector("#moonM");

// console.log(sunIconDestop,sunIconM)
// console.log(moonIconDestop,moonIconM)


// THEME LOGIC

if(theme!=="dark"){
    enableLightMode();
}
else{
    enableDarkMode();
}

function enableDarkMode(){
    body.classList.remove("lightmode");
    localStorage.setItem("theme","dark");
}
function enableLightMode(){
    body.classList.add("lightmode");
    localStorage.setItem("theme","light");
}


sunIconDestop.addEventListener("click",()=>{
    theme=localStorage.getItem("theme");
    console.log(theme)
    if(theme !=="light"){
        enableLightMode();
        console.log(theme)
    }
})

sunIconM.addEventListener("click",()=>{
    theme=localStorage.getItem("theme");
    if(theme !=="light"){
        enableLightMode();
    } 
})
moonIconDestop.addEventListener("click",()=>{
    theme=localStorage.getItem("theme");
    if(theme==="light"){
        enableDarkMode();
    }
})
moonIconM.addEventListener("click",()=>{
    theme=localStorage.getItem("theme");
    if(theme==="light"){
        enableDarkMode();
    }
})














languageBtn.addEventListener("click",()=>{
    console.log("Entered")
    navBar.classList.remove("showLogo");
    body.classList.add("show");
    langauageContainer.classList.add("showCard");
    console.log("Got to the end");
});
saveBtn.addEventListener("click",()=>{
    body.classList.remove("show");
    langauageContainer.classList.remove("showCard");
    if(langauageContainer.classList.contains("showCard")){
        // console.log("Got to check")
        langauageContainer.classList.remove("showCard");
        console.log("Got to check")
        navItems.style.display="flex";
        // console.log(window.innerWidth<768)//this is true on small display
    }
    else{
        navItems.style.display="flex";
        
    }

});
closeBtn.addEventListener("click",()=>{
    body.classList.remove("show");
    langauageContainer.classList.remove("showCard");
    // langauageContainer.classList.remove("showCard");

});

overlay.addEventListener("click",()=>{
    body.classList.remove("show");
    langauageContainer.classList.remove("showCard");
    searchBarContainer.classList.remove("showSearchbar");
    if(langauageContainer.classList.contains("showCard")){
        // console.log("Got to check")
        langauageContainer.classList.remove("showCard");
        navItems.style.display="flex";
        // console.log(window.innerWidth<768)//this is true on small display
    }
    else{
        navItems.style.display="flex"
    }
    
});
searchBtn.addEventListener("click",()=>{
    body.classList.add("show");
    navBar.classList.add("showLogo");
    searchBarContainer.classList.add("showSearchbar");
});
//THE LANGAUAGE CONTAINER FOR MOBILE VIEW
globeLanguageContainer.addEventListener("click",()=>{
    console.log("Entered")
    navBar.classList.remove("showLogo");
    body.classList.add("show");
    langauageContainer.classList.add("showCard");
    hideOrShowNavBarWhenContainerIsCalled();
    callLanguageContainerPopUpOnMobile();
    scrollToTheTopOfPage();
    console.log("Got to the end");
});


// THIS IS TO ADD A TOUCH EVENT TO CLOSE  POPUP
let newPositionY, startingPosition,transformValue, differencesInMovement,currentPosition;
    
touchBarContainer.addEventListener("touchstart",(e)=>{
    // console.log(e.touches[0].clientY);
    console.log("Start");
    // console.log(langauageContainer.offsetHeight)
    startingPosition=e.touches[0].clientY
    // console.log(startingPosition)
    
});
touchBarContainer.addEventListener("touchmove",(e)=>{
    console.log("moved");
    currentPosition=e.touches[0].clientY;
    differencesInMovement=currentPosition-startingPosition;
    // console.log(`${differencesInMovement}px`)
    if(differencesInMovement >1 && differencesInMovement<100){
        if(langauageContainer.classList.contains("showCard")&&body.classList.contains("show")){
            e.preventDefault();//stops scrolling 
            transformValue=intialPostionY+differencesInMovement
            langauageContainer.style.transform=`translateY(${transformValue}px)`;
        }
        else{
            return;// it worked !!!!!!!!!!!!!!!!!!!!!!!!!!!!😁😁😁😁😁😁😁😁😁😁😁😁
        }
    }
    else if(differencesInMovement>=100){
        langauageContainer.style.transform=""
        langauageContainer.classList.remove("showCard");
        body.classList.remove("show");
        hideOrShowNavBarWhenContainerIsCalled();

    }
    else{
            
        console.log("Omo do nothing");
    }
    
    
});
touchBarContainer.addEventListener("touchend",()=>{
    if(differencesInMovement >1 && differencesInMovement<100){
        langauageContainer.style.transform="";
        langauageContainer.classList.add("showCard");
    }
    else if(differencesInMovement>=100){
        langauageContainer.style.transform=""
        langauageContainer.classList.remove("showCard");
        body.classList.remove("show");
        hideOrShowNavBarWhenContainerIsCalled();

    }

    
});









// THIS IS FOR THE SEARCH BUTTON THAT TURNS INTO A SEARCH BAR
input.onkeyup=function(){
    // console.log("Here");
    clearBtn.classList.add("show-clearbtn");
    if(input.value<=0){
        clearBtn.classList.remove("show-clearbtn")
    }
}
clearBtn.onclick=function(){
    // console.log("Clicked")
    input.value="";
    clearBtn.classList.toggle("show-clearbtn");
}


function hideOrShowNavBarWhenContainerIsCalled(){
    if(body.classList.contains("show")){
        navItems.style.display="none";
    }
    else{
        navItems.style.display="flex";

    }
}

function callLanguageContainerPopUpOnMobile(){
    langauageContainer.classList.add("showCard");
}
function scrollToTheTopOfPage(){
    window.scrollTo({
        top:0,
        behaviour:"smooth"
    });
}
// window.addEventListener("resize",()=>{
//     alert(window.innerWidth)
// })
