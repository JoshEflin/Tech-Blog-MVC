const logoutBtn = document.querySelector('#logout-nav');
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