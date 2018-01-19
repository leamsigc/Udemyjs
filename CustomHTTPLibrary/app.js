const call  = new customHTTP();
// const post = call.get('https://jsonplaceholder.typicode.com/posts');
// console.log(post);


call.get('https://jsonplaceholder.typicode.com/posts', function(error,response){
    if(error){
        console.log(error);
    }else{
        console.log(response);
    }
});

call.post();