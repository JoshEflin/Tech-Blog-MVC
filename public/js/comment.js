const blogForm= document.querySelectorAll('.comment-form');
const UID = document.getElementById('UID').getAttribute('data-UID');


blogForm.forEach((form)=> {
    const id =form.getAttribute('data-postId')
    
    const commentBox = document.querySelector(`#blog-comment-${id}`)
    
    
    
    const commentBtn= document.querySelector(`#comment-btn-${id}`)
    
    commentBtn.addEventListener('click', async (event)=> {
        const commentText= commentBox.value.trim()
        event.preventDefault();
        const body = 
            {
            text_content:commentText,
            blog_id: id,
            user_id:UID,
            }
        const newComment = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
            },
        })
        if(newComment.ok){
            console.log('response received')
            document.location.reload()
        }
    })
})



console.log('connected comment JS')

