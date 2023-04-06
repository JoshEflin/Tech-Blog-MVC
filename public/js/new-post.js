const newPost = document.querySelector('#new-post-btn');
const postForm = document.querySelector('.new-post-form')

const UID= postForm.getAttribute('data-UID')

// TODO: add post
// add form to view, create post request, refresh page
console.log(postForm)


// todo
// delete for comments

// todo
// edit for comments and posts
newPost.addEventListener('click', async (event)=>{
    event.preventDefault()
    console.log('clicked')
    const text_content = document.querySelector('#blog-text').value.trim()
    const title = document.querySelector('#blog-title').value.trim()
    const body = {
        title,
        text_content,
        user_id: UID
        }
    const createPost = await fetch('/api/blogPost', {
        method: "POST",
        body:JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        },
    })
    if (createPost.ok){
        console.log('everything operational')
        document.location.reload()
    }
})