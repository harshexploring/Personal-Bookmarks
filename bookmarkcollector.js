let a=document.getElementsByClassName("content");
let b=document.getElementsByTagName("button");
for (i=0;i<(a.length);i++){
    a[i].style.display="none";
    
}

// for button1
b1=document.getElementById("button1")
b1.addEventListener("click",function(){
    if(a[0].style.display=="none"){
        a[0].style.display="grid";
        b1.style.transform="rotate(90deg)";
    }
    else if(a[0].style.display=="grid"){
        a[0].style.display="none";
        b1.style.transform="rotate(0deg)";
    }
    
})
// for button2
b2=document.getElementById("button2")
b2.addEventListener("click",function(){
    if(a[1].style.display=="none"){
        a[1].style.display="grid";
        b2.style.transform="rotate(90deg)";
        

    }
    else if(a[1].style.display=="grid"){
        a[1].style.display="none";
        b2.style.transform="rotate(0deg)";
    }
})
b3=document.getElementById("button3")
b3.addEventListener("click",function(){
    if(a[2].style.display=="none"){
        a[2].style.display="grid";
        b3.style.transform="rotate(90deg)";
    }
    else if(a[2].style.display=="grid"){
        a[2].style.display="none";
        b3.style.transform="rotate(0deg)";
    }
})



// para.style.backgroundColor="rgb(59, 51, 50)";
// para.style.height="30%";
// para.style.width="200px";
// para.style.display="flex";
// para.style.color="white";
// para.style.padding="10px 7px";
// para.style.border="3px solid white";
// para.style.borderradius="5px";
// para.style.justifycontent= "center";
// para.style.alignitem="center";
// para.style.textalign="center";
// para.style.transitionduration="0.5s";




