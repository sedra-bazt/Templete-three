let maincolor=localStorage.getItem("color-options");

if(maincolor!==null){
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("color-options"))
    document.querySelectorAll(".color-list li").forEach((ele)=>{
        ele.classList.remove("active");

        if(ele.dataset.color===maincolor){
            ele.classList.add("active")
        }
    })
}
let icons=document.querySelector("i");

icons.addEventListener("click",function(e){
    let setting=document.querySelector(".settings");
    setting.classList.toggle("open");//add and remove
    icons.classList.toggle("fa-spin")
   
})

// switch color 

    let list=document.querySelectorAll(".color-list li")
    list.forEach((ele)=>{
        ele.addEventListener("click",function(e){
            document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
            localStorage.setItem("color-options", e.target.dataset.color)
            list.forEach((ele)=>{
                ele.classList.remove("active");

            })
            e.currentTarget.classList.add("active")
            })
        })

   
// switch bacground
    let raodomInterval;
    let randomOptions=true;
    let bacgroundlocalitem=localStorage.getItem("backbround-options");
    if(bacgroundlocalitem!==null){
        if(bacgroundlocalitem ==='true'){
            randomOptions=true;
        }else{
            randomOptions=false;
        }

        document.querySelectorAll(".span-content span").forEach((ele)=>{
            ele.classList.remove("active");

        });
        if(bacgroundlocalitem ==='true'){
            document.querySelector(".span-content .yes").classList.add("active")
        }else{
            document.querySelector(".span-content .no").classList.add("active")
        }
    }
    let randoBackground=document.querySelectorAll(".span-content span");

    randoBackground.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        
        randoBackground.forEach((ele)=>{
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active");
        if(e.target.dataset.back==="yes"){
            randomOptions=true;
            RamdomImages();
            localStorage.setItem("backbround-options",true)
        }else{
            randomOptions=false;
            clearInterval(raodomInterval);
            localStorage.setItem("backbround-options",false)
        }
    })
    
    })




// select landing page elment
let landingpage=document.querySelector(".landing-page");

// get arry of images
let arrayimages=["freestocks-hRVrvH9-dG0-unsplash.jpg","subtle-cinematics-acZd3gWgfOw-unsplash.jpg","images.jfif","landscape-road-wallpaper-preview.jpg"];


function RamdomImages(){
    if(randomOptions===true)
        raodomInterval= setInterval(() => {
        let radomnum=Math.floor(Math.random()*arrayimages.length);
        landingpage.style.backgroundImage='url("images/'+arrayimages[radomnum]+ '")';
       
    }, 1000);
}
// fill span

let section=document.querySelector(".our-skillis");

window.onscroll=function(){

    let skillisoffsetTop=section.offsetTop;
    
    let skillisOuterHeight=section.offsetHeight;

    let windowHeight=this.innerHeight;
    let hello=this.pageYOffset;
if(hello > (skillisoffsetTop + skillisOuterHeight - windowHeight)){
// console.log("hello")
    let span=document.querySelectorAll(".skill-box .skill-progress span");

    span.forEach((ele)=>{
        ele.style.width=ele.dataset.fill;
    })
}
}

//create overlay to img

let images=document.querySelectorAll(".gallery img");
images.forEach(img=>{
    img.addEventListener("click",(e)=>{
        let overlay=document.createElement("div");
        overlay.className="popup-overlay";
        document.body.appendChild(overlay);

        let popupbox=document.createElement("div");
        popupbox.className="popup-box";
        if(img.alt!== null){
            let imgheading=document.createElement("h4");
            let imgText=document.createTextNode(img.alt);
            console.log(imgText);
            imgheading.appendChild(imgText);
            popupbox.appendChild(imgheading)
        }
        let span=document.createElement("span");
        span.className="spaner";
        let spanText=document.createTextNode("x");
        span.addEventListener("click",e=>{
            document.body.removeChild(popupbox)
            document.body.removeChild(overlay)
        })
        document.onkeyup=function(e){
            if(e.key==="Escape"){
               document.body.removeChild(popupbox)
               document.body.removeChild(overlay)
            }
        }
        span.appendChild(spanText);

        popupbox.appendChild(span);

        let popupimg=document.createElement("img");

        popupimg.src=img.src;

        console.log(popupimg.src);
       
        popupbox.appendChild(popupimg);
      
        document.body.appendChild(popupbox);
        
        
    })
})

let year=document.querySelector(".year");

let div=document.querySelectorAll(".timeline-content div");

year.addEventListener("click",e=>{

    div.forEach((ele)=>{

        ele.classList.add("active");

    })
})


let month=document.querySelector(".month");

let div2=document.querySelectorAll(".timeline-countainer div");

month.addEventListener("click",e=>{

    div2.forEach((ele)=>{

        ele.classList.add("active");

    })
})

// craete boluttes

let boluttes=document.querySelectorAll(".navigation-bolutte li")

let last=document.querySelectorAll(".last li")

boluttes.forEach(ele=>{

    ele.addEventListener("click",e=>{
        
       boluttes.forEach((ele)=>{
       
        ele.classList.remove("active")

       })
       e.currentTarget.classList.add("active")

       last.forEach((li=>{
       
        li.style.opacity=0
        
       }))

     document.querySelector(e.currentTarget.dataset.section).style.opacity="1"
     
     })

    })
//show boluttes
let show=document.querySelectorAll(".settings .span-cont span ")

let bolutt=document.querySelector(".navigation-bolutte ");

let las=document.querySelector(".last")

let boluttelocal=localStorage.getItem("boluttes-options");

if(boluttelocal!==null){

    show.forEach((ele)=>{

        ele.classList.remove("active")

    })
    if(boluttelocal==='block'){

        bolutt.style.display="block";

        las.style.display='block';
        
        document.querySelector(".settings .show").classList.add("active")
       
    }else{
        bolutt.style.display="none";

        las.style.display='none';

        document.querySelector(".settings  .hide").classList.add("active");
    }
}
show.forEach((ele)=>{

    ele.addEventListener("click",e=>{
        show.forEach((ele)=>{
            ele.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
    if(ele.dataset.display==='show'){

        bolutt.style.display="block";

        las.style.display='block';

        localStorage.setItem("boluttes-options",'block');

    }else{
          bolutt.style.display="none";

          las.style.display='none';

          localStorage.setItem("boluttes-options",'none');
    }
    })
})

  

// create toggle-menue


let links=document.querySelector("header .list ");
let toggleMenue=document.querySelector("header .toggle-menue");
toggleMenue.addEventListener("click",e=>{
document.querySelector("header .list").classList.toggle("open")
toggleMenue.classList.toggle("active")
})



//stop Propagation
toggleMenue.addEventListener("click",(e)=>{
    e.stopPropagation();
})


document.addEventListener("click",(e)=>{
    if(e.target!== toggleMenue && e.target!==links){
       if(links.classList.contains("open")){
        links.classList.toggle("open");
        toggleMenue.classList.toggle("active")
       }
    }
})

//stop Propagation
links.addEventListener("click",(e)=>{
    e.stopPropagation();
})