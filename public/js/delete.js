const deleteBtn = document.querySelectorAll('.delete-post');
const editPost = document.querySelectorAll('.edit-post')

editPost.forEach((btn)=> {
  btn.addEventListener('click', (event)=>{
  event.preventDefault()
  console.log('clicked')
  const postID= btn.getAttribute('data')
  const blogCard =document.getElementById(`post-${postID}`)
  console.log(blogCard)
  const submitBtn= document.createElement('button')
  submitBtn.setAttribute('class', 'btn btn-secondary')
  submitBtn.innerText='Submit revisions'
  const newTextArea= document.createElement('textarea')
  newTextArea.setAttribute('class', 'edit-text')
  blogCard.appendChild(newTextArea)
  blogCard.appendChild(submitBtn)

  submitBtn.addEventListener('click', async (event)=>{
    event.preventDefault()
    const text_content =newTextArea.value.trim()
    console.log(text_content)
    const editted= {
      text_content,
      id:postID
    }
    const editPost = await fetch(`/api/blogPost/edit/${postID}`,{
      method:"PUT",
      body:JSON.stringify(editted),
      headers:{
      "content-type":"application/json"
      }
    })
    if(editPost.ok){
      console.log("ok")
      document.location.reload()
    }
  })
})
})
deleteBtn.forEach((btn) =>{
  btn.addEventListener('click', async (event)=>{
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
})