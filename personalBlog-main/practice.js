// import swal from "./node_modules/sweetalert/dist/sweetalert.min.js";
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';



const response=document.querySelector(".button");
const body=document.querySelector(".section");
const blurred=document.querySelector(".blurred");
const practicelist=document.querySelector('#practicelist');
const chatbutton=document.querySelector('.chatbutton');
const paragraph=document.querySelector('.paragraph');
const footer=document.querySelector('footer');
const h1=document.querySelector('h1');
const contactInfo=document.querySelector('.contactinfo')
const otherProject=document.querySelector('.otherProject')
const button2=document.querySelector('.button2')
const h2=document.querySelector('h2')


//-----------------------blur the inner page-------------------------
function disappear(){
    body.style.display="none";
    blurred.style.display="none";
}

// for (let i=0;i<response.length;i++)
//   response[i].addEventListener("click",function(){
//     body.classList.toggle("hidden");
//     blurred.classList.toggle("hidden");
//     footer.classList.toggle("footer_hidden");
//     body.scrollIntoView({behavior:'smooth'})
// });
response.addEventListener('click',function(){
    body.classList.toggle("hidden");
    blurred.classList.toggle("hidden");
    footer.classList.toggle("footer_hidden");
    h2.scrollIntoView({behavior:'smooth'})
})

button2.addEventListener('click',function(){
    otherProject.scrollIntoView({behavior:'smooth'})
})

body.addEventListener("click",function(){
    body.classList.toggle("hidden");
    blurred.classList.toggle("hidden");
    footer.classList.toggle("footer_hidden");
    h1.scrollIntoView({behavior:'smooth'})
});

blurred.addEventListener("click",function(){
    body.classList.toggle("hidden");
    blurred.classList.toggle("hidden");
    footer.classList.toggle("footer_hidden");
    h1.scrollIntoView({behavior:'smooth'})
})


chatbutton.addEventListener("click",function(){
    // body.classList.add("hidden");
    // blurred.classList.toggle("hidden");
    // footer.classList.toggle("footer_hidden");
    contactInfo.scrollIntoView({behavior:'smooth'})
   
})



// if (paragraph.textContent===""){
//    document.querySelector(".notification").style.display="none";
// };



//---------------------------------generate list of html elements
const transit=[['IT Support','2021-07 to present','JavaScript, Ajax, CSS, React, Rest API, MongoDB, Firebase, AWS EC2, MySQL, VBA, Python Flask, Web Scrap, Android, Java, Selenium'],
              ['Evaporator specilist','2020-09 to 2021-05','CPP Management, quality assurance'],
              ['Librarian', '2019-09 to 2020-03','circulation and consultation service'],
              ['Lab Associate','2018-06 to 2019-06','ongoing prostate cancer research']];


const displayitems=function(transit){
    paragraph.innerHTML="";
    transit.forEach(function(mov,i){
        const type=mov>0 ? 'deposit':'withdraw';
        const html=`<div class="items"><div class=${type}> ${mov[0]}</div><div class='description'>${mov[2]}</div> <div class='value'>${mov[1]}
        
        </div></div>`
        ;
        paragraph.insertAdjacentHTML("beforeend",html);

    });
}
displayitems(transit);


//-----------------------------scroll down to bottom and raise alert
// paragraph.onscroll = function(ev) {
    
//     if ((paragraph.offsetHeight + paragraph.scrollTop ) >= paragraph.scrollHeight) {
//         swal("You have reached the bottom!", "", "info");
//     }
 
// };



const header=document.querySelector("header");
const stickybar=function(entries){
        const [entry]=entries;
        if(entry.isIntersecting)
        header.classList.add("sticky");
        else header.classList.remove("sticky")
    }

const barObserver= new IntersectionObserver(stickybar,{root:null,threshold:0, rootMargin:'-300px'});
barObserver.observe(contactInfo);

////------------------------------adding slider events
const landview=document.querySelectorAll('.landview');
const slider=document.querySelectorAll(".slider__btn");
const slidelength=landview.length;
let curslide=1;

slider.forEach((el,index)=>el.addEventListener('click',function(){
    
    
    if(el.classList.contains('slider__btn--left')){curslide--;}
    else{curslide++}
    if (curslide>slidelength-1){curslide=0}
    else if(curslide<0){curslide=2}
    activateDot(curslide);
    landview.forEach((s,i)=>(
        s.style.transform=`translateX(${100*(i-curslide)}%)`,
        s.dataset.slide===`${curslide}`?s.classList.remove('blurred'):s.classList.add('blurred')
    ))
    
    }))
//-----------------------------select to change landivew src
const inputType = document.querySelector('.form__input--type');

var default_setting=false;

inputType.addEventListener('change',function(){
    return new Promise(function(resolve,reject){
    landview.forEach((s,i)=>(

    s.classList.add('blurred'),

    default_setting?s.src=`${i}.jpg`:s.src=`Vol${i}.jpg`,
    
    s.addEventListener('load',function(){
        resolve(s)
    }),
    s.addEventListener('error',function(){
        reject(new Error('Image not Found'))
    
    }),
    s.dataset.slide===`${curslide}`?setTimeout(function(){
        s.classList.remove('blurred')
    },500):''
    ))
    default_setting=!default_setting
    // default_setting?default_setting=false:default_setting=true;
    }).then(s=>console.log("success")).catch(err=>alert(err));

    // landview.forEach((s,i)=>(
    
    // default_setting?s.src=`${i}.jfif`:s.src=`Vol${i}.jpg`
    // ))
    // default_setting?default_setting=false:default_setting=true;
}
)


//------------------------------adding dots events
const dots=document.querySelector('.dots');
landview.forEach((_,i)=>(
    dots.insertAdjacentHTML('beforeend',`<button class="dots__dot" data-slide=${i}></button>`)
))

const dot=document.querySelectorAll('.dots__dot');

const activateDot=function(slide){
    dot.forEach(el=>el.classList.remove('--active'))
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('--active')
}

dot.forEach((s,i)=>(
    s.addEventListener('click',function(e){
    const current=e.target.dataset.slide;
    activateDot(current);
    landview.forEach((s,i)=>(
        s.style.transform=(`translateX(${100*(i-current)}%)`),
        s.dataset.slide===`${current}`?s.classList.remove('blurred'):s.classList.add('blurred')
    
    )
    )
    })))
activateDot(curslide);
//-------------window exiting alert----------------------------------------
/// It is fired only if there was ANY interaction of the user with the site. Without ANY interaction (even one click anywhere) event onbeforeunload won't be fired.
// window.addEventListener("beforeunload",function(event){
//     event.preventDefault();
//     return event.returnValue='hello';
// })


//-------------------------------------------------

