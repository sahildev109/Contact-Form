const form=document.getElementById('frm')
const sucs=document.querySelector('.flx')
const btn=document.getElementById("submit");

btn.addEventListener('click', (e)=>{
e.preventDefault()

const firstName=document.getElementById('first-name').value.trim();
const lastName=document.getElementById('last-name').value.trim();
const email=document.getElementById('e-mail').value.trim();
const query=document.querySelector('input[name="query-type"]:checked');
const message=document.getElementById('txt').value.trim();
const consent=document.getElementById('check').checked;


let isValid=true;

const isEmail=(em)=>{
    const emailValidator=RegExp(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/
);
return emailValidator.test(em);
}


if(firstName===''){
    isValid=false;
document.getElementById("er1").style.display='block';
document.getElementById("first-name").style.border='1px solid hsl(0, 66%, 54%)';
}else{
    document.getElementById("er1").style.display='none';
document.getElementById("first-name").style.border='1px solid hsl(186, 15%, 59%)';
}

if(lastName===''){
    isValid=false;
document.getElementById("er2").style.display='block';
document.getElementById("last-name").style.border='1px solid hsl(0, 66%, 54%)';
}else{
    document.getElementById("er2").style.display='none';
document.getElementById("first-name").style.border='1px solid hsl(186, 15%, 59%)';
}

if(!isEmail(email)){
    isValid=false;
    document.getElementById("er3").style.display='block';
    document.getElementById("e-mail").style.border='1px solid hsl(0, 66%, 54%)';
}else{
    document.getElementById("er3").style.display='none';
document.getElementById("e-mail").style.border='1px solid hsl(186, 15%, 59%)';
}

if(!query){
    isValid=false;
    document.getElementById("er4").style.display='block';
}else{
    document.getElementById("er4").style.display='none';
}

if(message===''){
    isValid=false;
    document.getElementById("er5").style.display='block';
    document.getElementById("txt").style.border='1px solid hsl(0, 66%, 54%)';
}else{
    document.getElementById("er5").style.display='none';
document.getElementById("txt").style.border='1px solid hsl(186, 15%, 59%)';
}

if(!consent){
    isValid=false;
    document.getElementById("er6").style.display='block';
}else{
    document.getElementById("er6").style.display='none';
}

if(isValid){
    sucs.classList.add('active');
    form.reset()
}


}
)