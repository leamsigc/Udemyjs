//callback
const post = [{title:'one',body:'post one'},{title:'two',body:'post two'},{title:'three',body:'post three'}];


console.log(post);

//create post 
function createPost(newPost,callback){
setTimeout(() => {
    post.push(newPost);
    callback();
},  2000);
}
//get all the post
function getPost(){
    setTimeout(() => {
        let output ='';
        post.map(item => output+=`<li>${item.title}  <small>${item.body}</small></li>`);
        document.querySelector('.display_js').innerHTML = output;
    }, 1000);
}

createPost({title:'four',body:'last post'},getPost);
