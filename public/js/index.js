const navLoginBtn = document.querySelector("#login-nav");
const navSignUpBtn = document.querySelector('#signup-nav');
const dashBtn = document.querySelector('#dash-nav');
const logoutBtn = document.querySelector('#logout-nav')



console.log('connected')
logoutBtn.addEventListener('click', async ()=>{
    const response = await fetch('/api/logout', {
        method:'POST',
        headers: {'content-type': 'application/json'}
    });
    if (response.ok){
        document.location.replace('/');
    } else {
        alert('logout failed due to developer mistake!')
    }
    });
    
dashBtn.addEventListener('click', ()=>{
    document.location.replace('/dashboard');
})
navLoginBtn.addEventListener('click', ()=> {
    document.location.replace('/login')
})
navSignUpBtn.addEventListener('click', ()=>{
    document.location.replace('/signup');
})
