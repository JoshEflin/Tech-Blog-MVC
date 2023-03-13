const navLoginBtn = document.querySelector("#login-nav");
const navSignUpBtn = document.querySelector('#signup-nav');
const dashBtn = document.querySelector('#dash-nav');
const homeBtn = document.querySelector('#home-nav')




console.log('connected')

homeBtn.addEventListener('click',() =>{
    document.location.replace('/');
})
dashBtn.addEventListener('click', ()=>{
    console.log('clicked dashboard-nav')
    document.location.replace('/dashboard');
})
if(navLoginBtn){
navLoginBtn.addEventListener('click', ()=> {
    console.log('clicked login-nav')
    document.location.replace('/login')
})
}
if(navSignUpBtn){
navSignUpBtn.addEventListener('click', ()=>{
    console.log('clicked signup-nav')
    document.location.replace('/signup');
})
}
