// find the div in which our content goes
const bodyEl = document.querySelector("#root")

// create the header and main sections of the page
const headerEL = document.createElement("header")
headerEL.classList.add("main-header")

const mainEl = document.createElement("main")
mainEl.classList.add("wrapper")

bodyEl.append(headerEL, mainEl)

// creating the header
const headerContainerEl = document.createElement("div")
headerContainerEl.classList.add("wrapper")
headerEL.append(headerContainerEl)

// we want to display an initial section for the current user, then other sections for any other users we may have
const currentUserWidget = document.createElement("div")
const userTwoWidget = document.createElement("div")
const userThreeWidget = document.createElement("div")

currentUserWidget.classList.add("chip", "active")
userTwoWidget.classList.add("chip")
userThreeWidget.classList.add("chip")

headerContainerEl.append(currentUserWidget, userTwoWidget, userThreeWidget)

// current user widget
const currentUserAvatar = document.createElement("div")
const currentUserName = document.createElement("span")

currentUserAvatar.classList.add("avatar-small")

currentUserName.innerText = "Salvador Dali"

currentUserWidget.append(currentUserAvatar, currentUserName)

const currentUserImage = document.createElement("img")

currentUserImage.classList.add("image-correction")
currentUserImage.setAttribute("src", "https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg")
currentUserImage.setAttribute("alt", "Salvador Dali")

currentUserAvatar.append(currentUserImage)

// other user widgets
const userTwoAvatar = document.createElement("div")
const userTwoName = document.createElement("span")

userTwoAvatar.classList.add("avatar-small")

userTwoName.innerText = "Picasso"

userTwoWidget.append(userTwoAvatar, userTwoName)

const userTwoImage = document.createElement("img")

userTwoImage.classList.add("image-correction")
userTwoImage.setAttribute("src", "https://www.sartle.com/sites/default/files/images/artist/pablo-picasso-137216-5115406.jpg")
userTwoImage.setAttribute("alt", "Picasso")

userTwoAvatar.append(userTwoImage)


const userThreeAvatar = document.createElement("div")
const userThreeName = document.createElement("span")

userThreeAvatar.classList.add("avatar-small")

userThreeName.innerText = "Van Gogh"

userThreeWidget.append(userThreeAvatar, userThreeName)

const userThreeImage = document.createElement("img")

userThreeImage.classList.add("image-correction")
userThreeImage.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU")
userThreeImage.setAttribute("alt", "Van Gogh")

userThreeAvatar.append(userThreeImage)

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

// the feed section
const feedList = document.createElement("ul")
feedList.classList.add("stack")

feedSectionEl.append(feedList)

const post = document.createElement("li")
post.classList.add("post")

feedList.append(post)

// adding children to list items
const posterAvatarEl = document.createElement("div")
posterAvatarEl.classList.add("chip", "active")

const postImageEl = document.createElement("div")
postImageEl.classList.add("post--image")

const postContentEl = document.createElement("div")
postContentEl.classList.add("post--content")

const postCommentsContainer = document.createElement("div")
postCommentsContainer.classList.add("post--comments")

post.append(posterAvatarEl, postImageEl, postContentEl, postCommentsContainer)

// adding poster avatar to post
const posterAvatar = document.createElement("div")
const posterName = document.createElement("span")

posterAvatar.classList.add("avatar-small")

posterName.innerText = "Salvador Dali"

posterAvatarEl.append(posterAvatar, posterName)

const posterImage = document.createElement("img")

posterImage.classList.add("image-correction")
posterImage.setAttribute("src", "https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg")
posterImage.setAttribute("alt", "Salvador Dali")

posterAvatar.append(posterImage)

// add image
const postImage = document.createElement("img")
postImage.setAttribute("src", "https://images.unsplash.com/photo-1616745309504-0cb79e9ae590?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60")
postImage.setAttribute("alt", "undefined")
postImage.classList.add("image-correction")

postImageEl.append(postImage)

// add content
const postHeader = document.createElement("h2")
postHeader.innerText = "A tree in blossom"

const postContent = document.createElement("p")
postContent.innerText = "Spring is finally here... I just love the colours."

postContentEl.append(postHeader, postContent)

// add comments elements
const commentsHeader = document.createElement("h3")
commentsHeader.innerText = "Comments"

const commentOneContainer = document.createElement("div")
commentOneContainer.classList.add("post--comment")

const commentTwoContainer = document.createElement("div")
commentTwoContainer.classList.add("post--comment")

const commentForm = document.createElement("form")
commentForm.setAttribute("id", "create-comment-form")
commentForm.setAttribute("autocomplete", "off")

postCommentsContainer.append(commentsHeader, commentOneContainer, commentTwoContainer, commentForm)

// comment one content
const commentOneAvatar = document.createElement("div")
const commentOne = document.createElement("p")

commentOneAvatar.classList.add("avatar-small")

commentOne.innerText = "What a great photo!!"

commentOneContainer.append(commentOneAvatar, commentOne)

const commentOneImage = document.createElement("img")

commentOneImage.classList.add("image-correction")
commentOneImage.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU")
commentOneImage.setAttribute("alt", "Van Gogh")

commentOneAvatar.append(commentOneImage)

// comment two content
const commentTwoAvatar = document.createElement("div")
const commentTwo = document.createElement("p")

commentTwoAvatar.classList.add("avatar-small")

commentTwo.innerText = "So beautiful... perfect!"

commentTwoContainer.append(commentTwoAvatar, commentTwo)

const commentTwoImage = document.createElement("img")

commentTwoImage.classList.add("image-correction")
commentTwoImage.setAttribute("src", "https://www.sartle.com/sites/default/files/images/artist/pablo-picasso-137216-5115406.jpg")
commentTwoImage.setAttribute("alt", "Picasso")

commentTwoAvatar.append(commentTwoImage)

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