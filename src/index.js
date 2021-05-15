// Deliverables
// - A user can select the user they want to post or comment as
// - From the create a post section, a user can:
//     - Enter a post's image URL
//     - Enter a post's title
//     - Enter a post's content
//     - Create a post and view it in the feed
// - From the feed section, a user can:
//     - View a post and the owner of the post
//     - View a posts' comments and the owner of the comments
//     - Add a comment to a post
//   - Add a like to a post

// find the div in which our content goes
const bodyEl = document.querySelector("#root")

// create the header and main sections of the page
const headerEL = document.createElement("header")
headerEL.classList.add("main-header")

const mainEl = document.createElement("main")
mainEl.classList.add("wrapper")

let currentUser = undefined
let userWidgetArray = []

bodyEl.append(headerEL, mainEl)

// creating the header
const headerContainerEl = document.createElement("div")
headerContainerEl.classList.add("wrapper")
headerEL.append(headerContainerEl)

// create a function that adds users from the database
function addUser (user) {
    const userWidget = document.createElement("div")
    userWidget.classList.add("chip")
    headerContainerEl.append(userWidget)

    const userAvatar = document.createElement("div")
    const userName = document.createElement("span")

    userAvatar.classList.add("avatar-small")

    userName.innerText = user.username

    userWidget.append(userAvatar, userName)
    
    const userImage = document.createElement("img")
    userImage.classList.add("image-correction")
    userImage.setAttribute("src", user.avatar)
    userImage.setAttribute("alt", user.username)
    
    userAvatar.append(userImage)

    userWidgetArray.push(userWidget)

    return userWidget
}


function addUsers (users) {
    for (const user of users) {
        addUser(user).addEventListener("click", function () {
            currentUser = user
            for (const widget of userWidgetArray) {
                widget.classList.remove("active")
            }
            userWidgetArray[currentUser.id - 1].classList.add("active")
            return currentUser
        })
    }
}

fetch("http://localhost:3000/users")
.then(function (response) {
    return response.json()
    })
    .then(function (users) {
        addUsers(users)
    })

    
// adding main child elements
const postSectionEl = document.createElement("section")
postSectionEl.classList.add("create-post-section")

const feedSectionEl = document.createElement("section")
feedSectionEl.classList.add("feed")

mainEl.append(postSectionEl, feedSectionEl)

// the posting form
const postForm = document.createElement("form")
postForm.setAttribute("id", "create-post-form")
postForm.setAttribute("autocomplete", "off")

postSectionEl.append(postForm)

const postFormTitle = document.createElement("h2")
postFormTitle.innerText = "Create a post"

const imageLabel = document.createElement("label")
imageLabel.setAttribute("for", "image")
imageLabel.innerText = "Image"

const imageInput = document.createElement("input")
imageInput.setAttribute("id", "image")
imageInput.setAttribute("name", "image")
imageInput.setAttribute("type", "text")

const titleLabel = document.createElement("label")
titleLabel.setAttribute("for", "title")
titleLabel.innerText = "Title"

const titleInput = document.createElement("input")
titleInput.setAttribute("id", "title")
titleInput.setAttribute("name", "title")
titleInput.setAttribute("type", "text")

const contentLabel = document.createElement("label")
contentLabel.setAttribute("for", "content")
contentLabel.innerText = "Content"

const contentInput = document.createElement("textarea")
contentInput.setAttribute("id", "content")
contentInput.setAttribute("name", "content")
contentInput.setAttribute("rows", "2")
contentInput.setAttribute("columns", "30")

const actionButtonEl = document.createElement("div")
actionButtonEl.classList.add("action-btns")

postForm.append(postFormTitle, imageLabel, imageInput, titleLabel, titleInput, contentLabel, contentInput, actionButtonEl)

const postPreviewButton = document.createElement("button")
postPreviewButton.setAttribute("id", "preview-btn")
postPreviewButton.setAttribute("type", "button")
postPreviewButton.innerText = "Preview"

const postSubmitButton = document.createElement("button")
postSubmitButton.setAttribute("type", "submit")
postSubmitButton.innerText = "Post"

actionButtonEl.append(postPreviewButton, postSubmitButton)

postForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const post = {
        "title": postForm.title.value,
        "content": postForm.content.value,
        "image": {
          "src": postForm.image.value,
          "alt": postForm.title.value
        },
        "likes": 0,
        "userId": currentUser.id
      }

    fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (newPost) {
        addPost(newPost)
    })
})

// the feed section
const feedList = document.createElement("ul")
feedList.classList.add("stack")

feedSectionEl.append(feedList)

// create a function to produce posts
function addPost (post) {
    const postEl = document.createElement("li")
    postEl.classList.add("post")
    
    feedList.append(postEl)
    
    // adding children to list items
    const posterAvatarEl = document.createElement("div")
    posterAvatarEl.classList.add("chip")
    
    const postImageEl = document.createElement("div")
    postImageEl.classList.add("post--image")
    
    const postContentEl = document.createElement("div")
    postContentEl.classList.add("post--content")
    
    const postCommentsContainer = document.createElement("div")
    postCommentsContainer.classList.add("post--comments")
    
    postEl.append(posterAvatarEl, postImageEl, postContentEl, postCommentsContainer)
    
    // adding poster avatar to post
    const posterAvatar = document.createElement("div")
    const posterName = document.createElement("span")
    
    posterAvatar.classList.add("avatar-small")
    
    fetch(`http://localhost:3000/users/${post.userId}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (user) {
            posterName.innerText = user.username
        })
    
    posterAvatarEl.append(posterAvatar, posterName)
    
    const posterImage = document.createElement("img")
    posterImage.classList.add("image-correction")
    fetch(`http://localhost:3000/users/${post.userId}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (user) {
            posterImage.setAttribute("src", user.avatar)
        })
    fetch(`http://localhost:3000/users/${post.userId}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (user) {
            posterImage.setAttribute("alt", user.username)
        })
    
    posterAvatar.append(posterImage)
    
    // add image
    const postImage = document.createElement("img")
    postImage.setAttribute("src", post.image.src)
    postImage.setAttribute("alt", post.image.alt)
    postImage.classList.add("image-correction")
    
    postImageEl.append(postImage)
    
    // add content
    const postHeader = document.createElement("h2")
    postHeader.innerText = post.title

    const postLikesButton = document.createElement("button")
    postLikesButton.innerText = `❤`

    postLikesButton.addEventListener("click", function () {
        fetch(`http://localhost:3000/posts/${post.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({likes: ++post.likes}) 
        })
        .then(function (response) {
            return response.json()
        })
        .then(function (updatedPost) {
            postLikes.innerText = `Likes ${updatedPost.likes}`
        })
    })

    const postLikes = document.createElement("span")
    postLikes.innerText = `Likes ${post.likes}`
    
    const postContent = document.createElement("p")
    postContent.innerText = post.content
    
    postContentEl.append(postHeader, postLikesButton, postLikes, postContent)
    
    // add comments elements
    const commentsHeader = document.createElement("h3")
    commentsHeader.innerText = "Comments"
    
    const commentForm = document.createElement("form")
    commentForm.setAttribute("id", "create-comment-form")
    commentForm.setAttribute("autocomplete", "off")

    const commentBlock = document.createElement("div")
    commentBlock.classList.add("post--comments")

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault()

        const comment = {
            "content": commentForm.comment.value,
            "userId": currentUser.id,
            "postId": post.id
          }

        fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
        .then(function (response) {
           return response.json()
        })
        .then(function (newComment) {
            const commentContainer = document.createElement("div")
            commentContainer.classList.add("post--comment")
        
            const commentAvatar = document.createElement("div")
            const commentEl = document.createElement("p")
            
            commentAvatar.classList.add("avatar-small")

            commentEl.innerText = newComment.content
            
            commentContainer.append(commentAvatar, commentEl)
            
            const commentImage = document.createElement("img")
            commentImage.classList.add("image-correction")
            fetch(`http://localhost:3000/users/${newComment.userId}`)
                .then(function (response) {
                    return response.json()
                })
                .then(function (user) {
                    commentImage.setAttribute("src", user.avatar)
                })
            fetch(`http://localhost:3000/users/${newComment.userId}`)
                .then(function (response) {
                    return response.json()
                })
                .then(function (user) {
                    commentImage.setAttribute("alt", user.username)
                })
            
            commentAvatar.append(commentImage)
        
            commentBlock.append(commentContainer)
        })
    })
    
    postCommentsContainer.append(commentsHeader, commentBlock)

    fetch("http://localhost:3000/comments")
    .then(function (response) {
        return response.json()
    })
    .then(function (serverComments) {
         for (const comment of serverComments) {
             if (post.id===comment.postId) {
                 const commentContainer = document.createElement("div")
                 commentContainer.classList.add("post--comment")
             
                 const commentAvatar = document.createElement("div")
                 const commentEl = document.createElement("p")
                 
                 commentAvatar.classList.add("avatar-small")
         
                 commentEl.innerText = comment.content
                 
                 commentContainer.append(commentAvatar, commentEl)
                 
                 const commentImage = document.createElement("img")
                 commentImage.classList.add("image-correction")
                 fetch(`http://localhost:3000/users/${comment.userId}`)
                     .then(function (response) {
                         return response.json()
                     })
                     .then(function (user) {
                         commentImage.setAttribute("src", user.avatar)
                     })
                 fetch(`http://localhost:3000/users/${comment.userId}`)
                     .then(function (response) {
                         return response.json()
                     })
                     .then(function (user) {
                         commentImage.setAttribute("alt", user.username)
                     })
                 
                 commentAvatar.append(commentImage)
             
                 commentBlock.append(commentContainer)
             }
         }
    })
    
    // comment form content
    const commentLabel = document.createElement("label")
    commentLabel.setAttribute("for", "comment")
    commentLabel.innerText = "Add comment"
    
    const commentInput = document.createElement("input")
    commentInput.setAttribute("id", "comment")
    commentInput.setAttribute("name", "comment")
    commentInput.setAttribute("type", "text")
    
    const commentButton = document.createElement("button")
    commentButton.setAttribute("type", "submit")
    commentButton.innerText = "Comment"
    
    commentForm.append(commentLabel, commentInput, commentButton)

    postCommentsContainer.append(commentForm)
}

fetch("http://localhost:3000/posts")
    .then( function (response) {
        return response.json()
    })
    .then( function (posts) {
        for (const post of posts) {
            addPost(post)
        }
    })
