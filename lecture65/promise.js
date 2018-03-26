//get element from the dom
const demo = document.querySelector('.demo-js');

const posts = [{
    title: 'Title 1',
    body: 'body 1'
  },
  {
    title: 'Title 2',
    body: 'body 2'
  }
];
//create post
function createPost(post) {
  //new promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error: something went wrong');
      }
    }, 2000)
  });
}
//get post
function getPost() {
  setTimeout(() => {
    let output = '';

    posts.forEach(post => {
      output += `<li>${post.title} <br> ${post.body}</li>`;

    });

    demo.innerHTML = output;
  }, 1000);
}


//create post
createPost({
    title: 'title 3',
    body: 'body 3'
  })
  .then(getPost)
  .catch(err => console.log(err));
