// CODE HERE

let posts 

// fetch data for feed upon log in
// async function getPost () {
//     // make func async
//     const data = await fetch('https://us-central1-codesmith-curriculum-server.cloudfunctions.net/app/images')
//     const dataJSON = await data.json()
//     posts = dataJSON
// }

// getPost()

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
        let filtered = data.filter (post => {
            if (!post.includes('fake')) {
                return post
            }
        })  
        const html = filtered.map((post) => {
            if (post !== undefined) {
                return `<li><img src="${post}"></li>`;
            } else {
                return
            }
        });
        document.getElementById("posts").innerHTML = html;
      });
  }
  
  getPosts();

// function createPostsList (array) {
//     console.log('Im running')
//     return `
//         <ul>
//         ${posts.map(post => convertToPostItem(post))}
//         </ul>
//     `
// }

// function convertToPostItem(post) {
//     return `<li>
//                 <img src="${post}">
//             </li>`
// }

// const postsDiv = document.getElementById('posts')
// postsDiv.innerHTML = createPostsList(posts)