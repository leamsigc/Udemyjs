console.log('we are conected');
const demo = document.querySelector('.demo-js');
//post
const posts = [
  {
    title: 'Post one',
    body: 'This is post one'
  },
  {
    title: 'Post two',
    body: 'This is post two'
  }
];

//create post
function createPost(post,callBack){

  setTimeout(() => {
    posts.push(post);
    callBack();
  }, 2000);
}

//get post
function getPost(){

  setTimeout(() => {
    let output = '';

    posts.forEach( post => {
      output+= `<li> Title: ${post.title} </br> Post Body: ${post.body}</li>`
    });

    demo.innerHTML = output;
  },1000)
}

createPost({title:'Post three',body:'Post three body'}, getPost);
