const deleteBtn = document.querySelector('#delete-post');


deleteBtn.addEventListener('click', async (event)=>{
    event.preventDefault()
    const id = event.target.getAttribute('data')
 console.log(id)
  const deleted = await fetch(`/api/delete/`,{
    method: 'DELETE',
    body: JSON.stringify({id:`${id}`}),
    headers: {
        'content-type': 'application/json',
    },
  })
  if (deleted.ok) {
    console.log('deleted')
    document.location.reload()
  } else {
    console.log('not deleted')
  }
})