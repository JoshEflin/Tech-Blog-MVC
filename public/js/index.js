const navLoginBtn = document.querySelector("#login-nav");
const navSignUpBtn = document.querySelector('#signup-nav');
const dashBtn = document.querySelector('#dash-nav');




console.log('connected')

    
dashBtn.addEventListener('click', ()=>{
    console.log('clicked dashboard-nav')
    document.location.replace('/dashboard');
})
navLoginBtn.addEventListener('click', ()=> {
    console.log('clicked login-nav')
    document.location.replace('/login')
})
navSignUpBtn.addEventListener('click', ()=>{
    console.log('clicked signup-nav')
    document.location.replace('/signup');
})
