
//fetching images from data url

//declare posts var
let posts 
// empty posts arr containing objects of ea post
const postsArr = []
//initialize id/index
let id = 0
//function for turning ea post into an obj and stored in postsArr
function postAttr (array) {
    array.forEach (post => {
        const obj = {img: post, id: id, liked: false, comments: []}
        postsArr.push(obj)
        id++
    })
}
//function to fetch data from url 
function getPosts() {
    fetch(
      "https://us-central1-codesmith-curriculum-server.cloudfunctions.net/app/images"
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("ERROR");
        }
        return res.json();
      })
      .then((data) => {
        //filter out broken urls
        let filtered = data.filter (post => {
            if (!post.includes('fake')) {
                return post
            }
        })
        //call postAttr to make obj w attributes for ea post and push to postsArr
        postAttr(filtered)
        //map postsArr to inject li tag w image url for ea post
        const html = postsArr.map((post) => {
            if (post !== undefined) {
                return `
                    <li>
                        <img src="${post.img}" class="image" ondblclick="liked(${post.id})">
                        <div class="sub-image">
                            <div class="likebar">
                                <div class="heart heart-${post.id}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                    </svg>
                                </div>
                                <div class="likers">
                                    
                                </div>
                                <div class="threedot">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="descrip">
                                <div class="post-pfp">
                                    <img src="https://images.squarespace-cdn.com/content/v1/54e23038e4b0b72929c6b881/1617639350411-B7KTKH88771MDKVAO91V/8219.jpg?format=1000w" width="30" height="30">
                                </div>
                                <div class="description">
                                    <span class="poster-user">
                                        <strong>user2</strong>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    </span>
                                </div>
                            </div>
                            <div id="new-comments">
                                    <ul class="comment-section comment-section-${post.id}">
                                    </ul>
                                </div>
                            <div class="comments">
                                <div class="comment-text">
                                    <input id="new-comment" type="text" placeholder="Add a comment...">
                                </div>
                                <div class="submit-button">
                                    <input id="submitter" type="submit" value="Submit" onclick="postComment(${post.id})">
                                </div>
                            </div>
                        </div>
                    </li>
                    `;
            } else {
                return
            }
        }).join('');
        //inject html into innerHTML tag posts
        document.getElementById("posts").innerHTML = html;
      });
  }
//call getPosts
getPosts();


//function for liked which will run ondblclick
// function liked (post) {
//     let heart = document.getElementById("heart-${post.id}")
//     heart.style.color="red"
// }

// $(document).ready (() => {
//     $('img.image').on('click', () => {
//         $('#heart').css('color', 'red')
//     })
// })

const liked = (id) => {
    const post = postsArr.find((p) => p.id === id);
    post.liked = !post.liked;
    let el = document.querySelector(`.heart-${post.id}`)
    el.classList.toggle('active')
}

// const el = document.querySelectorAll('.image')

// el.forEach(el => {
//     el.addEventListener('ondblclick', 
//     })

//function for post comments
// function postComment (id) {

// }


// function addComment ()

function postComment (id) {
    const newComment = document.getElementById("new-comment").value
    console.log(newComment)
    const commentSection = document.querySelector(`.comment-section-${id}`)
    commentSection.insertAdjacentHTML('beforeend', `<li>${newComment}</li>`)
    // console.log(commentSection)
}

